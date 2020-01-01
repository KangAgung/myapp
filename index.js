const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : true
}));

app.listen(8000,function (err) {
    if (err) throw err;
    console.log("Server started on port 8000");
});