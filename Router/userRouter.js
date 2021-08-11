import express from "express";
import userController from "../Controllers/userController.js";
import Validation from "../Middleware/Validation.js";

import postSchema from "../Validation/users.post.js";

const router = express.Router();

const debugResponse = (req, res, next) => {

    res.json(req.body); // der hält es dann erstmal auf an der stelle, damit man zum Beispiel noch kein user erstellt und nur das Schema prüft und noch keine Verbindung zur Datenbank nötig ist
}

// router.get("/:name", getUserById);

router.post("/", Validation(postSchema), debugResponse, userController.create);

export default router