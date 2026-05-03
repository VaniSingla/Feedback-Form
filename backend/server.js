const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let feedbacks = [];

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.post("/feedback", (req, res) => {
  const { name, email, feedback } = req.body;

  if (!name || !email || !feedback) {
    return res.status(400).json({ message: "All fields required" });
  }

  feedbacks.push({ name, email, feedback });

  res.json({ message: "Feedback submitted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/feedbacks", (req, res) => {
  res.json(feedbacks);
});