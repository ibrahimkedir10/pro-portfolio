const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, websiteType, websiteDescription } = req.body;

  // Create a nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: 'ibrahim.kedir@outlook.com',
      pass: '',
    },
  });

  // Email content
  const mailOptions = {
    from: email,
    to: 'ibrahim.kedir@outlook.com',
    subject: 'Website Request Form Submission',
    text: `
      First Name: ${firstName}
      Last Name: ${lastName}
      Email: ${email}
      Website Type: ${websiteType}
      Website Description: ${websiteDescription}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
