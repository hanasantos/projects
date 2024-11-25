// server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies

// SQLite database setup
const db = new sqlite3.Database("./formData.db", (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Create the form_data table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS form_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT,
    glebaData TEXT
  )
`);

// Route to handle form submissions
app.post("/submit", (req, res) => {
  const { email, glebaData } = req.body;

  // Insert form data into the database
  db.run(
    "INSERT INTO form_data (email, glebaData) VALUES (?, ?)",
    [email, glebaData],
    function (err) {
      if (err) {
        console.error("Error inserting data:", err.message);
        res.status(500).json({ error: "Error inserting data" });
      } else {
        res.status(200).json({ message: "Data inserted successfully" });
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
