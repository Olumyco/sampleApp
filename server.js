import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "client"), { index: false }));

app.get("/", (req, res) => {
  res.json({
    message: "App is fine!",
  });
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(4600, () => console.log(`Server running on port 4600`));
