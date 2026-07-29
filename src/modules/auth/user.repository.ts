import { UserDocument } from "../../types/auth.types";
import { UserModel } from "../../models/user.model";
export const userRepository = {
  async findbyEmail(email: string): Promise<UserDocument | null> {
    return await UserModel.findOne({ email: email.toLowerCase() });
  },
  async createUser(data: UserDocument): Promise<UserDocument | null> {
    return await UserModel.create(data);
  },
};
