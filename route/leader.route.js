const express = require("express");
const leaderRouter = express.Router();
const { LeaderModel } = require("../model/leader.model");

// Post API
leaderRouter.post("/leader", async (req, res) => {
  const payload = req.body;
  try {
    const data = new LeaderModel(payload);
    await data.save();
    res.status(200).send({ msg: "Data added to leaderboard" });
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

// Get API
leaderRouter.get("/leader", async (req, res) => {
  try {
    const data = await LeaderModel.find().sort({ score: -1 });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ msg: "Bad Request" });
  }
});

module.exports = { leaderRouter };
