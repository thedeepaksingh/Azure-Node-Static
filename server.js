import express from "express";
const app = express();
const port = 3000;

// Import routes
import indexRouter from "./routes/indexroutes.js";

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use index routes for the root path
app.use("/", indexRouter);

// Azure route
app.get("/azure", (req, res) => {
  try {
    res.json({ message: "Successful" });
  } catch (e) {
    console.error("Error in /azure route:", e); // Log the error
    res.status(500).json({ error: "Internal Server Error" }); // Proper status and message
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
