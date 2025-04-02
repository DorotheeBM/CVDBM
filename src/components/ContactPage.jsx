import React, { useContext } from "react";
import { LangContext } from "../App";

const ContactPage = () => {
  const { translations } = useContext(LangContext);

  return (
    <div className="contact-container bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
      <h2 className="Contact">{translations.contact_me}</h2>
      <form action="https://formspree.io/f/mkgjvwzy" method="POST" className="space-y-4">
        <label className="block">
          <span className="text-gray-700">{translations.your_name}</span>
          <input
            type="text"
            name="name"
            placeholder={translations.your_name_placeholder}
            className="contact-input"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">{translations.your_email}</span>
          <input
            type="email"
            name="email"
            placeholder={translations.your_email_placeholder}
            className="contact-input"
            required
          />
        </label>
        <label className="block">
          <span className="text-gray-700">{translations.your_message}</span>
          <textarea
            name="message"
            placeholder={translations.your_message_placeholder}
            className="contact-input"
            rows="4"
            required
          ></textarea>
        </label>
        <button type="submit" className="contact-button">{translations.send}</button>
      </form>
    </div>
  );
};

export default ContactPage;
