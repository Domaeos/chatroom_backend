import express from "express";
import { NextFunction, Request, Response } from "express";
import { MongoClient } from "mongodb";
import User from "./Models/user.model"
import { registerUser } from "./Controllers/Controllers";
import { mongo } from "mongoose";

const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

const mongoClient = new MongoClient(`${process.env.MONGOURL}`)
async function mongoConnect(): Promise<void> {
  try {
    const database = mongoClient.db(`chatroom`)
    const userCollection = database.collection('users');
    const user = await User.create(userCollection, {
      username: "Ryan",
      email: "test@test.com",
      password: "fakepass"
    });

    console.log(user);

  } catch (err) {
    if (err instanceof Error) {
      console.log("Connection error", err);
      process.exit();
    }
  }

}

mongoConnect();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello" });
});

app.post("/register", (req: Request, res: Response, next: NextFunction) => {
  registerUser(req, res, next)
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});