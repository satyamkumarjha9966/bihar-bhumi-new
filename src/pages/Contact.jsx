import React, { useRef, useState } from "react";
import HelmetSEO from "../components/HelmetSEO";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_ez85h4q";
    const templateId = "template_a7w2309";
    const publicKey = "COtOh7j1adA1mgSR7";

    const templateParams = {
      from_name: name,
      from_email: mail,
      to_name: "Bihar Bhumi Jankari",
      message: message,
      phone: phone,
    };

    await emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        setName("");
        setMail("");
        setPhone("");
        setMessage("");
        setLoading(false);
        alert(
          "We Successfully Received Your Mail, Our Team Will Conect You Soon!"
        );
      })
      .catch((error) => {
        setLoading(false);
        alert(`Error While Sending Mail, Please Try Again`);
        console.log(error);
      });
  };
  return (
    <>
      <HelmetSEO
        title={
          "Contact Bihar Revenue and Land Reforms Department - Get in Touch"
        }
        description={
          "Contact the Bihar Government Revenue and Land Reforms Department for inquiries, assistance, and feedback. Find contact details, address, phone numbers, and email for various offices and officials."
        }
        keywords={
          "Bihar Revenue Department, Bihar Land Reforms Department, Bihar Government, Contact us, Contact details, Address, Phone numbers, Email, Feedback"
        }
      />
      <div>
        <div className="bg-gradient-to-r from-blue-500 to-green-500 py-16 mb-2">
          <h1 className="text-white text-center font-bold text-4xl">
            CONTACT US
          </h1>
          <p className="text-black text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Contact Us
          </p>
        </div>

        <div className="m-5 md:my-16 md:mx-24 flex flex-col md:flex-row gap-4 md:gap-24">
          <div className="md:w-[55%]">
            <h4 className="md:text-4xl text-3xl font-bold">Connect With Us</h4>
            <div className="h-1 bg-green-600 rounded-full w-36 mt-2 mb-11"></div>
            <form
              className="flex flex-col gap-6"
              onSubmit={sendEmail}
              ref={form}
            >
              <input
                type="text"
                placeholder="Enter Your Name *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
              <input
                type="email"
                placeholder="Enter Your E-mail Id *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="from_email"
              />
              <input
                type="text"
                placeholder="Enter Your Phone Number *"
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
              <textarea
                type="text"
                placeholder="Enter Your Message...."
                required
                className="py-3 px-4 placeholder:text-black bg-gray-200 w-full rounded-md shadow-md"
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />

              <button
                className="bg-black p-3 rounded-md shadow-lg text-green-600 text-lg font-bold mt-2"
                disabled={loading}
              >
                {loading ? "Sending...." : "Submit"}
              </button>
            </form>
          </div>
          <div className="md:w-[45%] m-auto md:m-0 mt-5 md:mt-20 md:ml-16">
            <h3 className="text-xl md:text-2xl font-bold flex items-center">
              <span class="material-symbols-outlined text-green-600 text-4xl">
                pin_drop
              </span>{" "}
              <span>&nbsp;&nbsp;OFFICE ADDRESS</span>
            </h3>
            <h4 className="text-green-600 text-md md:text-lg font-medium my-2 ml-16">
              Khadi Bhandar Gate, Court Road, Madhubani, Bihar, 847211
            </h4>
            <h3 className="text-xl md:text-2xl font-bold flex items-center">
              <span class="material-symbols-outlined text-green-600 text-4xl">
                support_agent
              </span>{" "}
              <span>&nbsp;&nbsp;PHONE NUMBER</span>
            </h3>
            <h4
              className="text-green-600 text-md md:text-lg font-medium my-2 ml-16"
              onClick={() => (window.location.href = "tel:+91-7761097990")}
              style={{ cursor: "pointer" }}
            >
              +91-7761097990
            </h4>

            <h3 className="text-xl md:text-2xl font-bold flex items-center">
              <span class="material-symbols-outlined text-green-600 text-4xl">
                mail
              </span>{" "}
              <span>&nbsp;&nbsp;EMAIL ID</span>
            </h3>
            <h4
              className="text-green-600 text-md md:text-lg font-medium my-2 ml-16"
              onClick={() =>
                (window.location.href = "mailto:jankaribiharbhumi@gmail.com")
              }
              style={{ cursor: "pointer" }}
            >
              jankaribiharbhumi@gmail.com
            </h4>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.400681090117!2d86.06777037487552!3d26.3458993842203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd3e5b89f787%3A0xaf884f44ac311743!2sCourt%20Rd%2C%20Gillation%20Market%20Campus%2C%20Madhubani%2C%20Bihar%20847211!5e0!3m2!1sen!2sin!4v1715500347192!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      ;
    </>
  );
}

export default Contact;
