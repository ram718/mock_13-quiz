const express = require("express");
const quizRouter = express.Router();
const { QuizModel } = require("../model/quiz.model");

// Post API
quizRouter.post("/quiz", async (req, res) => {
  const payload = req.body;
  try {
    const data = await QuizModel(payload);
    await data.save();
    res.status(200).send({ msg: "Quiz created successfully" });
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

// Get API
quizRouter.get("/quiz", async (req, res) => {
  try {
    const data = await QuizModel.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

module.exports = { quizRouter };
