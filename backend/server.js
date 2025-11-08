import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { errorHandler } from "./middlewares/errorHandler.js";
import messagesRoutes from "./routes/messages.js";
import monthsRoutes from "./routes/months.js";
import ritualsRoutes from "./routes/rituals.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// 🔗 Monte les routes API
app.use("/api/rituals", ritualsRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/months", monthsRoutes);
app.use(errorHandler);

// Route de test
app.get("/api/test", (req, res) => {
  res.json({ message: "✅ Backend Orelys Ritual Mind opérationnel" });
});

app.listen(PORT, () => {
  console.log(`🚀 Serveur backend lancé sur le port ${PORT}`);
});
