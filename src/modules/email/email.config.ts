import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transportOptions: SMTPTransport.Options = {
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

export const transporter = nodemailer.createTransport(transportOptions);
