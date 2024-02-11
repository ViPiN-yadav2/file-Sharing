import express from "express";
import router from "./routes/router.js";
import cors from "cors";
import dbconnect from "./database/db.js";
const app = express();
app.use(cors());
app.use("/", router);
dbconnect();
app.listen(8000, () => {
  console.log("server is up and running at port 8000");
});
