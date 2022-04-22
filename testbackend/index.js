const express = require("express");

const app = express();

const port = 8000;


/*
REQUESTS:

GET -> it is to get some data
POST -> send some data to from front end or data  comming from frontend 
PUT -> to update existing values
DELETE ->
*/
app.get("/login", (req,res) => {
    return res.send("hello world you are or login route");
});

app.get("/signup", (req,res) => {
    return res.send("hello world you are or signup route");
});

app.listen(port, () => {
    console.log("server is up and running  ... ")
});