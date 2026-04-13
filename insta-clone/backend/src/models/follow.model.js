const mongoose = require("mongoose");

let followSchema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    following: {
      type: String,
    },
    status:{
        type: String,
        enum: {
            values: ["pending","accepted","rejected"],
            message: "status can be only pendign,accepted or rejected"
        },
        default: "pending"
    },
  },
  {
    timestamps: true, // ✅ correct spelling
  },
);

followSchema.index({ follower: 1, following: 1 }, { unique: true });

let followModel = mongoose.model("follow", followSchema);

module.exports = followModel;
