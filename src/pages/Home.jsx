import React from "react";
import HelmetSEO from "../components/HelmetSEO";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HelmetSEO
        title={
          "Bihar Revenue and Land Reforms Department | बिहार राजस्व एवं भूमि सुधार विभाग - Official Portal for Services, Updates & Information"
        }
        description={
          "Access official information, services, and latest updates from the Bihar Government Revenue and Land Reforms Department. Stay informed about revenue management, land reforms, and citizen services. बिहार सरकार के राजस्व एवं भूमि सुधार विभाग की आधिकारिक जानकारी, सेवाएँ और नवीनतम अपडेट प्राप्त करें। राजस्व प्रबंधन, भूमि सुधार और नागरिक सेवाओं के लिए विश्वसनीय स्रोत।"
        }
        keywords={
          "Bihar Revenue Department, Bihar Land Reforms Department, Bihar Government, Revenue services, Land reforms, Bihar administration, बिहार राजस्व विभाग, बिहार भूमि सुधार, सरकारी सेवाएँ, भूमि रिकॉर्ड, राजस्व प्रबंधन"
        }
      />
      <div className="bg-[#F7F7F7] min-h-screen">
        <div className="flex flex-col gap-2 justify-center items-center py-8 bg-black">
          <span className="text-[#FF6600] font-extrabold text-3xl md:text-4xl text-center tracking-wide">{`बिहार सरकार राजस्व एवं भूमि सुधार विभाग`}</span>
          <span className="font-bold text-white text-lg md:text-xl text-center">{`Bihar Government Revenue and Land Reforms Department`}</span>
          <span className="text-white text-base md:text-lg text-center mt-2">
            Important Links & Services
          </span>
        </div>
        <div className="my-10 md:my-16 max-w-7xl mx-auto flex justify-center items-center flex-wrap gap-6 px-2 md:px-4">
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              ऑनलाइन दाखिल ख़ारिज आवेदन करें
            </span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/MutationStatusNew"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              दाखिल ख़ारिज आवेदन स्थिति देखें
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/MutationReport"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              आम सूचना
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              ऑनलाइन एल० पी० सी० आवेदन करें
            </span>
          </Link>

          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/frm_LPC_StatusNew"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              एल० पी० सी० आवेदन स्थिति देखें
            </span>
          </Link>
          <Link
            to={"https://www.bhulagan.bihar.gov.in/"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              भू - लगान
            </span>
          </Link>
          <Link
            to={"https://parimarjan.bihar.gov.in/"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              परिमार्जन
            </span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/ViewJamabandi"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              जमाबंदी पंजी देखें
            </span>
          </Link>

          <Link
            to={
              "https://emutation.bihar.gov.in/LRCRoRGistDemo/TransViewJamabandi.aspx"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              जमाबंदी पंजी देखें ( भारत की सभी 22 भाषाओं में )
            </span>
          </Link>
          <Link
            to={"https://land.bihar.gov.in/Ror/RoR.aspx"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              अपना खाता देखें
            </span>
          </Link>
          <Link
            to={"https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              भू-मानचित्र
            </span>
          </Link>
          <Link
            to={"https://emutation.bihar.gov.in/DCLRCMS/"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              DCLR म्यूटेशन अपील कोर्ट
            </span>
          </Link>

          <Link
            to={"https://emutation.bihar.gov.in//ADMCMS/"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              अपर समाहर्ता न्यायालय दाखिल-खारिज पुनरीक्षण एवं जमाबंदी रद्दीकरण
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/SuoMotuForm.pdf"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              निबन्धन के साथ दाखिल ख़ारिज का प्रपत्र
            </span>
          </Link>
          <Link
            to={
              "https://dlrs.bihar.gov.in/Default.aspx?AspxAutoDetectCookieSupport=1"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              भू-अभिलेख एवं परिमाप निदेशालय
            </span>
          </Link>
          <Link
            to={"http://lrc.bih.nic.in/LandTribunal/Default.aspx"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              बिहार भूमि न्यायाधिकरण
            </span>
          </Link>

          <Link
            to={
              "https://connect.csc.gov.in/account/authorize?state=HN8KXHEIKBTYVWYHQM&response_type=code&client_id=cae35dfc-3ffd-4388-e02a-d64fb2ef092a&redirect_uri=http://biharbhumi.bihar.gov.in/Biharbhumi/callbackNew.aspx"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              डिजिटल सेवा कनेक्ट के साथ लॉगिन करें
            </span>
          </Link>
          <Link
            to={"https://parimarjan.bihar.gov.in/BiharBhumireport/dashboardrpt"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              Dashboard
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              अपर समाहर्ता न्यायालय में ऑनलाइन दाखिल-खारिज पुनरीक्षण एवं जमाबंदी
              रद्दीकरण का आवेदन करें
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              दाखिल-खारिज वाद पर आपत्ति दर्ज करें
            </span>
          </Link>

          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              SMS अलर्ट सेवा प्राप्त करें
            </span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/Aadhar_Mobile_Seeding_Status"
            }
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              Check Aadhar / Mobile Seeding Status
            </span>
          </Link>
          <Link
            to={"https://emapi.bihar.gov.in/default.aspx?ReturnUrl=%2f"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              e-Mapi
            </span>
          </Link>
          <Link
            to={"https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"}
            target="_blank"
            className="w-full sm:w-[48%] md:w-[23%] min-w-[220px] p-6 rounded-2xl shadow-md bg-white border border-[#FF6600] flex justify-center items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
          >
            <span className="text-black font-bold text-center text-base group-hover:text-[#FF6600] transition-colors">
              Bhu-Abhilekh Portal
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
