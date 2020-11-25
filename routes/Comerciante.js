const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/bd');


router.get('/comerciante', (req, res) =>{

  mysqlConnection.query('SELECT * FROM Comerciante', (err, rows, fileds)=>{
      if (!err){
          res.json(rows);
      } else {
          console.log(err);
      }
  });
});



module.exports= router;