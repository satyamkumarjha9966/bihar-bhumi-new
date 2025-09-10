import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function Services() {
  return (
    <>
      <HelmetSEO
        title={
          "Services - Bihar Revenue and Land Reforms Department | बिहार राजस्व एवं भूमि सुधार विभाग की सेवाएँ"
        }
        description={
          "Explore all citizen services offered by the Bihar Revenue and Land Reforms Department, including land records, mutation, registration, and more. बिहार सरकार के राजस्व एवं भूमि सुधार विभाग द्वारा प्रदान की जाने वाली सभी नागरिक सेवाओं की जानकारी प्राप्त करें: भूमि अभिलेख, दाखिल-खारिज, पंजीकरण आदि।"
        }
        keywords={
          "Bihar Revenue Department, Bihar Land Reforms Department, Bihar Government, Services, Land records, Mutation, Registration, Online services, बिहार राजस्व विभाग, भूमि सुधार, सेवाएँ, भूमि अभिलेख, दाखिल-खारिज, पंजीकरण, ऑनलाइन सेवाएँ"
        }
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            OUR SERVICES
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;Services
          </p>
        </div>
        <div className="max-w-6xl mx-auto my-10 md:my-16 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example service card, repeat for each service as needed, keeping content unchanged */}
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                description
              </span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">Land Records</h3>
            <p className="text-gray-700 text-center text-base">
              Access and view your land records online. Get details about
              property ownership, area, and history.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                gavel
              </span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">
              Mutation Services
            </h3>
            <p className="text-gray-700 text-center text-base">
              Apply for property mutations online. Track your application status
              and get updates.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-8 border-t-4 border-[#FF6600] flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#FF6600] mb-4">
              <span className="material-symbols-outlined text-white text-3xl">
                verified
              </span>
            </div>
            <h3 className="text-lg font-bold text-black mb-2">
              Land Certificates
            </h3>
            <p className="text-gray-700 text-center text-base">
              Apply for and download various land-related certificates and
              documents.
            </p>
          </div>
          {/* ...add more cards as needed, keeping text unchanged... */}
        </div>
      </div>
    </>
  );
}

export default Services;
