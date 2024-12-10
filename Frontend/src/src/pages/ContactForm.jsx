// import React, { useState } from "react";
// import "./ContactForm.css";

// function ContactForm() {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await response.json();
//       alert(data.message);
//     } catch (error) {
//       alert("Failed to send message!");
//     }
//   };

//   return (
//     <section className="contact-form">
//       <h2>Contact Me</h2>
      
//       <div className="map-container">
//         <h3>Find Us on the Map</h3>
//         <iframe
//           title="Company Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6749874690457!2d-74.0060156845941!3d40.712776979331474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1ff5e33e91%3A0x8f9b24b26e695b5!2sNew%20York%20City%2C%20NY%2010020%2C%20USA!5e0!3m2!1sen!2sin!4v1636476810611!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//         />
//         <button type="submit">Send</button>
//       </form>
//     </section>
//   );
// }

// export default ContactForm;


import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Send name, email, and message to the backend
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Success message from the backend
        setFormData({ name: "", email: "", message: "" }); // Reset form fields
      } else {
        alert(data.message); // Error message from the backend
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message! Please try again later.");
    }
  };

  return (
    <section className="contact-form">
      <h2>Contact Me</h2>

      <div className="map-container">
        <h3>Find Us on the Map</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.34611180524!2d78.05589507873938!3d11.653723377452321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1733814436821!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactForm;
