// 🧩 routes/rituals.js
// ------------------------------------------------------------
// Définition des routes principales liées aux rituels.
// Chaque route appelle les fonctions du contrôleur correspondant.
// ------------------------------------------------------------

import express from "express";
import {
  getAllRituals,
  getAvailableMonths,
  getRitualByMonthAndDay,
  getRitualsByMonth,
} from "../controllers/ritualsController.js";

const router = express.Router();

// 🔹 GET /api/rituals — Retourne tous les rituels (12 mois)
router.get("/", getAllRituals);

// 🔹 GET /api/rituals/months — Liste des fichiers (mois) disponibles
router.get("/months", getAvailableMonths);

// 🔹 GET /api/rituals/:month — Données d’un mois spécifique
router.get("/:month", getRitualsByMonth);

// 🔹 GET /api/rituals/:month/:day — Rituel d’un jour précis
router.get("/:month/:day", getRitualByMonthAndDay);

export default router;
