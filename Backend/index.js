import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;
const saltRounds = 10;

app.use(cors());
app.use(bodyParser.json());

//const db = new pg.Client({
//  connectionString: process.env.DATABASE_URL,
//  ssl: {
//    rejectUnauthorized: false
//  },
//});

//db.connect()
//  .then(() => console.log('Connected to the Heroku database'))
//  .catch(err => console.error('Connection error', err.stack));

const db = new pg.Client({
    user:"postgres",
    host: "localhost",
    database: "PMAblog",
    password: "Hyl!anWarri0r",
    port: 5432,
  });

  db.connect();


app.post("/newUser", async (req,res) =>{
    let fname = req.body.fname;
    let lname = req.body.lname;
    let username = req.body.username;
    let password = req.body.password;
    let hashsedPassword = '';
    let email = req.body.email;
    let age = req.body.age;
    let color = req.body.color;
    
    bcrypt.hash(password, saltRounds, function(err, hash){
        if(err){
            console.error(err);
            return;
        }
        hashsedPassword = hash;
    })

    try{
        const result = await db.query('INSERT INTO userinfo (username, email, password, fname, lname, age, color) VALUES ($1, $2, $3, $4, $5, $6, $7)', [username, email, hashsedPassword, fname, lname, age, color]);
        res.json(result.rows);
    } catch(err){
        console.err(error);
        res.status(500).send("Error Fetching Data");
        return;
    }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});