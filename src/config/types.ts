import { NextFunction, Request, Response } from "express";

export interface LoginRequest extends Request {
    body: { username: string }
    password: { password: string }
}