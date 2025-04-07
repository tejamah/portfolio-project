router.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact - ${name}`,
      text: `From: ${name} <${email}>\n\nMessage:\n${message}`
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("❌ Email sending error:", error); // 🛠 log the real error
      res.status(500).json({ error: "Something went wrong. Try again later." });
    }
  });
  