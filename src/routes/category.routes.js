const express = require('express');
const router = express.Router();
const connection = require('../database');

router.get('/category', (request, response) => {
  connection.query("SELECT * FROM category",(err,result)=>{
    if (err) throw err;
    (response.json(result));
  })
})

router.get('/category/:id', (request, response) => {
 const {id} = request.params
  connection.query(`SELECT * FROM product  WHERE category LIKE '%${ id }%'`,(err,result)=>{
    if (err) throw err;
    (response.json(result));
    console.log(response);
  })
})
