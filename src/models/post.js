import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const { Schema } = mongoose;
const PostSchema = new Schema({
  postBy: {
    type: String,
    require: true,
    index:true,
  },
  postDate: {
    type: Date,
    default: Date.now,
    require: true,
    index:true,
  },
  message: {
    type: String,
    require: true,
    default: "",
    index:true,
  },
  commentID: [
    {
      type: String,
      ref: "Comment",
      index:true,
    },
  ],
});
const PostModel = mongoose.model("Post", PostSchema);
export const PostTC = composeWithMongoose(PostModel);
export default PostModel;
