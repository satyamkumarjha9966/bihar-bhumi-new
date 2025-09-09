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
      <div>
        <div className="flex flex-col gap-1 justify-center items-center py-5 bg-gradient-to-r from-blue-500 to-green-500">
          <span className="text-white font-bold text-2xl text-center">{`बिहार सरकार राजस्व एवं भूमि सुधार विभाग (महत्वपूर्ण लिंक)`}</span>
          <span className="font-bold text-white text-[16px] text-center">{`Bihar Government Revenue and Land Reforms Department (Important Links)`}</span>
        </div>
        <div className="my-8 md:my-16 flex justify-center items-center flex-wrap gap-4 px-4">
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              ऑनलाइन दाखिल ख़ारिज आवेदन करें{" "}
            </span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/MutationStatusNew"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              दाखिल ख़ारिज आवेदन स्थिति देखें
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/MutationReport"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">आम सूचना</span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              ऑनलाइन एल० पी० सी० आवेदन करें
            </span>
          </Link>

          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/frm_LPC_StatusNew"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              एल० पी० सी० आवेदन स्थिति देखें
            </span>
          </Link>
          <Link
            to={"https://www.bhulagan.bihar.gov.in/"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">भू - लगान</span>
          </Link>
          <Link
            to={"https://parimarjan.bihar.gov.in/"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">परिमार्जन</span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/ViewJamabandi"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              जमाबंदी पंजी देखें
            </span>
          </Link>

          <Link
            to={
              "https://emutation.bihar.gov.in/LRCRoRGistDemo/TransViewJamabandi.aspx"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              जमाबंदी पंजी देखें ( भारत की सभी 22 भाषाओं में )
            </span>
          </Link>
          <Link
            to={"https://land.bihar.gov.in/Ror/RoR.aspx"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              अपना खाता देखें
            </span>
          </Link>
          <Link
            to={"https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              भू-मानचित्र
            </span>
          </Link>
          <Link
            to={"https://emutation.bihar.gov.in/DCLRCMS/"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              DCLR म्यूटेशन अपील कोर्ट
            </span>
          </Link>

          <Link
            to={"https://emutation.bihar.gov.in//ADMCMS/"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              अपर समाहर्ता न्यायालय दाखिल-खारिज पुनरीक्षण एवं जमाबंदी रद्दीकरण
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/SuoMotuForm.pdf"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              निबन्धन के साथ दाखिल ख़ारिज का प्रपत्र
            </span>
          </Link>
          <Link
            to={
              "https://dlrs.bihar.gov.in/Default.aspx?AspxAutoDetectCookieSupport=1"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              भू-अभिलेख एवं परिमाप निदेशालय
            </span>
          </Link>
          <Link
            to={"http://lrc.bih.nic.in/LandTribunal/Default.aspx"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              बिहार भूमि न्यायाधिकरण
            </span>
          </Link>

          <Link
            to={
              "https://connect.csc.gov.in/account/authorize?state=HN8KXHEIKBTYVWYHQM&response_type=code&client_id=cae35dfc-3ffd-4388-e02a-d64fb2ef092a&redirect_uri=http://biharbhumi.bihar.gov.in/Biharbhumi/callbackNew.aspx"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              डिजिटल सेवा कनेक्ट के साथ लॉगिन करें
            </span>
          </Link>
          <Link
            to={"https://parimarjan.bihar.gov.in/BiharBhumireport/dashboardrpt"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">Dashboard</span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              अपर समाहर्ता न्यायालय में ऑनलाइन दाखिल-खारिज पुनरीक्षण एवं जमाबंदी
              रद्दीकरण का आवेदन करें
            </span>
          </Link>
          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              दाखिल-खारिज वाद पर आपत्ति दर्ज करें
            </span>
          </Link>

          <Link
            to={"https://biharbhumi.bihar.gov.in/Biharbhumi/UserLogin"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              SMS अलर्ट सेवा प्राप्त करें
            </span>
          </Link>
          <Link
            to={
              "https://parimarjan.bihar.gov.in/biharBhumireport/Aadhar_Mobile_Seeding_Status"
            }
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              Check Aadhar / Mobile Seeding Status
            </span>
          </Link>
          <Link
            to={"https://emapi.bihar.gov.in/default.aspx?ReturnUrl=%2f"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">e-Mapi</span>
          </Link>
          <Link
            to={"https://bhuabhilekh.bihar.gov.in/login?ref=aW5kZXgucGhw"}
            target="_blank"
            className="w-[100%] md:w-[24%] py-4 px-4 rounded-md shadow-lg cursor-pointer flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-700 ease-in-out h-20"
          >
            <span className="text-white font-bold text-center">
              Bhu-Abhilekh Portal
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
