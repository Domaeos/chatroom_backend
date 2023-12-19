import { NextFunction, Request, Response } from "express";

export async function getRoles(req: Request, res: Response) {
    try {
        res.status(200).send("hi");
    } catch(err) {
        if (err instanceof Error) {
            console.log("Error", err)
        }
    }
}

export async function registerUser(req: Request, res: Response, next: NextFunction) {
    try {
        res.status(200).send({info: "In register controller"})
    } catch(err) {

    }
}