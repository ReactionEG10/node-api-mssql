const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const cors = require('cors')

const product = require('./src/routes/Product')
const userlogin = require('./src/routes/UserLogin');
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow_Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-Whith, Content-Type, Accept",
       "multipart/form-data",
    );
    next();
  });
// Use the data route

app.use('/api/product',product );
app.use('/api/user',userlogin );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});