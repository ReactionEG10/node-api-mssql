const sql = require('mssql')
require('dotenv').config()

const config ={
    server:process.env.DB_SERVER,
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database:process.env.DB_NAME,
    option:{
        trustedConnection: true, // For Windows authentication
        enableArithAbort: true
    }
}

async function insertData() {
    try {
      await sql.connect(config);
      console.log('Connected to the database');
  
      // Your insertion code will go here
  
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }

  insertData()
