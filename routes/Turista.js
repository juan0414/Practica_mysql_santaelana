const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/bd');


router.get('/turista', (req, res) =>{

  mysqlConnection.query('SELECT * FROM Turista', (err, rows, fileds)=>{
      if (!err){
          res.json(rows);
      } else {
          console.log(err);
      }
  });
});



module.exports= router;