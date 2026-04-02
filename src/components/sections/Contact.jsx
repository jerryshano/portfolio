import React from "react";
import RevealOnScroll from "../RevealOnScroll.jsx";
import * as emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const templateID = import.meta.env.VITE_CONTACT_FORM;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!serviceID || !templateID || !publicKey) {
      alert(
        "Contact form is not configured. Set VITE_SERVICE_ID, VITE_CONTACT_FORM, and VITE_PUBLIC_KEY for your build.",
      );
      return;
    }
    emailjs.sendForm(serviceID, templateID, form, publicKey).then(
      (result) => {
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
      },
      (error) => {
        const detail =
          typeof error === "string"
            ? error
            : error?.text ?? JSON.stringify(error);
        console.error("EmailJS error:", detail);
        alert("An error occurred, please try again.");
      },
    );
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-800 bg-clip-text text-transparent leading-tight">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full py-3 px-4 border border-gray-300 rounded-md transition ease-in-out
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-400/5 focus:border-transparent
               placeholder-gray-400"
                placeholder="Name..."
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className="w-full py-3 px-4 border border-gray-300 rounded-md transition ease-in-out
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-400/5 focus:border-transparent
               placeholder-gray-400"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full py-3 px-4 border border-gray-300 rounded-md transition ease-in-out
               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-400/5 focus:border-transparent
               placeholder-gray-400"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition relative overflow-hidden hover:translate-y-0.5 5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
