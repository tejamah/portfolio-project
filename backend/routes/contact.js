const express = require("express");
const router = express.Router();
require("dotenv").config();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await resend.emails.send({
      from: "Teja Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_RECEIVER],
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (result.error) {
      return res.status(500).json({ message: "Resend Error", error: result.error });
    }

    res.status(200).json({ message: "Email sent successfully via Resend!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

module.exports = router;
