// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const mailgun = require("mailgun-js");

// const app = express();
// const PORT = 5000;

// // Mailgun Configuration
// const mg = mailgun({
//   apiKey: "9e4b5b6322a64f51875f46ddeaa34e5b-da554c25-5c9d27da",
//   domain: "postmaster@sandbox80f1ad28e85a40e1b3665c5982931e6b.mailgun.org" 
// });

// app.use(cors());
// app.use(bodyParser.json());

// // Route to handle form submission
// app.post("/contact", async (req, res) => {
//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: "All fields are required!" });
//   }

//   // Create email data
//   const data = {
//     from: email,  // Sender's email
//     to: "editech1324@gmail.com",  // Your target email
//     subject: `New Contact Form Submission from ${name}`,
//     text: `You have a new message from ${name} (${email}):\n\n${message}`,
//     html: `<p><strong>Name:</strong> ${name}</p>
//            <p><strong>Email:</strong> ${email}</p>
//            <p><strong>Message:</strong></p>
//            <p>${message}</p>`,
//   };

//   try {
//     // Send email using Mailgun
//     await mg.messages().send(data);
//     res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send email!" });
//   }
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mailgun = require("mailgun-js");

const app = express();
const PORT = 5000;

// Mailgun configuration
const mg = mailgun({
  apiKey: "9e4b5b6322a64f51875f46ddeaa34e5b-da554c25-5c9d27da", // Replace with your private API key
  domain: "sandbox80f1ad28e85a40e1b3665c5982931e6b.mailgun.org", // Replace with your sandbox domain
});

app.use(cors());
app.use(bodyParser.json());

// Route to handle form submission
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  // Email data
  const data = {
    from: `postmaster@sandbox80f1ad28e85a40e1b3665c5982931e6b.mailgun.org`, // Use the Mailgun domain email
    to: "editech1324@gmail.com", // Your target email
    subject: `New Contact Form Submission from ${name}`,
    text: `You have a new message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await mg.messages().send(data); // Send the email
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email!" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
