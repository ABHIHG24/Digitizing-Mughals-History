import React from "react";
import { Link } from "react-router-dom";

function VirtualTour() {
  const arVrVideos = [
    {
      id: "taj-mahal-tour",
      title: "The First Battle of Panipat",
      description: "Relive the First Battle of Panipat in Virtual Reality.",
      videoSrc: "./src/assets/Mughal History.mp4",
    },
    {
      id: "fatehpur-sikri-tour",
      title: "Babur",
      description:
        "Walk Through the Life and Legacy of Babur in Virtual Reality.",
      videoSrc: "./src/assets/babar.mp4",
    },
    {
      id: "agra-fort-tour",
      title: "The First Battle of Panipat",
      description: "Relive the First Battle of Panipat in Virtual Reality.",
      videoSrc: "./src/assets/Mughal History.mp4",
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen py-16 px-8">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-primary mb-4">
          Virtual Tours
        </h1>
        <p className="text-lg text-base-content leading-relaxed max-w-3xl mx-auto">
          Immerse yourself in the grandeur of Mughal architecture through our
          carefully curated AR/VR experiences.
        </p>
      </header>

      {/* Video Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {arVrVideos.map((video) => (
          <div
            key={video.id}
            className="card shadow-xl bg-base-100 border border-base-300 rounded-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            <figure className="rounded-t-lg overflow-hidden">
              <video
                controls
                className="rounded-t-lg w-full"
                src={video.videoSrc}
              >
                Your browser does not support the video tag.
              </video>
            </figure>
            <div className="card-body text-center p-6">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {video.title}
              </h3>
              <p className="text-base-content">{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <div className="text-center mt-16">
        <Link
          to="/"
          className="btn btn-primary btn-lg rounded-full shadow-lg px-8 py-4 text-lg hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default VirtualTour;
