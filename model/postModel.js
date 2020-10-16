import mongoose from "mongoose";

const postModel = mongoose.Schema({
  user: String,
  imgName: String,
  postImage: String,
  avatar: String,
  timeStamp: String,
});

export default mongoose.model("posts", postModel);
