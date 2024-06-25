// function Contact() {
//   return (
//     <div className="contact_container">
//       <div className="subscription_box text-center">
//         <h2 className="text-uppercase text-white">contact me</h2>
//         <p className="text-white">
//           Bearing Void gathering light light his eavening unto dont afraid.
//         </p>
//         <div className="subcribe-form">
//           <form method="get" className="subscription relative">
//             <input
//               name="EMAIL"
//               placeholder="Email address"
//               required
//               type="email"
//             />
//             <button className="primary_btn contact_btn">Get Started</button>
//             <div className="info">Submitting...</div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [emailError, setEmailError] = useState();
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      validateEmail(value);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailError) {
      setEmailError("Please fix the errors before submitting");
      return;
    }

    // Parameters to send in email
    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: `Message from ${formData.email} \n\nMESSAGE:\n${formData.message}`,
    };

    emailjs
      .send(
        "service_uj41y8e",
        "template_b04t2jt",
        templateParams,
        "p_TBIISTWrD3sDncw"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setEmailError("Failed to send message.");
      });
    setSuccessMsg(true);
    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact_container" id="contact">
      <h2 className="text-uppercase text-white">contact me</h2>
      <div className="subcribe-form">
        <div className="contact_input_data">
          <label htmlFor="fullName">Full Name</label>
          <input
            placeholder="Full name"
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input_data">
          <label htmlFor="email">Email</label>
          <input
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact_input_data">
          <label htmlFor="message">Message</label>
          <textarea
            placeholder="Message"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="primary_btn contact_btn">
          Send Message
        </button>
        <p style={{ color: "#9c0404" }} className="message">
          {emailError && emailError}
        </p>
        <p className="success_msg message">
          {successMsg && "Message sent successfully!"}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
