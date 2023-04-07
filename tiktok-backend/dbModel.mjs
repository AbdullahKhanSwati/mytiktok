import mongoose from "mongoose";

const schema = mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    message:String,
    description:String,
    shares:String
})
export default mongoose.model("data",schema)