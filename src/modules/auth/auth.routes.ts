import { Router } from "express";
import { AuthController } from "./auth.controller";
import asyncHandler from "../../utils/asyncHandler";

const authroutes = Router();

authroutes.post("/register", asyncHandler(AuthController.register));

export default authroutes;
