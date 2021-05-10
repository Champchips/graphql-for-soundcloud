import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const { Schema } = mongoose;
const PlaylistSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  descripstion: {
    type: String,
    default: "",
  },
  createDate: {
    type: Date,
    default: Date.now,
    require: true,
  },
  createBy: {
    type: String,
    require: true,
    ref: "User",
  },
  musicID: [
    {
      type: String,
      ref: "Music",
    },
  ],
});
const PlaylistModel = mongoose.model("Playlist", PlaylistSchema);
export const PlaylistTC = composeWithMongoose(PlaylistModel);
export default PlaylistModel;
