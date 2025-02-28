import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-blue-900 via-blue-500 to-white rounded-xl shadow-2xl border border-blue-900 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl h-fit my-10">
      <h1 className="text-5xl font-extrabold mb-6 text-white text-center underline drop-shadow-lg bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text font-sans tracking-wide uppercase hover:text-white transition duration-300">
        Terms and Conditions
      </h1>
      
      <p className="mb-6 text-black text-sm leading-relaxed tracking-wide font-sans bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        By accessing and using this website, you agree to comply with the following terms and conditions, which govern your use of our services. Please read them carefully before proceeding.
      </p>
      
      <h2 className="text-3xl font-bold mt-6 text-white border-b-4 border-blue-700 pb-2 shadow-lg uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text font-sans hover:text-white transition duration-300">
        1. Age Restriction
      </h2>
      <p className="mb-6 text-black text-sm leading-relaxed font-sans bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        Users below the age of 18 must use this site under the supervision and consent of their parents or legal guardians. The company does not knowingly collect information from minors. Parents are encouraged to monitor their children’s online activities.
      </p>
      
      <h2 className="text-3xl font-bold mt-6 text-white border-b-4 border-blue-700 pb-2 shadow-lg uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text font-sans hover:text-white transition duration-300">
        2. Limitation of Liability
      </h2>
      <p className="mb-6 text-black text-sm leading-relaxed font-sans bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        The company takes utmost care in providing a beneficial experience. However, we do not guarantee that the services will always function without disruptions or errors. Users assume full responsibility for their use of the site, and the company is not liable for any direct or indirect damages resulting from reliance on the information provided.
      </p>
      
      <h2 className="text-3xl font-bold mt-6 text-white border-b-4 border-blue-700 pb-2 shadow-lg uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text font-sans hover:text-white transition duration-300">
        3. Geographic Restriction
      </h2>
      <p className="mb-6 text-black text-sm leading-relaxed font-sans bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        This platform is intended for use by residents of India only. Users accessing our services from other countries do so at their own risk and must comply with their local laws and regulations.
      </p>
      
      <h2 className="text-3xl font-bold mt-6 text-white border-b-4 border-blue-700 pb-2 shadow-lg uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text font-sans hover:text-white transition duration-300">
        4. Misuse of the Chatbot
      </h2>
      <p className="mb-6 text-black text-sm leading-relaxed font-sans bg-white p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
        Users must engage with the chatbot in a lawful and ethical manner. Misuse includes but is not limited to harassment, spreading misinformation, attempting to hack or manipulate the system, and using automated scripts or bots. Violation of this policy may result in immediate termination of access and legal action.
      </p>
      
      <h2 className="text-3xl font-bold mt-6 text-white border-b-4 border-blue-700 pb-2 shadow-lg uppercase tracking-widest bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text font-sans hover:text-white transition duration-300">
        5. No Refund Policy
      </h2>
      <p className="mb-6 text-black text-sm leading-relaxed font-sans bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        All purchases of subscription plans are final. No refunds will be provided under any circumstances, including but not limited to dissatisfaction with the service, failure to use the service, or unintended purchases.
      </p>
      
      <p className="mt-8 text-xs text-black text-center italic bg-blue-700 p-3 rounded-lg shadow-md font-sans tracking-wide hover:bg-blue-800 transition duration-300 hover:text-white">
        By continuing to use this website, you acknowledge that you have read, understood, and agreed to these terms and conditions.
      </p>
    </div>
  );
};

export default TermsAndConditions;