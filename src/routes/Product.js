const express = require('express');
const router = express.Router();
const db = require('../db/sql');




router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * from product';
    const data = await db.connectAndQuery(query);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});

router.get('/:productID', async (req, res) => {
  const productID = req.params.productID;
  try {
    const query = `SELECT * from product WHERE ProductID = ${productID}`;
    const data = await db.connectAndQuery(query);
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});

router.post('/', async (req, res) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const productDetail = req.body.productDetail;
  try {
    const query = `INSERT INTO product (ProductName,Price,ProductDetail) VALUES('${productName}','${price}','${productDetail}')`
    const result = await db.connectAndQuery(query);
    res.json({msg:"data insert success",result});
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});


router.put('/update/:productID', async (req, res) => {
    const productID = req.params.productID
    const productName = req.body.productName;
    const price = req.body.price;
    const productDetail = req.body.productDetail;
    try {
      const query = `UPDATE product SET ProductName='${productName}',Price='${price}',ProductDetail='${productDetail}' WHERE ProductID=${productID}`
      const result = await db.connectAndQuery(query);
      res.json({msg:"data update success",result});
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  });

  router.delete('/deleted/:productID', async (req, res) => {
    const productID = req.params.productID
    try {
      const query = `DELETE FROM product WHERE ProductID=${productID}`
      const result = await db.connectAndQuery(query);
      res.json({msg:"data deleted success",result});
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  });

module.exports = router;