// backend/controllers/monthsController.js
// ----------------------------------------------------
// Gère les requêtes liées aux mois (ensemble des fichiers mensuels JSON)
// ----------------------------------------------------

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsonDir = path.join(__dirname, "../content/json");

export const getAllMonths = async (req, res, next) => {
  try {
    const files = fs.readdirSync(jsonDir).filter((f) => f.endsWith(".json"));
    const months = files.map((f) => f.replace(".json", ""));
    res.status(200).json({ months });
  } catch (err) {
    next(err);
  }
};

export const getMonthContent = async (req, res, next) => {
  try {
    const { month } = req.params;
    const filePath = path.join(jsonDir, `${month}.json`);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "Fichier mensuel introuvable" });
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};
