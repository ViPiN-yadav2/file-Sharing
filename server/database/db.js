import mongoose from "mongoose";

async function dbconnect() {
  await mongoose.connect(
    "mongodb+srv://vy80032:mkOZYwGiuY6hr4gC@cluster0.pcel5eg.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

export default dbconnect;
