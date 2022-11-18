const mongoose = require("mongoose");
const Question = require("../models/questions");

exports.getData = async (req, res, next) => {
  const query = req.query?.q || "";

  Question.find({
    $or: [
      { Annotation1: query },
      { Annotation2: query },
      { Annotation3: query },
      { Annotation4: query },
      { Annotation5: query },
    ],
  })
    .then((data) => {
      res.status(201).send({
        data,
        message: "Data has been found successfully!",
      });
    })
    .catch((error) => {
      console.log({ error });
      res.status(500).send({
        message: "Something is wrong please try again!",
      });
    });
};
