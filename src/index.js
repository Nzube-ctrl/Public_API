require(`dotenv`).config();
const express = require(`express`);
const PORT = process.env.PORT || 8000;
const cors = require(`cors`);
const app = express();
const apiRoute = require(`./routes/api.routes.js`);

app.use(cors());
app.use("/api", apiRoute);

app.get("/", (req, res) => {
  res.json({ message: `Public API` });
});

app.all("*", (req, res) => {
  res.status(404).json({
    message: `Page Not found`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
