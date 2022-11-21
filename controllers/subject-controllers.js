const mongoose = require("mongoose");
const Question = require("../models/questions");

const List = require("../models/lists");
const childList = require("../models/child");
const subChildList = require("../models/subchild");

exports.getData = async (req, res, next) => {
  const query = req.query?.q || "";

  let data = {};
  const topics = await List.find({ name: query }, { name: 1 });
  if (topics?.length > 0) {
    data = topics;
    const parentId = topics[0]?._id;
    const childs = await childList.find({ parent_id: parentId });
    if (childs?.length > 0) {
      data = [...data, ...childs];
      const childIds = childs.map((item) => item._id);
      const subchild = await subChildList.find({
        $or: [{ child_id: { $in: childIds } }],
      });
      data = [...data, ...subchild];
    }
  } else {
    const childs = await childList.find({ name: query }, { name: 1 });
    if (childs?.length > 0) {
      data = childs;
      const childIds = childs.map((item) => item._id);
      const subchild = await subChildList.find({
        $or: [{ child_id: { $in: childIds } }],
      });
      data = [...data, ...subchild];
    } else {
      const subchild = await subChildList.find({ name: query }, { name: 1 });
      data = subchild;
    }
  }

  const allNames = data.map((item) => item?.name);
  Question.find(
    {
      $or: [
        { Annotation1: { $in: allNames } },
        { Annotation2: { $in: allNames } },
        { Annotation3: { $in: allNames } },
        { Annotation4: { $in: allNames } },
        { Annotation5: { $in: allNames } },
      ],
    },
    { number: 1, _id: 0 }
  )
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


