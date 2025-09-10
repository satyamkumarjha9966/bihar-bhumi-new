import React from "react";
import HelmetSEO from "../components/HelmetSEO";

function About() {
  return (
    <>
      <HelmetSEO
        title={
          "About Bihar Revenue and Land Reforms Department | बिहार राजस्व एवं भूमि सुधार विभाग के बारे में"
        }
        description={
          "Learn about the Bihar Government Revenue and Land Reforms Department, its mission, vision, and initiatives for transparent revenue management and land reforms. बिहार सरकार के राजस्व एवं भूमि सुधार विभाग के उद्देश्य, मिशन, और पारदर्शी भूमि प्रबंधन व सुधार की पहलों के बारे में जानें।"
        }
        keywords={
          "Bihar Revenue Department, Bihar Land Reforms Department, Bihar Government, About us, Objectives, Functions, Initiatives, Revenue management, Land reforms, बिहार राजस्व विभाग, विभाग का परिचय, मिशन, उद्देश्य, भूमि सुधार, पारदर्शिता"
        }
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="py-14 mb-2 bg-black rounded-b-3xl shadow-md">
          <h1 className="text-[#FF6600] text-center font-extrabold text-4xl md:text-5xl tracking-wide">
            ABOUT US
          </h1>
          <p className="text-white text-center font-medium mt-2">
            Home&nbsp;&nbsp;&gt;&nbsp;&nbsp;About Us
          </p>
        </div>
        <div className="max-w-5xl mx-auto my-10 md:my-16 px-4 flex flex-col gap-10">
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h4 className="text-3xl font-bold text-black mb-4">About Us</h4>
            <div className="h-1 bg-[#FF6600] rounded-full w-24 mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Welcome to the official portal of Bihar's Revenue and Land Reforms
              Department, dedicated to providing efficient and transparent
              services related to land management and revenue. Our platform
              serves as a one-stop destination for citizens, stakeholders, and
              government officials alike, aiming to simplify land transactions
              and streamline administrative processes.
            </p>
          </section>
          <section className="bg-[#000000] rounded-2xl shadow-md p-8">
            <h4 className="text-3xl font-bold text-[#FF6600] mb-4">
              Our Mission
            </h4>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <p className="text-white leading-relaxed text-lg">
              At Bihar Revenue and Land Reforms Department, our mission is to
              leverage technology to modernize land management practices,
              promote transparency, and empower citizens with easy access to
              land-related information and services. We are committed to
              facilitating smooth interactions between citizens and the
              government, ensuring equitable land distribution and effective
              revenue collection.
            </p>
          </section>
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h4 className="text-2xl font-bold text-black mb-4">
              Services We Offer
            </h4>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <div className="mb-8">
              <p className="text-justify text-gray-700 font-medium">
                <span className="font-bold text-[#FF6600]">
                  Online Application Submission:{" "}
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Easily file applications for land-related transactions such as
                  mutation, registration, and surveys through our user-friendly
                  online portal.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium mt-4">
                <span className="font-bold text-[#FF6600]">
                  Application Status Tracking:{" "}
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Keep track of the status of your applications in real-time,
                  ensuring transparency and accountability in the processing of
                  land-related requests.
                </span>
              </p>
              <p className="text-justify text-gray-700 font-medium mt-4">
                <span className="font-bold text-[#FF6600]">
                  General Information:{" "}
                </span>
                <br />
                <span className="ml-0 md:ml-2">
                  Stay informed about important announcements, notifications,
                  and updates related to land reforms and revenue management in
                  Bihar.
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
            </div>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">
                Aadhar/Mobile Seeding Status:{" "}
              </span>
              <br />
              <span className="ml-0 md:ml-2">
                Check the status of Aadhar and mobile seeding for your land
                records, ensuring accurate and up-to-date information.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">
                e-Mapi and Bhu-Abhilekh Portal:{" "}
              </span>
              <br />
              <span className="ml-0 md:ml-2">
                Explore our digital mapping and land records portal for
                comprehensive access to land-related data and information.
              </span>
            </p>
          </section>
          <section className="bg-white rounded-2xl shadow-md p-8">
            <h4 className="text-2xl font-bold text-black mb-4">
              Why Choose Us
            </h4>
            <div className="h-1 bg-[#FF6600] rounded-full w-20 mb-6"></div>
            <p className="text-justify text-gray-700 font-medium">
              <span className="font-bold text-[#FF6600]">Convenience: </span>
              <br />
              <span className="ml-0 md:ml-2">
                Our online platform offers convenience and accessibility,
                allowing users to access services and information from anywhere,
                anytime.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">Transparency: </span>
              <br />
              <span className="ml-0 md:ml-2">
                We prioritize transparency in all our processes, ensuring that
                citizens have visibility into the status and progress of their
                land-related transactions.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">Efficiency: </span>
              <br />
              <span className="ml-0 md:ml-2">
                With streamlined processes and digital workflows, we strive to
                deliver efficient and prompt services to our users, reducing the
                time and effort involved in land transactions.
              </span>
            </p>
            <p className="text-justify text-gray-700 font-medium mt-4">
              <span className="font-bold text-[#FF6600]">Empowerment: </span>
              <br />
              <span className="ml-0 md:ml-2">
                By providing access to land records, legal resources, and
                dispute resolution mechanisms, we empower citizens to assert
                their rights and participate actively in land management
                processes.
              </span>
            </p>
            <p className="text-justify text-[#FF6600] font-bold mt-6">
              Join us in our mission to transform land administration and
              revenue management in Bihar, making it more efficient,
              transparent, and citizen-centric.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
