import mongoose from "mongoose"

const stepSchema = new mongoose.Schema({
    username:String,
    steps:Number,
},{timestamps:true})

export default new mongoose.model("Step",stepSchema)