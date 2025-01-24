const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

let users = [];
let products = [
  { id: 1, name: "Product 1", price: "$20" },
  { id: 2, name: "Product 2", price: "$30" },
  { id: 3, name: "Product 3", price: "$40" },
];

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  users.push({ username, email, password });
  res.status(201).send({ message: "User registered successfully!" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.send({ message: "Login successful!" });
  } else {
    res.status(401).send({ message: "Invalid credentials!" });
  }
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
