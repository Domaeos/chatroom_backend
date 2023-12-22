import { NextFunction, Request, Response } from "express";
import { MongoClient } from "mongodb";
import { LoginRequest } from "../config/types";

const dotenv = require('dotenv');
dotenv.config();

const mongoClient = new MongoClient(`${process.env.MONGOURL}`)
const database = mongoClient.db(`chatroom`)
const userCollection = database.collection('users');

export async function registerUser(req: Request, res: Response, next: NextFunction) {
    const result = await userCollection.insertOne({
        username: "RyanModelTest",
        email: "test@test.com",
        password: "fakepass"
    })
    return result;
}
