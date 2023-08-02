import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import stepApi from "./api/stepapi.js"

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://abilance:qwert12345@cluster0.n0s6jic.mongodb.net/?retryWrites=true&w=majority")

app.use("/",stepApi)

app.listen(4000)