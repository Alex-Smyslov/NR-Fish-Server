require("dotenv").config();
const express = require("express");
const cors = require("cors");
const products = require("./static/products.json");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/catalog", async (req, res) => {
  res.json(products);
});
