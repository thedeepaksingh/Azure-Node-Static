import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const indexRouter = express.Router();

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

indexRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
});

// Route to static HTML file
indexRouter.get("/static/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "about.html"));
});

export default indexRouter;
