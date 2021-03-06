 const express = require('express');
 const cors = require('cors');
 const dotenv =require('dotenv');
 const connection = require ('./database');
 dotenv.config()


 const categoryRoutes = require ('./routes/category.routes');
 const productRoutes = require ('./routes/products.routes');


 const app = express()

 app.use(cors());

 app.use(express.json());

 connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.use('/api/category', categoryRoutes)
app.use('/api/product', productRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 // La aplicación inicia un servidor y escucha las conexiones en el puerto 3500.
 // arriba se define y acá se utiliza
//  app.set('port',process.env.PORT || 3000);
//  app.listen(app.get('port'), () => {
//    console.log('server on port',app.get('port'))
//  })
const  port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`App running on port ${port} `);
})



 // Routes






