import {Router } from 'express'
import { getme, register } from '../controller/auth.controller.js';

const authRouter = Router();


// POST /api/auth/register

authRouter.post("/register", register)
authRouter.get("/get-me", getme)


export default authRouter;