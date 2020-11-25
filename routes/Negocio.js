const express = require('express');
const router = express.Router();
const mysqlConnection = require('../bd/bd'); 

router.get('/negocio', (req, res) =>{
  mysqlConnection.query('SELECT * FROM Negocio',(err, rows, fields)=>{
    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });
});




module.exports= router;

