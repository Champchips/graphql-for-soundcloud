import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const { Schema } = mongoose;
const CommentSchema = new Schema({
  commentBy: {
    type: String,
    require: true,
    ref: "User",
    index:true,
  },
  message: {
    type: String,
    require: true,
    default: "",
    index:true,
  },
  commentDate: {
    type: Date,
    default: Date.now,
    require: true,
    index:true,
  },
});
const CommentModel = mongoose.model("Comment", CommentSchema);
export const CommentTC = composeWithMongoose(CommentModel);
export default CommentModel;
