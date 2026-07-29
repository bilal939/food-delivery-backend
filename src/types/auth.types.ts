import { Types } from "mongoose";

export type OtpPurpose = "EMAIL_VERIFICATION" | "PASSWORD_RESET";

export interface otp {
  userId: Types.ObjectId;
  otpHash: string;
  purpose: OtpPurpose;
  expiresAt: Date;
  attempts: number;
}

export type Gender = "male" | "female" | "other";

export interface UserDocument extends Document {
  name: string;
  email: string;
  gender: Gender;
  dob: string;
  password: string;
  isEmailVerified: boolean;
  tokenVersion: number;
  createdAt: Date;
  id?: number;
}

export const GENDER_OPTIONS: Gender[] = ["male", "female", "other"];
