import { fileURLToPath } from "url";
import { dirname } from "path";

import Database from "./db/database.js";
import express from "express";
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();
const db = new Database();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/clients", (req, res) => {
  const result = db.map((item) => ({
    id: item.id,
    name: item.name,
  }));
  res.json(result);
});

app.get("/clients/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

app.get("/clients/name/:clientName", (req, res) => {
  const { clientName } = req.params;
  db.findByName(clientName)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(404).json({ error: error.message });
    });
});

// production
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));
  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
