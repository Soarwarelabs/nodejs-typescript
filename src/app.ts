import express, { Express } from "express";
var config1 = require("./config/db");
var config = "./config/config";
var http = require("http");
require("dotenv").config();
// var dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var cors = require("cors");

var profile = require("./routes/profile.routes");
var qrData = require("./routes/qrData.routes");

const app: Express = express();
var server = http.createServer(app);
import mongoose from "mongoose";
import { MongoURI } from "./config/db";
mongoose
  .connect(MongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err: string) => console.log(err));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", profile);

server.listen(process.env.PORT || 3000, (err: string) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", process.env.PORT || 3000);
});
