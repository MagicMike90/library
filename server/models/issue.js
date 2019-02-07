import mongoose from "mongoose";

var issueSchema = mongoose.Schema({
  title: { type: string, required: true },
  owner: { type: string, required: true },
  status: { type: string, required: true },
  effort: { type: string, required: true },
  completionDate: { type: string, required: true },
  comment: { type: string, required: true },
  createdAt: { type: Date, default: Date.now }
});

const issue = mongoose.model("issue", issueSchema);
module.exports = issue;
