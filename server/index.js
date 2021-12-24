const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'inilleBpdtXH-2453@',
    database: 'CRUDDataBase'
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM news";

    db.query(sqlSelect, (err, result) => {
        res.send(result)
    });
  })

app.post('/api/insert', async (req, res) => {
    
    const title = req.body.title;
    const description = req.body.description;

    const sqlInsert = "INSERT INTO news (title, description) VALUES (?, ?)";
    db.query(sqlInsert, [title, description], (err, result) => {
        console.log(result);
    });

});

app.listen(3001, () => {
    console.log('running on port 3001');
});