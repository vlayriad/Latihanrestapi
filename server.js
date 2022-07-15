// Memanggil liblary
var port_lib = 5000;
import bodyParser from "body-parser";
import express from "express";

// Fungsi app memanggil secara global
const app = express();

// Parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port_lib, () => {
  console.log(`Server started on port ${port_lib}`);
});
