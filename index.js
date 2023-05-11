const express = require("express");
const app = express();
require("dotenv").config();
const { connection } = require("./db");
const { userRouter } = require("./route/user.route");
const { quizRouter } = require("./route/quiz.route");
const { leaderRouter } = require("./route/leader.route");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("", userRouter);
app.use("", quizRouter);
app.use("", leaderRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`App is running at port ${process.env.port}`);
  } catch (err) {
    console.log(err);
  }
});
