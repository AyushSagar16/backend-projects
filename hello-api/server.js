const express = require("express");
const app = express();

const PORT = 3000;

// GET /
app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

// GET /hello?name=YourName
app.get("/hello", (req, res) => {
  const name = req.query.name; // query parameter

  if (name) {
    res.json({ message: `Hello, ${name}!` });
  } else {
    res.json({ message: "Hello, stranger!" });
  }
});

// GET /time
app.get("/time", (req, res) => {
  res.json({ now: new Date().toISOString() });
});

// GET /random
app.get("/random", (req, res) => {
  const number = Math.floor(Math.random() * 100) + 1;
  res.json({ number });
});

app.get("/testing", (req, res) => {
    const string = "hello world"
    res.json({ string });
});

// Catch-all 404
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
