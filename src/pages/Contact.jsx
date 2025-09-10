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
        title="Contact Bihar Bhumi | Get Support & Land Services Assistance"
        description="Contact Bihar Bhumi for support, queries, and feedback on land records, mutation, registration, and revenue services. Find our official address, phone, and email. We're here to help you with all Bihar land and revenue needs."
        keywords="Contact Bihar Bhumi, Bihar land support, land records help, mutation assistance, Bihar revenue department contact, land services Bihar, customer support, Bihar government land portal"
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            Contact Bihar Bhumi: We're Here to Help
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home &gt; Contact Us
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-10 md:my-16 px-4 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-[55%] bg-white rounded-2xl shadow-md p-8">
            <h2 className="md:text-3xl text-2xl font-bold text-black mb-4">
              Get in Touch with Bihar Bhumi
            </h2>
            <div className="h-1 bg-[#FF6600] rounded-full w-36 mb-8"></div>
            <form
              className="flex flex-col gap-6"
              onSubmit={sendEmail}
              ref={form}
              aria-label="Contact form for Bihar Bhumi support and queries"
            >
              <input
                type="text"
                placeholder="Enter Your Name *"
                required
                className="py-3 px-4 placeholder:text-gray-500 bg-[#F7F7F7] w-full rounded-xl border border-[#FF6600] focus:border-black focus:ring-2 focus:ring-[#FF6600] transition-all duration-300"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="from_name"
              />
              <input
                type="email"
                placeholder="Enter Your E-mail Id *"
                required
                className="py-3 px-4 placeholder:text-gray-500 bg-[#F7F7F7] w-full rounded-xl border border-[#FF6600] focus:border-black focus:ring-2 focus:ring-[#FF6600] transition-all duration-300"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="from_email"
              />
              <input
                type="text"
                placeholder="Enter Your Phone Number *"
                required
                className="py-3 px-4 placeholder:text-gray-500 bg-[#F7F7F7] w-full rounded-xl border border-[#FF6600] focus:border-black focus:ring-2 focus:ring-[#FF6600] transition-all duration-300"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                name="phone"
              />
              <textarea
                type="text"
                placeholder="Enter Your Message...."
                required
                className="py-3 px-4 placeholder:text-gray-500 bg-[#F7F7F7] w-full rounded-xl border border-[#FF6600] focus:border-black focus:ring-2 focus:ring-[#FF6600] transition-all duration-300"
                rows={7}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />

              <button
                className="bg-[#FF6600] p-3 rounded-xl shadow-md text-white text-lg font-bold mt-2 hover:bg-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:ring-offset-2"
                disabled={loading}
                type="submit"
                aria-label="Submit contact form"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className="md:w-[45%] flex flex-col gap-8 justify-center">
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[#FF6600] text-4xl">
                pin_drop
              </span>
              <div>
                <h3 className="text-lg font-bold text-black">Office Address</h3>
                <p className="text-gray-700 text-base mt-1">
                  Khadi Bhandar Gate, Court Road, Madhubani, Bihar, 847211
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[#FF6600] text-4xl">
                support_agent
              </span>
              <div>
                <h3 className="text-lg font-bold text-black">Phone Number</h3>
                <p
                  className="text-gray-700 text-base mt-1 cursor-pointer hover:text-[#FF6600]"
                  onClick={() => (window.location.href = "tel:+91-7761097990")}
                >
                  +91-7761097990
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[#FF6600] text-4xl">
                mail
              </span>
              <div>
                <h3 className="text-lg font-bold text-black">Email</h3>
                <p
                  className="text-gray-700 text-base mt-1 cursor-pointer hover:text-[#FF6600]"
                  onClick={() =>
                    (window.location.href =
                      "mailto:jankaribiharbhumi@gmail.com")
                  }
                >
                  jankaribiharbhumi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto my-10 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.400681090117!2d86.06777037487552!3d26.3458993842203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edcd3e5b89f787%3A0xaf884f44ac311743!2sCourt%20Rd%2C%20Gillation%20Market%20Campus%2C%20Madhubani%2C%20Bihar%20847211!5e0!3m2!1sen!2sin!4v1715500347192!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "1rem" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bihar Bhumi Office Location Map"
          ></iframe>
        </div>
      </div>
      ;
    </>
  );
}

export default Contact;
