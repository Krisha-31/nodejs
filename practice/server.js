const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Hello Home Page");
});

app.listen(3000);