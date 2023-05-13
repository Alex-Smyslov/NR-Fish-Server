const express = require("express");
const cors = require("cors");
const products = require("./static/products.json");
const product1 = require("./static/product1.json");
const product2 = require("./static/product2.json");
const product3 = require("./static/product3.json");
const product4 = require("./static/product4.json");
const product5 = require("./static/product5.json");
const product6 = require("./static/product6.json");
const product7 = require("./static/product7.json");
const product8 = require("./static/product8.json");
const product9 = require("./static/product9.json");
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
app.get("/catalog/2", async (req, res) => {
  res.json(product2);
});
app.get("/catalog/3", async (req, res) => {
  res.json(product3);
});
app.get("/catalog/4", async (req, res) => {
  res.json(product4);
});
app.get("/catalog/5", async (req, res) => {
  res.json(product5);
});
app.get("/catalog/6", async (req, res) => {
  res.json(product6);
});
app.get("/catalog/7", async (req, res) => {
  res.json(product7);
});
app.get("/catalog/8", async (req, res) => {
  res.json(product8);
});
app.get("/catalog/9", async (req, res) => {
  res.json(product9);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
