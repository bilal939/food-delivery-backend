import crypto from "crypto";

export function generaterawOtp() {
  return crypto.randomInt(100000, 999999).toString(); // 6-digit
}

export function hashOtp(otp: string) {
  return crypto.createHash("sha256").update(otp).digest("hex");
}
