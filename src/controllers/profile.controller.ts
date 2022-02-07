import Profile from "../models/profile.modal";
import { Response, Request } from "express";
import { IUserRegister, IUserLogin } from "../types/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Joi from "@hapi/joi";
import { registerSchema, loginSchema } from "../utils/userValidations";

export const registerProfile = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const result = registerSchema.validate({ name, email, password });
  if (!result.error) {
    Profile.findOne({ email: email }).then((profile) => {
      if (profile) return res.status(400).json("Profile already exists");

      const newProfile = new Profile({
        name,
        email,
        password,
      });

      bcrypt.genSalt(12, (err: any, salt: any) =>
        bcrypt.hash(newProfile.password, salt, (err: any, hash: string) => {
          if (err) throw err;

          newProfile.password = hash;

          newProfile
            .save()
            .then((profile) => {
              res.status(200).json({ profile: "Successfully Registered" });
            })

            .catch((err) => console.log(err));
        })
      );
    });
  } else {
    res.status(422).json(result.error.details[0].message);
  }
};

export const loginProfile = (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = loginSchema.validate({ email, password });
  if (!result.error) {
    Profile.findOne({ email }).then((profile) => {
      if (!profile) return res.status(400).json("Incorrect Email or Password");

      bcrypt.compare(password, profile.password).then((isMatch: boolean) => {
        if (!isMatch)
          return res.status(400).json("Incorrect Email or Password");
        const token = jwt.sign(
          { email: profile.email, userId: profile._id },
          "secret_this_should_be_longer",
          { expiresIn: "2h" }
        );
        res.status(200).json({
          token: token,
          profile: { email: profile.email, name: profile?.name },
          expiresIn: 360000000,
          userId: profile._id,
        });
      });
    });
  } else {
    console.log(result.error);
    res.status(422).json(result.error.details[0].message);
  }
};

export const getprofile = (req: Request, res: Response) => {
  Profile.find(function (err: string | null, profiles: IUserRegister) {
    if (err) {
      console.log(err);
    } else {
      res.json(profiles);
    }
  }).sort({ created: -1 });
};

export const deleteprofile = (req: Request, res: Response) => {
  Profile.remove({ _id: req.params.id }, function (err) {
    if (!err) {
      res.status(200).send({ status: "deleted" });
    } else {
      res.status(500).send({ status: "error" });
    }
  });
};

export const getprofilebyid = (req: Request, res: Response) => {
  let id = req.params.id;
  Profile.findById(id, function (err: string | null, profile: IUserRegister) {
    res.json(profile);
  });
};

export const addprofile = (req: Request, res: Response) => {
  let profile = new Profile(req.body);
  profile
    .save()
    .then((profile) => {
      res.status(200).json({ profile: "profile added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new profile failed");
      console.log(err);
    });
};

export const updateprofile = (req: Request, res: Response) =>
  Profile.findById(
    req.params.id,
    function (err: string | null, profile: IUserRegister) {
      if (!profile) {
        res.status(404).send("data is not found");
      } else {
        profile.name = req.body.name;

        profile.email = req.body.email;

        profile
          .save()
          .then((profile) => {
            res.json("profile updated");
          })
          .catch((err) => {
            res.status(400).send("Update not possible");
            console.log("err");
          });
      }
    }
  );
