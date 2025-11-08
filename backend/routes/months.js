// backend/routes/months.js
// ----------------------------------------------------
// Routes pour la gestion des mois et du contenu mensuel
// ----------------------------------------------------

import express from "express";
import {
  getAllMonths,
  getMonthContent,
} from "../controllers/monthsController.js";

const router = express.Router();

router.get("/", getAllMonths);
router.get("/:month", getMonthContent);

export default router;
