// backend/controllers/messagesController.js
// ----------------------------------------------------
// Gère les opérations de lecture des messages inspirants
// ----------------------------------------------------

import { loadJSON } from "../services/dataLoader.js";

export const getAllMessages = async (req, res, next) => {
  try {
    const messages = await loadJSON("messages.json");
    res.status(200).json(messages);
  } catch (err) {
    next(err);
  }
};

export const getMessageById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const messages = await loadJSON("messages.json");
    const message = messages.find((m) => m.id === parseInt(id));

    if (!message) {
      return res.status(404).json({ message: "Message non trouvé" });
    }

    res.status(200).json(message);
  } catch (err) {
    next(err);
  }
};
