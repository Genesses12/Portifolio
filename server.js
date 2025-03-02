import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mysql from "mysql2";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "401135",
  database: "contact_form",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL conectado...");
});

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  const sql = "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) throw err;
    res.send("Messagem adicionada ao Banco de dados!");
  });
});

app.listen(port, () => {
  console.log(`Server online na porta ${port}`);
});
