import express from "express";
import { NextFunction, Request, Response } from "express";
// import { MongoClient } from "mongodb";
// import User from "./Models/user.model"
import { registerUserController, loginController } from "./Controllers/Controllers";
import { LoginRequest } from "./config/types";

const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello" });
});

app.post("/register", (req: Request, res: Response, next: NextFunction) => {
  registerUserController(req, res, next)
});
app.post("/login", (req: Request, res: Response, next: NextFunction) => {
  loginController(req as LoginRequest, res, next)
})

app.use((req, res, next) => {
  res.status(500).send({Ryan: "Error sorry"})
})


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});