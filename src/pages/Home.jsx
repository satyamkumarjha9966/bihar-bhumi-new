import React from "react";
import HelmetSEO from "../components/HelmetSEO";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HelmetSEO
        title="Bihar Land Records & Revenue Services | Bihar Bhumi Official Portal"
        description="Explore Bihar Bhumi – your trusted source for Bihar land records, revenue services, mutation status, LPC, Bhulekh, and government updates. Access online applications, check land records, and get the latest information from the Bihar Revenue and Land Reforms Department."
        keywords="Bihar land records, Bihar Bhumi, revenue services Bihar, mutation status, LPC Bihar, Bhulekh Bihar, Bihar government land, online land application, Bihar land reforms, Bihar revenue department, Bihar property records, Bihar land portal"
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <header className="flex flex-col gap-2 justify-center items-center py-8 bg-black">
          <h1 className="text-[#FF6600] font-extrabold text-3xl md:text-4xl text-center tracking-wide">
            बिहार भूमि: राजस्व एवं भूमि सुधार विभाग पोर्टल
          </h1>
          <h2 className="font-bold text-white text-lg md:text-xl text-center">
            Bihar Land Records & Revenue Services Portal
          </h2>
          <p className="text-white text-base md:text-lg text-center mt-2 max-w-2xl">
            Access all Bihar land records, revenue services, and government
            updates in one place. Apply online, check mutation status, download
            LPC, view Bhulekh, and stay informed with the latest from the Bihar
            Revenue and Land Reforms Department.
          </p>
        </header>
        <section aria-label="Key Services and Quick Links">
          <h2 className="sr-only">Key Bihar Land & Revenue Services</h2>
          <div className="my-10 md:my-16 max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-6 px-2 md:px-4">
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Apply Online for Mutation (दाखिल ख़ारिज आवेदन)
              </span>
            </Link>
            <Link
              to="https://parimarjan.bihar.gov.in/biharBhumireport/MutationStatusNew"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Check Mutation Application Status (दाखिल ख़ारिज स्थिति)
              </span>
            </Link>
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/MutationReport"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Public Notices & Announcements (आम सूचना)
              </span>
            </Link>
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Apply Online for LPC (एल० पी० सी० आवेदन)
              </span>
            </Link>

            <Link
              to="https://parimarjan.bihar.gov.in/biharBhumireport/frm_LPC_StatusNew"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Check LPC Application Status (एल० पी० सी० स्थिति)
              </span>
            </Link>
            <Link
              to="https://www.bhulagan.bihar.gov.in/"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Pay Land Rent Online (भू-लगान)
              </span>
            </Link>
            <Link
              to="https://parimarjan.bihar.gov.in/"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Parimarjan Portal (परिमार्जन)
              </span>
            </Link>
            <Link
              to="https://parimarjan.bihar.gov.in/biharBhumireport/ViewJamabandi"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                View Jamabandi Register (जमाबंदी पंजी)
              </span>
            </Link>

            <Link
              to="https://emutation.bihar.gov.in/LRCRoRGistDemo/TransViewJamabandi.aspx"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Jamabandi Register (Available in 22 Indian Languages)
              </span>
            </Link>
            <Link
              to="https://land.bihar.gov.in/Ror/RoR.aspx"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                View Your Land Account (अपना खाता)
              </span>
            </Link>
            <Link
              to="https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                View Land Map (भू-मानचित्र)
              </span>
            </Link>
            <Link
              to="https://emutation.bihar.gov.in/DCLRCMS/"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                DCLR Mutation Appeal Court
              </span>
            </Link>

            <Link
              to="https://emutation.bihar.gov.in//ADMCMS/"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                ADM Court: Mutation Revision & Jamabandi Cancellation
              </span>
            </Link>
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/SuoMotuForm.pdf"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Mutation Form with Registration (निबंधन के साथ दाखिल ख़ारिज)
              </span>
            </Link>
            <Link
              to="https://dlrs.bihar.gov.in/Default.aspx?AspxAutoDetectCookieSupport=1"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Directorate of Land Records & Survey (भू-अभिलेख एवं परिमाप)
              </span>
            </Link>
            <Link
              to="http://lrc.bih.nic.in/LandTribunal/Default.aspx"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Bihar Land Tribunal (भूमि न्यायाधिकरण)
              </span>
            </Link>

            <Link
              to="https://connect.csc.gov.in/account/authorize?state=HN8KXHEIKBTYVWYHQM&response_type=code&client_id=cae35dfc-3ffd-4388-e02a-d64fb2ef092a&redirect_uri=http://biharbhumi.bihar.gov.in/Biharbhumi/callbackNew.aspx"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Login with Digital Seva Connect (डिजिटल सेवा कनेक्ट)
              </span>
            </Link>
            <Link
              to="https://parimarjan.bihar.gov.in/BiharBhumireport/dashboardrpt"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Service Dashboard (सेवा डैशबोर्ड)
              </span>
            </Link>
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Apply Online for ADM Court Mutation Revision & Jamabandi
                Cancellation
              </span>
            </Link>
            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                File Objection on Mutation Case (दाखिल-खारिज आपत्ति)
              </span>
            </Link>

            <Link
              to="https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Get SMS Alert Service (SMS अलर्ट सेवा)
              </span>
            </Link>
            <Link
              to="https://parimarjan.bihar.gov.in/biharBhumireport/Aadhar_Mobile_Seeding_Status"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Check Aadhaar / Mobile Seeding Status
              </span>
            </Link>
            <Link
              to="https://emapi.bihar.gov.in/default.aspx?ReturnUrl=%2f"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                e-Mapi Portal
              </span>
            </Link>
            <Link
              to="https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"
              target="_blank"
              className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
            >
              <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
                Bhu-Abhilekh Portal (भू-अभिलेख पोर्टल)
              </span>
            </Link>
          </div>
        </section>
        {/* Internal Linking Suggestion: Add links to About, Services, and Contact pages in the footer or navigation for better SEO and user navigation. */}
      </div>
    </>
  );
}

export default Home;
