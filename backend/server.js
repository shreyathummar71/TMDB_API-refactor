import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors package

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use cors middleware to enable CORS
app.use(cors());

// Simple route for testing
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API route
app.get("/api/movies/popular", async (req, res) => {
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network issue, ${response.status}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
