export interface sendVerifcationEmail {
  otp: string | number;
  name: string;
  expiresAt: Date | string;
}
