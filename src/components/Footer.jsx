import React, { useState } from "react";
import Profile from "../assets/Image.jpg";

const SuccessModal = ({ open }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0  backdrop-blur-xl"></div>
      <div className="relative text-white bg-[#343131db] p-8 rounded-xl w-[90%] max-w-md animate-fadeIn shadow-xl leading-[30px] py-20">
        <h2 className="text-2xl font-semibold mb-5 text-center">
          Thank you for your interest!
        </h2>

        <p className="text-[#fafafa9c] text-center leading-[24px] font-medium">
          I’ll contact you shortly to understand your vision, refine the
          requirements, and discuss the most effective approach to build
          something impactful.
        </p>
      </div>
    </div>
  );
};

const Footer = React.forwardRef((props, ref) => {
  const [openModal, setOpenModal] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({ email: "", message: "" });

  const validateForm = (data) => {
    const emailRegex = /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let newErrors = { email: "", message: "" };
    let isValid = true;

    if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    if (data.message.trim().length < 25) {
      newErrors.message = "Message must be at least 25 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const values = {
      email: form.get("email"),
      message: form.get("message"),
    };

    if (!validateForm(values)) return;

    setSending(true);

    form.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    form.append("subject", "New Portfolio Inquiry");
    form.append("from_name", form.get("name"));
    form.append("replyto", values.email);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    if (!response.ok) {
      setSending(false);
      alert("Something went wrong. Try again later.");
      return;
    }

    const data = await response.json();
    setSending(false);

    if (data.success) {
      setOpenModal(true);
      event.target.reset();
      setErrors({ email: "", message: "" });

      setTimeout(() => setOpenModal(false), 3000);
    }
  };

  return (
    <section
      ref={ref}
      className="Footer w-full min-h-[70vh] text-white px-[6vw] py-[10vh] font-[Urbanist] flex flex-col gap-14 max-w-[1300px]"
    >
      <div className="flex items-center gap-4">
        <h1 className="uppercase text-5xl md:text-[65px] font-semibold leading-[65px] md:leading-[75px]">
          <img
            src={Profile}
            alt="profile"
            className="inline-block w-12 h-11 md:w-16 md:h-14 rounded-[12px] mr-2 object-cover"
          />
          LET’S <span className="text-red-500 font-semibold">WORK</span> <br />
          TOGETHER
        </h1>
      </div>

      <form
        className="flex flex-col lg:flex-row justify-between lg:items-center gap-14 w-full"
        onSubmit={onSubmit}
      >
        {/* honeypot */}
        <input
          type="text"
          name="company"
          tabIndex="-1"
          autoComplete="off"
          className="hidden"
        />

        <div className="flex flex-col sm:flex-row gap-10 w-full lg:w-[60%]">
          {/* NAME */}
          <div className="w-full">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border-b border-white/20 pb-2 bg-transparent outline-none placeholder:text-xl text-xl"
            />
          </div>

          {/* EMAIL */}
          <div className="w-full">
            <input
              type="email"
              name="email"
              placeholder="client@gmail.com"
              className="w-full border-b border-white/20 pb-2 bg-transparent outline-none placeholder:text-xl text-xl"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div className="w-full">
            <textarea
              name="message"
              placeholder="message"
              rows="1"
              className="w-full border-b border-white/20 pb-2 bg-transparent outline-none placeholder:text-xl text-xl resize-none overflow-y-hidden overflow-x-auto whitespace-nowrap"
            />

            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`w-32 h-32 rounded-full bg-red-500 text-white text-lg flex items-center justify-center transition hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,0,0,0.35)] ${
            sending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {sending ? "Sending…" : "Send"}
        </button>
      </form>

      <SuccessModal open={openModal} />

      <div className="FooterDetails flex flex-col gap-3 md:flex-row md:gap-1">
        <div className="flex justify-center md:justify-end items-center text-2xl mb-5 mr-5">
          <h2 className="px-10 py-4 text-center border border-[#e7e7f144] rounded-full">
            amansahu1126@gmail.com
          </h2>
        </div>

        <div className="flex justify-center md:justify-end items-center text-2xl mb-5 mr-5">
          <h2 className="px-10 py-4 text-center border border-[#e7e7f144] rounded-full">
            +91 9341244403
          </h2>
        </div>
      </div>
    </section>
  );
});

export default Footer;
