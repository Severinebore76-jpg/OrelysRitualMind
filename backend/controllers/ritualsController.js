// 🧩 ritualsController.js
// ------------------------------------------------------------
// Contrôleur des routes liées aux rituels Orelys Ritual Mind.
// Utilise le service dataLoader.js pour lire les fichiers JSON.
// ------------------------------------------------------------

import {
  getRitualByDay,
  listAvailableMonths,
  loadAllRituals,
  loadMonthData,
} from "../services/dataLoader.js";

/**
 * 📚 GET /api/rituals
 * Retourne la liste complète des rituels pour tous les mois.
 */
export const getAllRituals = (req, res) => {
  try {
    const data = loadAllRituals();
    return res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (error) {
    console.error("❌ Erreur getAllRituals :", error);
    res.status(500).json({ success: false, message: "Erreur serveur interne" });
  }
};

/**
 * 📘 GET /api/rituals/:month
 * Exemple : /api/rituals/02_Fevrier_DouceurAmour
 */
export const getRitualsByMonth = (req, res) => {
  try {
    const { month } = req.params;
    const data = loadMonthData(month);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: `Mois "${month}" introuvable.`,
      });
    }

    return res.status(200).json({ success: true, month, data });
  } catch (error) {
    console.error("❌ Erreur getRitualsByMonth :", error);
    res.status(500).json({ success: false, message: "Erreur serveur interne" });
  }
};

/**
 * 🔍 GET /api/rituals/:month/:day
 * Exemple : /api/rituals/02_Fevrier_DouceurAmour/14
 */
export const getRitualByMonthAndDay = (req, res) => {
  try {
    const { month, day } = req.params;
    const ritual = getRitualByDay(month, Number(day));

    if (!ritual) {
      return res.status(404).json({
        success: false,
        message: `Rituel introuvable pour ${month}, jour ${day}.`,
      });
    }

    return res
      .status(200)
      .json({ success: true, month, day: Number(day), ritual });
  } catch (error) {
    console.error("❌ Erreur getRitualByMonthAndDay :", error);
    res.status(500).json({ success: false, message: "Erreur serveur interne" });
  }
};

/**
 * 📅 GET /api/rituals/months
 * Retourne la liste des fichiers (mois) disponibles.
 */
export const getAvailableMonths = (req, res) => {
  try {
    const months = listAvailableMonths();
    return res
      .status(200)
      .json({ success: true, count: months.length, months });
  } catch (error) {
    console.error("❌ Erreur getAvailableMonths :", error);
    res.status(500).json({ success: false, message: "Erreur serveur interne" });
  }
};
