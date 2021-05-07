import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";
const { Schema } = mongoose;
const MusicSchema = new Schema({
  name: {
    type: String,
    require: true,
    index: true,
  },
  type: {
    type: String,
    require: true,
    index: true,
  },
  description: {
    type: String,
  },
  length: {
    type: String,
    index: true,
  },
  artistName: {
    type: String,
    index: true,
  },
  url: {
    type: String,
    require: true,
    index: true,
  },
});

const MusicModel = mongoose.model("Music", MusicSchema);
export const MusicTC = composeWithMongoose(MusicModel);
export default MusicModel;
