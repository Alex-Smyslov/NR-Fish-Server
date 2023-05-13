const express = require("express");
const cors = require("cors");
const products = require("./static/products.json");
const product1 = require("./static/product1.json");
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Express Server");
});

app.get("/catalog", async (req, res) => {
  res.json(products);
});

app.get("/catalog/1", async (req, res) => {
  res.json(product1);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
