import express, { json, urlencoded } from "express";
import cors from "cors";
import products from "./static/products.json" assert { type: "json" };
const app = express();
const PORT = 3001;

app.use(
  cors({
    origin: "*",
  })
);
app.use(json());
app.use(urlencoded({ extended: false }));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.use("/", (req, res) => {
  res.json({ message: "Hello from Express Server" });
});

app.get("/catalog", async (req, res) => {
  res.json(products);
});
