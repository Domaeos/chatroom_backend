// server filec
// import express, { Request, Response } from "express";
import express from "express";
import { NextFunction, Request, Response } from "express";
import db from "./Models/index"
// import { dbConfig } from "./config/db_config"
import { getRoles } from "./Controllers/Controllers";
import User from "./Models/user.model"
import { connect } from "http2";

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081"
}

const dotenv = require('dotenv');
dotenv.config();

const app = express();

async function mongoConnect(): Promise<void> {
  try {
    const connection = await db.mongoose.connect(`${process.env.MONGOURL}`)
    console.log(connection);
    const user = await User.create({
      username: "Ryan",
      email: "test@test.com",
      password: "fakepass"
    })

    console.log(user);

  } catch (err) {
    if (err instanceof Error) {
      console.log("Connection error", err);
      process.exit();
    }
  }

}

// function initial(): void {
  
// }

mongoConnect();


app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello" });
});

app.get("/roles", (req: Request, res: Response, next: NextFunction) => {
  getRoles(req, res);
})


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});