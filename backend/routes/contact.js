const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Create a test account
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: testAccount.user, // Inbox will be accessible via test account
      subject: `Portfolio Contact - ${name}`,
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Preview URL:", nodemailer.getTestMessageUrl(info)); // 🔗 log URL to view email
    res.status(200).json({
      message: "Email sent successfully (ethereal)!",
      previewUrl: nodemailer.getTestMessageUrl(info),
    });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ error: "Something went wrong. Try again later." });
  }
});

module.exports = router;
