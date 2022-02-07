import { Router } from "express";

import {
  registerProfile,
  loginProfile,
  getprofile,
  getprofilebyid,
  addprofile,
  deleteprofile,
  updateprofile,
} from "../controllers/profile.controller";
import { sendBitcoin } from "../controllers/blockcypherApi.Controller";
import { addQrData } from "../controllers/qrData.controller";
import checkAuth from "../utils/auth_check";

const router: Router = Router();

router.route("/register").post(registerProfile);

router.route("/login").post(loginProfile);

router.route("/getprofiles").get(checkAuth, getprofile);

router.route("/getprofile/:id").get(checkAuth, getprofilebyid);
router.route("/sendcoin").post(checkAuth, sendBitcoin);

router.route("/addprofile").post(checkAuth, addQrData);

router.route("/deleteprofile/:id").delete(checkAuth, deleteprofile);
router.route("/updateprofile/:id").post(checkAuth, updateprofile);
module.exports = router;
