import moongoose from "mongoose";
import { env } from "./env";

export const connectDB = async (): Promise<void> => {
  try {
    await moongoose.connect(env.MONGODB_URI);
    console.log(`✅ MongoDB connected: ${moongoose.connection.name}`);
  } catch (error) {
    console.log("MongoDb connection failed", error);
    process.exit(1);
  }
};

moongoose.connection.on("disconnected", () => {
  console.log("mondob disconnected");
});
