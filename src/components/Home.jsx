import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-base-100 min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 text-base-content py-16 px-8">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
          <div className="sm:w-1/2 text-center sm:text-left">
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              Welcome to the Mughal Empire Digitalization
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Discover the rich history of the Mughal dynasty through an
              interactive timeline, virtual reality experiences, and a curated
              collection of videos and key events.
            </p>
            <Link
              to="/timeline"
              className="btn btn-primary btn-lg shadow-lg transition-all hover:scale-105"
            >
              Explore Timeline
            </Link>
          </div>
          <div className="sm:w-1/2">
            <div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg shadow-lg w-full h-80 flex items-center justify-center">
              <span className="text-4xl text-gray-500 font-semibold">
                <img
                  src="https://i.ytimg.com/vi/uO8dCaD4WSk/maxresdefault.jpg"
                  alt="Timeline"
                  className="rounded-xl"
                  // style={{ width: "80px", height: "80" }}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-base-200">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-accent">
            What You Can Explore
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Dive deep into the Mughal Empire’s history through immersive
            features.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Timeline Feature */}
          <div className="card shadow-lg bg-base-100 hover:shadow-2xl transition-all">
            <figure className="px-6 pt-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1239/1239681.png"
                alt="Timeline"
                className="rounded-xl"
                style={{ width: "80px", height: "80" }}
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold text-primary">Timeline</h3>
              <p className="text-gray-600">
                Explore the chronological events of the Mughal dynasty, from its
                inception to its legacy.
              </p>
              <Link to="/timeline" className="btn btn-accent btn-sm mt-4">
                View Timeline
              </Link>
            </div>
          </div>
          {/* AR/VR Feature */}
          <div className="card shadow-lg bg-base-100 hover:shadow-2xl transition-all">
            <figure className="px-6 pt-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdk0Ys9Ajwblxtph-j6wayeanKFZjTIiQJ_w&s"
                alt="AR/VR"
                className="rounded-xl"
                style={{ width: "80px", height: "80" }}
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold text-primary">
                Virtual Tours
              </h3>
              <p className="text-gray-600">
                Experience the grandeur of Mughal architecture through AR and VR
                integration.
              </p>
              <Link to="/virtual-tour" className="btn btn-accent btn-sm mt-4">
                Explore Now
              </Link>
            </div>
          </div>
          {/* Videos Feature */}
          <div className="card shadow-lg bg-base-100 hover:shadow-2xl transition-all">
            <figure className="px-6 pt-6">
              <img
                src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg"
                alt="Chatbot"
                className="rounded-xl max-w-xs h-auto"
                style={{ width: "100px", height: "100" }}
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="text-2xl font-semibold text-primary">ChatBot</h3>
              <p className="text-gray-600">
                Ask me about the Mughal Empire's fascinating history, and I'll
                provide detailed insights and resources
              </p>
              <Link to="/chatbot" className="btn btn-accent btn-sm mt-4">
                Chatbot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-base-300 text-base-content py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; 2024 Mughal Empire Digitalization. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
