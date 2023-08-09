const express = require('express');
const router = express.Router();
const db = require('../db/sql');

router.post('/login', async (req, res) => {
    const userName = req.body.userName
    const passWord = req.body.passWord
    try {
      const query = `SELECT * FROM userShop WHERE userName='${userName}' AND passWord='${passWord}'`;
      const data = await db.connectAndQuery(query);
      if(data !=""){
        res.json({msg:"login success ",result:data});
      }else{
        res.json({msg:"login don't success ",result:data});
      }
     
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  });
 module.exports = router;