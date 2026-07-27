import { UserModel, UserDocument } from "../../models/user.model";
import { registerPayload } from "./auth.types";

export const userRepository = {
  async findbyEmail(email: string): Promise<UserDocument | null> {
    return await UserModel.findOne({ email: email.toLowerCase() });
  },
  async createUser(data: registerPayload): Promise<UserDocument | null> {
    return await UserModel.create(data);
  },
};
