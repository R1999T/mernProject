/*
REQUESTS:

GET -> it is to get some data
POST -> send some data to from front end or data  comming from frontend 
PUT -> to update existing values
DELETE ->
*/


const express = require("express");

const app = express();

const port = 7000;



const admin = (req, res) => {
  return res.send("THIS IS ADMIN dashboard");
};
const isAdmin = (req, res, next) => {
    return res.send(" ISADMIN running");
    next();
  };
app.get("/admin",isAdmin, admin);


app.get("/login", (req, res) => {
  return res.send("hello world you are or login route");
});

app.get("/signup", (req, res) => {
  return res.send("hello world you are or signup route");
});

app.listen(port, () => {
  console.log("server is up and running  ... ");
});
