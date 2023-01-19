const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require ('cors');
const bcrypt = require ('bcrypt');
const fileUpload = require ('express-fileupload');

const app = express()
const port =5000;
const saltRounds = 10;

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'tutorias',
//     password:'',
//   });
  
  app.use(bodyParser.json());
  app.use(cors());
  app.use(fileUpload());




app.get('/', function (req, res) {
    bcrypt.hash('juanito1010', saltRounds, function(err, hash) {
        res.send(hash);
    });
})

app.listen(port, () =>{
    console.log(`server running at http://localhost:${port}/`);
 
});