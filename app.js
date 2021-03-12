const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost/UserDB";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;

con.on("open", function () {
  console.log("connected.....");
});

app.use(express.json());

const userRouter = require("./routes/user");
app.use("/users", userRouter);

app.listen(5000, function () {
  console.log("server started....");
});
