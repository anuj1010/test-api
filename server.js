require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("api is running............");
});

app.listen(PORT, () => {
  console.log(`server is connected and live on port ${PORT}`);
});
