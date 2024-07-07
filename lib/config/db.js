import mongoose from "mongoose";

export const MongoDB = async () => {
  await mongoose.connect(
    "mongodb+srv://todo:yX5qF4v4d7UlXhYD@cluster0.qfrlvql.mongodb.net/todu-app"
  );
  console.log("mongodb Conneted");
};
