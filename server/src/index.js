import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import { recipesRouter } from "./routes/recipes.js";
// import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://bhavishaya:Bhavishaya031@recipes.yss3k.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3001, () => console.log("Server started"));