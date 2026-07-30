export const emailVerification = ({
  name,
  expiryMinutes,
  otp,
}: {
  name: string;
  expiryMinutes: string;
  otp: string;
}) => {
  return `<!DOCTYPE html>
<html>
<body style="margin:0; padding:0; background-color:#f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7; padding: 40px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius: 12px; overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#111827; padding: 32px 40px;">
              <table width="100%">
                <tr>
                  <td>
                    <span style="color:#ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">YourApp</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin:0 0 12px; font-size: 22px; color:#111827; font-weight:700;">Verify your email</h1>
              <p style="margin:0 0 24px; font-size: 15px; color:#4b5563; line-height: 1.6;">
                Hi ${name},<br/>
                Use the code below to verify your account. This code is valid for <strong>${expiryMinutes} minutes</strong>.
              </p>

              <!-- OTP Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="background-color:#f9fafb; border: 1px dashed #d1d5db; border-radius: 10px; padding: 24px;">
                    <span style="font-size: 36px; font-weight: 700; letter-spacing: 10px; color:#111827;">${otp}</span>
                  </td>
                </tr>
              </table>

              <p style="margin: 24px 0 0; font-size: 13px; color:#9ca3af; line-height:1.6;">
                If you didn't request this code, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; border-top: 1px solid #f0f0f0;">
              <p style="margin:0; font-size:12px; color:#9ca3af;">
                © ${new Date().getFullYear()} YourApp. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
};
