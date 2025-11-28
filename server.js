import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// In-memory vote counts (reset if server restarts)
const votes = { aggies: 0, longhorns: 0 };

// Cast a vote
app.post("/vote", (req, res) => {
  const { team } = req.body;
  if (team === "aggies") votes.aggies++;
  else if (team === "longhorns") votes.longhorns++;
  res.json(votes);
});

// Get results
app.get("/results", (req, res) => {
  res.json(votes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
