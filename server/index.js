import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import whistleRoutes from "./routes/whistles.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log("Connected to MongoDB database");
  }) .catch(err => console.log(err));
};

// app.get("/", (req, res) => {
//   res.send("I Am Batman!!!");
// });

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/whistles", whistleRoutes);

app.listen(5000, () => {
  connect();
  console.log("Listening to port 5000");
});
