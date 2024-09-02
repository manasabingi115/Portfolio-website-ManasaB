import React, { useState } from "react";
import emailjs from "emailjs-com";
import { MdMail } from "react-icons/md";
import { FaGlobeAsia, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="contact_container" id="contact">
      <h2 className="text-uppercase text-white">contact me</h2>
      <div className="contact_content">
        <form onSubmit={handleSubmit} className="subcribe-form">
          <div>
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
        <div
          className="social_media_links_container"
          id="social_media_links_container"
        >
          <h3 className="s_title">Contact Info</h3>
          <ul className="s_media_links">
            <li className="s_location s_media_link">
              <FaLocationDot className="s_m_icon" size={20} />
              <span>Hyderabad</span>
            </li>
            <li className="s_m_list">
              <a href="mailto:bingim115@gmail.com" className="s_media_link">
                <MdMail className="s_m_icon" size={20} />
                <span>bingim115@gmail.com</span>
              </a>
            </li>
            <li className="s_m_list">
              <a
                href="https://www.linkedin.com/in/manasa-bingi-912723227/"
                className="s_media_link"
              >
                <FaLinkedin className="s_m_icon" size={20} />
                <span>LinkedIn</span>
              </a>
            </li>
            <li className="s_m_list">
              <a
                href="https://github.com/manasabingi115"
                className="s_media_link"
              >
                <FaGithub className="s_m_icon" size={20} />
                <span>GitHub</span>
              </a>
            </li>
            <li className="s_m_list">
              <a
                href="https://portfolio-website-manasa-b.vercel.app/"
                target="_blank"
                className="s_media_link"
              >
                <FaGlobeAsia className="s_m_icon" size={20} />
                <span>Portfolio website</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
