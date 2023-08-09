const sql = require('mssql/msnodesqlv8');
require('dotenv').config();

const config = {
    server:process.env.DB_SERVER,
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database:process.env.DB_NAME,
    // driver:"msnodesqlv8",
    option:{
        trustedConnection:true
    }
};


async function connectAndQuery(query) {
  try {
    await sql.connect(config);
    await new sql.Request()
    const result = await sql.query(query);
    sql.close();
    return result.recordset;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  connectAndQuery,
};