import { registerDoctor } from "../controllers/doctor.controller.js";
import { Router } from "express";

const router = Router()

router.route("/register").post(registerDoctor);

export default router

