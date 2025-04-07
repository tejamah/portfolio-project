const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY); // store this key in .env

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Teja Portfolio <onboarding@resend.dev>',  // Verified sender
      to: process.env.EMAIL_RECEIVER,                   // Your email
      subject: `📬 Message from ${name}`,
      html: `
        <strong>Name:</strong> ${name}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Message:</strong><br>${message}
      `
    });

    res.status(200).json({ message: 'Email sent successfully!', id: response.id });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

module.exports = router;
