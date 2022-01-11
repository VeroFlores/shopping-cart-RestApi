 const express = require('express');
 const cors = require('cors');
 const dotenv =require('dotenv');
 dotenv.config()


 const categoryRoutes = require ('./routes/category.routes');
 const productRoutes = require ('./routes/products.routes');


 const app = express()

 app.use(cors());

 app.use(express.json());

 // La aplicación inicia un servidor y escucha las conexiones en el puerto 3500.
 // arriba se define y acá se utiliza
 app.set('port',process.env.PORT || 3000);
 app.listen(app.get('port'), () => {
   console.log('server on port',app.get('port'))
 })

 // Routes
 app.use('/api/category', categoryRoutes)
 app.use('/api/product', productRoutes)





