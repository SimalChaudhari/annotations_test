const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const subjectRoutes = require("./routes/subject-routes");

const app = express();

app.use(bodyParser.json());

app.use("/api", subjectRoutes);

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.kmnexdn.mongodb.net/myFirstDatabase?authMechanism=DEFAULT",
    {}
  )
  .then(() => {
    app.listen(5000);
    console.log("DataBase Connection Successfully.......");
  })
  .catch((err) => {
    console.log(err);
  });
