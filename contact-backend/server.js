require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, 
    pass: process.env.PASSWORD,
  },
});

app.post("/send", async (req, res) => {
  console.log("Received form data:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Invalid request. Ensure all fields are filled." });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Email failed to send", error });
  }
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
