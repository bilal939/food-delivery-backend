import { sendVerifcationEmail } from "../../types/email.types";
import { transporter } from "./email.config";
import { emailVerification } from "./template/emailverfication";

export const emailService = {
  sendVerifcationEmail(
    useremail: string,
    data: sendVerifcationEmail,
    subject: string,
  ) {
    return transporter.sendMail({
      from: process.env.SMTP_USER,
      to: useremail,
      html: emailVerification(data),
      subject: subject,
    });
  },
};
