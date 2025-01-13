// import React, { useState } from "react";

// function Chatbot() {
//   const [query, setQuery] = useState(""); // Store the user's input
//   const [responses, setResponses] = useState([]); // Store the chatbot responses

//   // Handle form submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim() === "") return;

//     // Simulate chatbot response
//     const newResponses = [
//       ...responses,
//       { type: "user", message: query },
//       {
//         type: "bot",
//         message: `Here's what I found for "${query}".`,
//         link: `https://www.google.com/search?q=${encodeURIComponent(query)}`,
//       },
//     ];
//     setResponses(newResponses);
//     setQuery(""); // Clear the input field
//   };

//   return (
//     <div className="bg-base-200 min-h-screen py-16 px-8">
//       {/* Page Header */}
//       <header className="text-center mb-12">
//         <h1 className="text-5xl font-bold text-primary">Chatbot</h1>
//         <p className="text-lg text-gray-700 mt-4">
//           Ask me anything, and I'll guide you to the best resources!
//         </p>
//       </header>

//       {/* Chat Display */}
//       <div className="bg-base-100 rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-8">
//         <div className="space-y-4 max-h-[60vh] overflow-y-auto">
//           {responses.map((res, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 res.type === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`${
//                   res.type === "user"
//                     ? "bg-primary text-white"
//                     : "bg-base-200 text-base-content"
//                 } p-4 rounded-lg shadow-md max-w-md`}
//               >
//                 {res.type === "bot" && res.link ? (
//                   <a
//                     href={res.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="underline text-secondary"
//                   >
//                     {res.message}
//                   </a>
//                 ) : (
//                   <p>{res.message}</p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Input Form */}
//       <form
//         className="flex items-center max-w-4xl mx-auto"
//         onSubmit={handleSearch}
//       >
//         <input
//           type="text"
//           className="input input-bordered flex-grow"
//           placeholder="Ask me a question..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button type="submit" className="btn btn-primary ml-4">
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Chatbot;

import React, { useState } from "react";
import axios from "axios";

function Chatbot() {
  const [query, setQuery] = useState(""); // User's input
  const [responses, setResponses] = useState([]); // Chatbot responses

  const GEMINI_API_KEY = "AIzaSyA5x67hvFwa6sTfTVttBjsw739mZDGWli4"; // Replace with your Gemini API key
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;

    try {
      // Add user message
      setResponses((prev) => [...prev, { type: "user", message: query }]);

      // Call Gemini API
      const response = await axios.post(
        GEMINI_API_URL,
        {
          contents: [
            {
              parts: [
                {
                  text: query, // Your user's query
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the bot's response text from the API response
      const botResponse =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't find an answer.";

      // Add bot response
      setResponses((prev) => [...prev, { type: "bot", message: botResponse }]);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      console.error(
        "API Error Details:",
        error.response?.data || error.message
      );

      setResponses((prev) => [
        ...prev,
        { type: "bot", message: "There was an error fetching the response." },
      ]);
    } finally {
      setQuery(""); // Clear the input field
    }
  };

  return (
    <div className="bg-base-200 min-h-screen py-16 px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-primary">Chatbot</h1>
        <p className="text-lg text-gray-700 mt-4">
          Ask me anything, and I'll guide you to the best resources!
        </p>
      </header>

      {/* Chat Display */}
      <div className="bg-base-100 rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-8">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {responses.map((res, index) => (
            <div
              key={index}
              className={`flex ${
                res.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  res.type === "user"
                    ? "bg-primary text-white"
                    : "bg-base-200 text-base-content"
                } p-4 rounded-lg shadow-md max-w-md`}
              >
                <p>{res.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form
        className="flex items-center max-w-4xl mx-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="input input-bordered flex-grow"
          placeholder="Ask me a question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-primary ml-4">
          Search
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
