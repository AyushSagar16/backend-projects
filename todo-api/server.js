const express = require("express");
const app = express();

app.use(express.json());

let tasks =[];
let nextId = 1;

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});

// POST
app.post("/tasks", (req, res) =>{
    const title = req.body.title;

    if (!title || title.length < 2) {
      return res.status(400).json({
        error: "Title must be at least 2 characters"
      });
    }

    const task = {
      id: nextId++,
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(task);

    res.status(201).json(task);
});
