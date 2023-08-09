const express = require('express');
const app = express();
const port = process.env.PORT || 3005;



const product = require('./src/routes/Product')
const userlogin = require('./src/routes/UserLogin')

app.use(express.json());

// Use the data route

app.use('/api/product',product );
app.use('/api/user',userlogin );

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});