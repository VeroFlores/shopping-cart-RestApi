
const  express = require('express');
const  router = express.Router();
const connection = require('../database');


   router.get('/', (request, response) => {
    connection.query("SELECT * FROM category",(err,result)=>{
      if (err) throw err;
      (response.json(result));
    })
  })

  module.exports = router;

