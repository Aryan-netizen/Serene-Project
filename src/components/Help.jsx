import React, { useState } from "react";

const HelpPage = () => {
  const faqs = [
    {
      question: "What is Serene?",
      answer:
        "Serene is an AI-powered mental wellness chatbot that passively tracks your daily activities, sleep patterns, mood, and stress levels to provide personalized mental health insights and solutions.",
    },
    {
      question: "How does Serene track mental health?",
      answer:
        "Serene uses AI to analyze sleep patterns, mood, facial expressions via webcam, and voice tone to assess emotional well-being.",
    },
    {
      question: "Is my data safe with Serene?",
      answer:
        "Yes, Serene prioritizes privacy with end-to-end encryption and never shares your data without consent.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach out to us for any assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [userProblem, setUserProblem] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleProblemSubmit = () => {
    alert("Your problem has been submitted. We will get back to you soon.");
    setUserProblem("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Help & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FAQ Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">FAQs</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-2">
                  <button
                    className="w-full text-left font-semibold text-lg flex justify-between items-center py-2"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="text-gray-700 mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* User Problem Submission */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Share Your Problem</h2>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Describe your problem here..."
              value={userProblem}
              onChange={(e) => setUserProblem(e.target.value)}
            ></textarea>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              onClick={handleProblemSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="mt-6 border-t pt-4 text-center">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-gray-600">You can reach out to us for any assistance.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;