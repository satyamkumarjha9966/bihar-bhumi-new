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
          "Contact Bihar Revenue and Land Reforms Department | बिहार राजस्व एवं भूमि सुधार विभाग से संपर्क करें"
        }
        description={
          "Contact the Bihar Government Revenue and Land Reforms Department for queries, support, and feedback. Find official contact details, address, phone, and email. बिहार सरकार के राजस्व एवं भूमि सुधार विभाग से संपर्क करें: प्रश्न, सहायता और सुझाव के लिए आधिकारिक संपर्क विवरण, पता, फोन और ईमेल प्राप्त करें।"
        }
        keywords={
          "Bihar Revenue Department, Bihar Land Reforms Department, Bihar Government, Contact us, Contact details, Address, Phone numbers, Email, Feedback, संपर्क करें, बिहार राजस्व विभाग, विभागीय संपर्क, सहायता, सुझाव"
        }
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            CONTACT US
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Contact Us
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-10 md:my-16 px-4 flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="md:w-[55%] bg-white rounded-2xl shadow-md p-8">
            <h4 className="md:text-3xl text-2xl font-bold text-black mb-4">
              Connect With Us
            </h4>
            <div className="h-1 bg-[#FF6600] rounded-full w-36 mb-8"></div>
            <form
              className="flex flex-col gap-6"
              onSubmit={sendEmail}
              ref={form}
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
              >
                {loading ? "Sending...." : "Submit"}
              </button>
            </form>
          </div>
          <div className="md:w-[45%] flex flex-col gap-8 justify-center">
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4">
              <span className="material-symbols-outlined text-[#FF6600] text-4xl">
                pin_drop
              </span>
              <div>
                <h3 className="text-lg font-bold text-black">OFFICE ADDRESS</h3>
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
                <h3 className="text-lg font-bold text-black">PHONE NUMBER</h3>
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
                <h3 className="text-lg font-bold text-black">EMAIL ID</h3>
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
          ></iframe>
        </div>
      </div>
      ;
    </>
  );
}

export default Contact;
