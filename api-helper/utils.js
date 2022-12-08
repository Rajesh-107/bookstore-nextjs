import mongoose from "mongoose";


export const connectToDb = async () => {
    if(mongoose.connections[0]){
        return;
    }
  await mongoose
    .connect(
      "mongodb+srv://admin100:admin100@cluster0.suopce3.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};
