import mongoose from "mongoose";

mongoose.Promise = Promise;
mongoose.connect(
  "mongodb+srv://superuser:Champchips2542@soundclouddb.qbnq9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    dbName: "SoundCloudDB",
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
