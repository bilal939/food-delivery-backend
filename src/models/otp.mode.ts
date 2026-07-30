import mongoose, { Schema, model, Types } from "mongoose";
import { otp } from "../types/auth.types";

const otpSchema = new Schema<otp>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
  },
  otpHash: {
    type: String,
    required: true,
  },

  purpose: {
    type: String,
    enum: ["EMAIL_VERIFICATION", "PASSWORD_RESET"],
    required: true,
  },

  expiresAt: {
    type: Date,
    required: true,
    index: true,
  },

  attempts: {
    type: Number,
    default: 0,
  },
});

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const otpModel = model<otp>("otp", otpSchema);
