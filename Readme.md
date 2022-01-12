# REST API BSALE

## Technologies
- Express
- Mysql
- Eslint
- Nodemon
- Cors

 ## Endpoints

Endpoints  | Method | Return 
------------- | ------------|-------------
/api/category  | GET | List of categories.
/api/product | GET | List of all products.
/api/product/product  | GET | List of all products which do match with search.
/api/product/category/:id  | GET | List of all products whose belongs to selected category.

## Deployment 

Temporarily, this project is not deployed.
So run 

~~~
npm run dev
~~~

This is the following issue that shows when try to deploy in netlify
~~~
Error: connect ECONNREFUSED 127.0.0.1:3306
~~~

