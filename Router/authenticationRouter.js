import express from "express";
import authenticationController from "../Controllers/authenticationController.js";

const router = express.Router();

router.post("/", authenticationController.loginByEmail);

export default router;