import { Types } from "mongoose";
import { OtpPurpose, otpResponse } from "../../types/auth.types";
import { generaterawOtp, hashOtp } from "./helper";
import { otpRepository } from "./otp.repository";

export const otpService = {
  async generateOtp(
    userid: Types.ObjectId,
    purpose: OtpPurpose,
  ): Promise<otpResponse> {
    const otp = generaterawOtp();
    const hashedOtp = hashOtp(otp);
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await otpRepository.createHasedOtp({
      expiresAt,
      otpHash: hashedOtp,
      userId: userid,
      purpose: purpose,
      attempts: 0,
    });
    return { otp, expiresAt };
  },
};
