import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "App is fine!",
  });
});

app.listen(4600, () => console.log(`Server running on port 4600`));
