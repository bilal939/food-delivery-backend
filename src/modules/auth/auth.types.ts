import { Gender } from "../../models/user.model";

export interface registerPayload {
  name: string;
  email: string;
  gender: Gender;
  dob: string;
  password: string;
}
