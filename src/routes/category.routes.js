
const { Router } = require('express');
const connection = require('../database');
const router = Router();

   router.get('/', (request, response) => {
    connection.query("SELECT * FROM category",(err,result)=>{
      if (err) throw err;
      (response.json(result));
    })
  })

  module.exports = router;

