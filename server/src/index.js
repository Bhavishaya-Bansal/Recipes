import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://bhavishaya:Bhavishaya031@recipes.yss3k.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes")

app.listen(3001, ()=> console.log("Server is up and running"));

