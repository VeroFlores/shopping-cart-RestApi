
const  express = require('express');
const  router = express.Router();
const connection = require('../database');



   router.get('/', (request, response) => {

    connection.query("SELECT * FROM product",(err,result)=>{

     if (err) throw err;
     (response.json(result));

    })
  })

  router.get(`/product`, (request, response) => {

    const {search} = request.query;

    connection.query(`SELECT * FROM product WHERE name LIKE '%${search}%'`,(err,result)=>{
      if (err) throw err;
      (response.json(result));
    })
  })

  router.get('/category/:id', (request, response) => {

    const {id} = request.params
     connection.query(`SELECT * FROM product  WHERE category LIKE '%${ id }%'`,(err,result)=>{
       if (err) throw err;
       (response.json(result));
     })
   })

   module.exports = router;
