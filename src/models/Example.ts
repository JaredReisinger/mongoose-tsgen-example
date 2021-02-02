import mongoose from "mongoose";

const ExampleSchema = new mongoose.Schema({
  stringProp: String,
  numberProp: Number,
  dateProp: Date,
});

ExampleSchema.statics = {

  async someStatic(numberValue: number) {
    await this.find({ numberProp: numberValue });
    return "dummy";
  },

};


const ExampleModel = mongoose.model('Example', ExampleSchema);
export default ExampleModel;
