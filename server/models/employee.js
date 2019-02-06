import mongoose from "mongoose";
var Schema = mongoose.Schema;

var employeeSchema = new Schema(
  {
    id: Number,
    name: {
      type: Object,
      required: true,
      text: true
    },
    gender: string,
    age: Number,
    managerId: Number,
    reports: Number,
    managerName: string,
    title: string,
    department: string,
    email: string,
    phone: string,
    address: string,
    zipcode: string,
    salary: Number,
    isCurrent: boolean,
    startDate: Date,
    leaveData: Date,
    nationality: string
  },
  {
    timestamps: true
  }
);

employeeSchema
  .virtual("fullName")
  .get(function() {
    return this.name.first + " " + this.name.last;
  })
  .set(function(v) {
    this.name.first = v.substr(0, v.indexOf(" "));
    this.name.last = v.substr(v.indexOf(" ") + 1);
  });
employeeSchema.pre("save", function(next) {
  this.updatedAt = Date.now();
  next();
});
employeeSchema.index({
  name: "text"
});
// Configure the 'employeeSchema' to use getters and virtuals when transforming to JSON
employeeSchema.set("toJSON", {
  getters: true,
  virtuals: true
});

const Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;
