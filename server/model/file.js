import mongoose, { model } from "mongoose";

const fileSchema = new mongoose.Schema({
  path: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  downloadCount: {
    type: Number,
    require: true,
    default: 0,
  },
});

const File = model("file", fileSchema);

export default File;
