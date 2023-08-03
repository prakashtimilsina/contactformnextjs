"use client";
import { useState } from "react";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Fullname: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Prakash Sharma"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
            id="email"
            placeholder="prakashsharma@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="h-32"
            id="message"
            placeholder="Type your message.."
          ></textarea>
        </div>
        <button
          className="bg-green-600 py-3 text-white font-bold rounded-lg"
          type="submit"
        >
          Send
        </button>
      </form>
      <div>
        <div className="bg-slate-100 flex flex-col">
          
              <div className="text-red-600 px-5 py-2 rounded-lg">Error Message</div>;
          
        </div>
      </div>
    </>
  );
};

export default ContactForm;
