import express from "express";
import { NextFunction, Request, Response } from "express";
import db from "./Models/index"
import { getRoles } from "./Controllers/Controllers";
import User from "./Models/user.model"
import { registerUser } from "./Controllers/Controllers";
// import { connect } from "http2";

const cors = require("cors");
// const corsOptions = {
//   origin: "http://localhost:8081"
// }

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

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


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send({ message: "Hello" });
});

app.post("/register", (req: Request, res: Response, next: NextFunction) => {
  registerUser(req, res, next)
});

app.get("/roles", (req: Request, res: Response, next: NextFunction) => {
  getRoles(req, res);
})


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});