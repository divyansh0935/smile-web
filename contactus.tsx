import React from "react";
import { Mail, Linkedin } from "lucide-react";

const ContactUs: React.FC = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#0a1a15", color: "white" }}>
      {/* Contact Section */}
      <section className="contact-section">
        <h2 style={{ textAlign: "left", fontWeight: "bolder" }}>Contact Us</h2>
        <p style={{ textAlign: "left" }}>We would love to hear from you.</p>
        <div className="team">
          {[
            { name: "Ritien Mohan", img: "navin.png" },
            { name: "Navin Venkat", img: "navin.png" },
            { name: "Manav K", img: "navin.png" },
          ].map((member, idx) => (
            <div className="member" key={idx}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <div className="icons">
                <a href="#">
                  <Mail />
                </a>
                <a href="#">
                  <Linkedin />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Message Section */}
      <section className="message-section">
        <div className="overlay"></div>
        <div className="message-container">
          <div className="logo">
            <img src="smile logo.svg" alt="Smile Logo" />
          </div>
          <form className="message-form">
            <h2>Send Us A Message</h2>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .contact-section {
          text-align: center;
          padding: 3rem 1rem;
        }

        .contact-section h2 {
          font-size: 2rem;
        }

        .contact-section p {
          color: #ccc;
          margin-top: 0.5rem;
        }

        .team {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 2rem;
        }

        .member {
          text-align: center;
        }

        .member img {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid transparent;
          transition: border 0.3s;
        }

        .member img:hover {
          border-color: teal;
        }

        .member h3 {
          margin-top: 1rem;
        }

        .icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }

        .icons a {
          color: white;
          transition: color 0.3s;
        }

        .icons a:hover {
          color: teal;
        }

        .message-section {
          position: relative;
          background-image: url("gray_image.jpg");
          background-size: cover;
          background-position: center;
          padding: 3rem 1rem;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        .message-container {
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 2rem;
          z-index: 1;
        }

        .logo img {
          min-width: 200px;
          width: 400px;
          height: 300px;
        }

        .message-form {
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          border-radius: 10px;
          width: 100%;
          max-width: 400px;
        }

        .message-form h2 {
          margin-bottom: 1rem;
        }

        .message-form input,
        .message-form textarea {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #555;
          border-radius: 5px;
          background: transparent;
          color: white;
        }

        .message-form input::placeholder,
        .message-form textarea::placeholder {
          color: #bbb;
        }

        .message-form button {
          width: 100%;
          padding: 0.75rem;
          background: teal;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        .message-form button:hover {
          background: #008080;
        }

        @media (min-width: 768px) {
          .message-container {
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
