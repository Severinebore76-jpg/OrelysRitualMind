// 🧩 backend/server.js
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";

import { errorHandler } from "./middlewares/errorHandler.js";
import messagesRoutes from "./routes/messages.js";
import monthsRoutes from "./routes/months.js";
import ritualsRoutes from "./routes/rituals.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

// ✅ Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// 🔗 Monte les routes API
app.use("/api/rituals", ritualsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/months", monthsRoutes);

// Route de test
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend Orelys Ritual Mind opérationnel" });
});

// 🌐 Middleware global de gestion des erreurs
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur le port ${PORT}`);
});
