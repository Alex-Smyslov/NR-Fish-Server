const express = require("express");
const cors = require("cors");
const products = require("./static/products.json");
const app = express();
const PORT = 3001;

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

app.use("/", (req, res) => {
  res.json({ mesaage: "Hello from Express Server" });
});

app.get("/catalog", async (req, res) => {
  res.json(products);
});
