import { createConnection } from 'mysql2';

const conn = createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'spot'
});

conn.connect((err)=>{
  if(err) throw err;
  console.log("Berhasil terkoneksi");
});

// conn di include kan menggunakan module.exports (seperti PHP)
export default conn;