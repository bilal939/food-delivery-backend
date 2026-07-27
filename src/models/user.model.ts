import { Schema, model, Document } from "mongoose";

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

const MIN_AGE_YEARS = 13;

const userSchema = new Schema<UserDocument>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [100, "Name must be under 100 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email address"],
  },

  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: GENDER_OPTIONS,
      message: "Gender must be one of: male, female, other",
    },
  },

  dob: {
    type: String,
    // required: [true, "Date of birth is required"],
    // validate: {
    //   //   validator: function (value: Date) {
    //   //     if (value > new Date()) return false;
    //   //     const age =
    //   //       (Date.now() - value.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    //   //     return age >= MIN_AGE_YEARS;
    //   //   },
    //   //   message: `You must be at least ${MIN_AGE_YEARS} years old to register`,
    //   // },}
    // },
  },

  password: { type: String, required: true },

  isEmailVerified: { type: Boolean, default: false },
  tokenVersion: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export const UserModel = model<UserDocument>("User", userSchema);
