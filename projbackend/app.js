require('dotenv').config(); //refer npm docs
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my routes 
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");

//DB CONNECTION
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });


//refer to the docs as they keep on changing
//middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


//my routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);



//port
const port = process.env.PORT || 8000;


//starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});