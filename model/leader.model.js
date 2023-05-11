const mongoose = require("mongoose");

const leaderSchema = mongoose.Schema(
  {
    email: String,
    score: Number,
  },
  { versionKey: false }
);

const LeaderModel = mongoose.model("leader", leaderSchema);

module.exports = { LeaderModel };
