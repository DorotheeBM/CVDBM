import React from "react";

const ContactPage = () => (
  <div className="contact-container bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
    <h2 className="Contact">Contactez-moi</h2>
    <form action="https://formspree.io/f/mkgjvwzy" method="POST" className="space-y-4">
      <label className="block">
        <span className="text-gray-700">Votre nom</span>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="contact-input"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Votre email</span>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="contact-input"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Votre message</span>
        <textarea
          name="message"
          placeholder="Votre message"
          className="contact-input"
          rows="4"
          required
        ></textarea>
      </label>
      <button type="submit" className="contact-button">Envoyer</button>
    </form>
  </div>
);

export default ContactPage;
