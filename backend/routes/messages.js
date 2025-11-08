// backend/routes/messages.js
// ----------------------------------------------------
// Routes pour la gestion des messages inspirants
// ----------------------------------------------------

import express from "express";
import {
  getAllMessages,
  getMessageById,
} from "../controllers/messagesController.js";

const router = express.Router();

router.get("/", getAllMessages);
router.get("/:id", getMessageById);

export default router;
