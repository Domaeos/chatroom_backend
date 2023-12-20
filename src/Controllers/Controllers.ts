import { NextFunction, Request, Response } from "express";
import { registerUser } from "../Models/models";

export async function getRoles(req: Request, res: Response) {
    try {
        res.status(200).send("hi");
    } catch(err) {
        if (err instanceof Error) {
            console.log("Error", err)
        }
    }
}

export async function registerUserController(req: Request, res: Response, next: NextFunction) {
    try {
        const result = await registerUser(req, res, next)
        res.status(200).send(result)
    } catch(err) {
        next(err);
    }
}