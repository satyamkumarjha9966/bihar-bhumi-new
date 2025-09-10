import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function About() {
  return (
    <>
      <HelmetSEO
        title="About Bihar Bhumi | Bihar Revenue & Land Reforms Department Overview"
        description="Discover Bihar Bhumi's mission, vision, and commitment to transparent land records, revenue management, and citizen services. Learn how our digital platform empowers users and modernizes land administration in Bihar."
        keywords="About Bihar Bhumi, Bihar Revenue Department, Land Reforms Bihar, land records Bihar, mission, vision, transparency, citizen services, digital land portal, Bihar government"
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            About Bihar Bhumi: Empowering Landowners & Citizens
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home &gt; About Us
          </p>
        </div>
        <div className="max-w-5xl mx-auto my-10 md:my-16 px-4 flex flex-col gap-10">
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-black mb-4">Who We Are</h2>
            <div className="h-1 bg-[#FF6600] rounded-full w-24 mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Bihar Bhumi is the official digital platform of the Bihar Revenue
              and Land Reforms Department. We are dedicated to delivering
              transparent, efficient, and user-friendly land and revenue
              services to all citizens of Bihar. Our portal is your one-stop
              destination for land records, mutation, registration, and
              government notifications—empowering landowners, buyers, and
              stakeholders with reliable information and seamless online
              services.
            </p>
          </section>
          <section className="bg-[#000000] rounded-2xl shadow-md p-8">
            <h2 className="text-3xl font-bold text-[#FF6600] mb-4">
              Our Mission & Vision
            </h2>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <p className="text-white leading-relaxed text-lg">
              Our mission is to modernize land management in Bihar through
              technology, transparency, and citizen empowerment. We strive to:
            </p>
            <ul className="text-white leading-relaxed text-lg list-disc pl-8 mt-2">
              <li>
                Provide easy, online access to land records and revenue services
              </li>
              <li>Promote transparency and accountability in all processes</li>
              <li>
                Empower users with up-to-date information and digital tools
              </li>
              <li>
                Facilitate smooth, equitable land transactions for all citizens
              </li>
            </ul>
          </section>
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              What We Offer: Key Services
            </h2>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <div className="mb-8 space-y-4">
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  Online Application Submission:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Easily apply for land mutation, registration, and surveys
                  through our secure online portal.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  Application Status Tracking:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Track your application status in real-time for full
                  transparency and peace of mind.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  General Information & Announcements:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Stay updated with the latest news, notifications, and
                  government circulars on land reforms and revenue management.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  Land Revenue Management:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Access resources for tax assessment, collection, and record
                  maintenance to ensure efficient land revenue management.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  SMS Alert Service:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Get instant SMS alerts for important updates and your
                  land-related transactions.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  Aadhaar/Mobile Seeding Status:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Verify Aadhaar and mobile seeding for your land records to
                  keep your information accurate and secure.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  e-Mapi & Bhu-Abhilekh Portal:
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Explore digital mapping and land records for comprehensive,
                  up-to-date land data.
                </span>
              </p>
            </div>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">
                General Information:{" "}
              </span>
              <br />
              <span className="ml-0 md:ml-2">
                Stay informed about important announcements, notifications, and
                updates related to land reforms and revenue management in Bihar.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">
                Land Revenue Management:{" "}
              </span>
              <br />
              <span className="ml-0 md:ml-2">
                Access resources and services for efficient management of land
                revenue, including tax assessment, collection, and record
                maintenance.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">
                SMS Alert Service:{" "}
              </span>
              <br />
              <span className="ml-0 md:ml-2">
                Stay updated with important notifications and alerts regarding
                your land-related transactions through our SMS alert service.
              </span>
            </p>
          </section>
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Why Choose Bihar Bhumi?
            </h2>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <ul className="list-disc pl-8 space-y-2 text-gray-700 font-medium">
              <li>
                <span className="font-bold text-[#FF6600]">Convenience:</span>{" "}
                Access all services and information online, anytime, anywhere.
              </li>
              <li>
                <span className="font-bold text-[#FF6600]">Transparency:</span>{" "}
                Track your applications and transactions with full visibility.
              </li>
              <li>
                <span className="font-bold text-[#FF6600]">Efficiency:</span>{" "}
                Enjoy fast, streamlined digital processes for all land-related
                needs.
              </li>
              <li>
                <span className="font-bold text-[#FF6600]">Empowerment:</span>{" "}
                Get the resources and support you need to manage your land
                confidently.
              </li>
            </ul>
            <p className="text-justify text-[#FF6600] font-bold mt-6">
              Join Bihar Bhumi today and experience a new era of land
              administration—efficient, transparent, and citizen-centric.
            </p>
            <div className="mt-6">
              <a
                href="/services"
                className="inline-block bg-[#FF6600] text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-black hover:text-[#FF6600] transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
