import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function Services() {
  return (
    <>
      <HelmetSEO
        title="Bihar Bhumi Services | Online Land Records, Mutation, Registration & More"
        description="Explore all Bihar Bhumi services: online land records, property mutation, registration, certificates, and more. Access fast, transparent, and user-friendly land and revenue services for citizens of Bihar."
        keywords="Bihar Bhumi services, land records Bihar, mutation Bihar, property registration Bihar, online land services, Bihar revenue department, land certificates, digital land portal, Bihar government services"
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            Bihar Bhumi Services: Land Records, Mutation & More
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home &gt; Services
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-10 md:my-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                description
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              Online Land Records
            </h2>
            <p className="text-gray-700 text-center text-base">
              Instantly access your Bihar land records, property details, and
              ownership history online. Stay updated and download official
              documents anytime.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                gavel
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              Property Mutation Services
            </h2>
            <p className="text-gray-700 text-center text-base">
              Apply for property mutation online, track your application status,
              and receive real-time updates for a transparent experience.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                verified
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              Land Certificates & Documents
            </h2>
            <p className="text-gray-700 text-center text-base">
              Apply for and download land-related certificates, LPC, and other
              official documents quickly and securely.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                notifications
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              Public Notices & Announcements
            </h2>
            <p className="text-gray-700 text-center text-base">
              Stay informed with the latest government notifications, circulars,
              and public announcements related to land and revenue.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                sms
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              SMS Alert Service
            </h2>
            <p className="text-gray-700 text-center text-base">
              Get instant SMS alerts for your land-related transactions and
              important updates from Bihar Bhumi.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                map
              </span>
            </div>
            <h2 className="text-lg font-bold text-black mb-2">
              Digital Land Maps & e-Mapi
            </h2>
            <p className="text-gray-700 text-center text-base">
              Explore digital land maps and use the e-Mapi portal for
              comprehensive, up-to-date land data and mapping services.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 mt-8 text-center">
          <a
            href="/contactUs"
            className="inline-block bg-[#FF6600] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-black hover:text-[#FF6600] transition-colors"
          >
            Contact Us for Support
          </a>
        </div>
      </div>
    </>
  );
}

export default Services;
