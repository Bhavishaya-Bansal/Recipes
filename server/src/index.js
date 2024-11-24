import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import { recipesRouter } from "./routes/recipes.js";
// import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";
import { userRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
// app.use(cors());
app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', 'https://recipes-570a.onrender.com/auth/login', 'https://recipes-570a.onrender.com/auth/register', 'https://recipes-570a.onrender.com/recipes', 'https://recipes-570a.onrender.com/recipes', 'https://recipes-570a.onrender.com/recipes/savedRecipes/ids/', 'https://recipes-570a.onrender.com/recipes', 'https://recipes-570a.onrender.com/recipes/savedRecipes/', 'https://recipes-frontend-7yts.onrender.com/', 'https://recipes-570a.onrender.com');

  next();

});


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