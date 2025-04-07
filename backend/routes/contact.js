const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: 'Teja Portfolio <onboarding@resend.dev>', // This must be verified or default from Resend
      to: process.env.EMAIL_TO,
      subject: `New Contact Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    res.status(200).json({ message: 'Email sent successfully via Resend!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

module.exports = router;
