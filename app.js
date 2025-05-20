import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Root route returns simple HTML
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Welcome to My Azure App</h1>
        <p>This is a simple HTML page served by Express.</p>
      </body>
    </html>
  `);
});

// Azure test route returns JSON
app.get("/azure", (req, res) => {
  res.json({ message: "Successful" });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
