import mongoose from "mongoose";
var Schema = mongoose.Schema;

var transactionSchema = new Schema(
  {
    id: Number,
    amount: Number,
    date: Date,
    bussiness: string,
    name: string,
    type: string,
    account: string
  },
  {
    timestamps: true
  }
);

transactionSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});
// Configure the 'employeeSchema' to use getters and virtuals when transforming to JSON
transactionSchema.set("toJSON", {
  getters: true,
  virtuals: true
});

const Transaction = mongoose.model("Transation", transactionSchema);

module.exports = Transaction;
