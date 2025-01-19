import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import eventData from "../data.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Details() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const event = eventData.find((event) => event.id === eventId);
    setEventDetails(event);
  }, [eventId]);

  const stopReading = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel(); // Stops the ongoing speech
    }
  };

  const startReading = () => {
    if (eventDetails) {
      const speech = new SpeechSynthesisUtterance();
      speech.text = `${eventDetails.title}. ${eventDetails.description}`;
      window.speechSynthesis.speak(speech);
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  if (!eventDetails) {
    return (
      <div className="text-center text-lg text-gray-600 py-16">
        {t("event_not_found")}
      </div>
    );
  }

  return (
    <div className="bg-base-100 p-8 sm:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Language Switcher and Reading Controls */}
        <div className="flex justify-between items-center mb-4">
          <button
            className="btn btn-sm btn-outline btn-primary"
            onClick={() =>
              changeLanguage(
                i18n.language === "en"
                  ? "kn"
                  : i18n.language === "kn"
                  ? "hi"
                  : "en"
              )
            }
          >
            {i18n.language === "en"
              ? "ಕನ್ನಡ"
              : i18n.language === "kn"
              ? "हिन्दी"
              : "English"}
          </button>

          {/* Start and Stop Reading Buttons */}
          <div className="space-x-4">
            <button
              onClick={startReading}
              className="btn btn-sm btn-outline btn-primary"
            >
              Start Reading
            </button>
            <button
              onClick={stopReading}
              className="btn btn-sm btn-outline btn-primary"
            >
              Stop Reading
            </button>
          </div>
        </div>

        {/* Title and First Image */}
        <div className="mb-12 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-primary">
            {eventDetails.title}
          </h1>
          {eventDetails.images[0] && (
            <img
              src={eventDetails.images[0]}
              alt="main-image"
              className="w-96 max-w-3xl h-auto object-cover rounded-xl mt-6 shadow-lg transform hover:scale-105 transition-all duration-300"
            />
          )}

          {/* YouTube Video Section */}
          {eventDetails.youtubeUrl && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-accent mb-6">
                {t("related_video")}
              </h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={eventDetails.youtubeUrl.replace("watch?v=", "embed/")}
                  title={eventDetails.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-xl shadow-lg"
                ></iframe>
              </div>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-12 text-base-content">
          <p className="text-lg">{eventDetails.description}</p>
        </div>

        {/* Key Battles Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            {t("key_battles")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            {eventDetails.images[1] && (
              <img
                src={eventDetails.images[1]}
                alt={`battle-1`}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300"
              />
            )}
            {eventDetails.images[2] && (
              <img
                src={eventDetails.images[2]}
                alt={`battle-2`}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300"
              />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {eventDetails.keyBattles && eventDetails.keyBattles.length > 0 ? (
              eventDetails.keyBattles.map((battle, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:scale-105"
                >
                  <p className="text-lg text-base-content mb-4">{battle}</p>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-600">{t("no_information")}</p>
            )}
          </div>
        </div>

        {/* Administrative Achievements Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            {t("administrative_achievements")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            {eventDetails.images[3] && (
              <img
                src={eventDetails.images[3]}
                alt={`Achievements-1`}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300"
              />
            )}
            {eventDetails.images[4] && (
              <img
                src={eventDetails.images[4]}
                alt={`Achievements-2`}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300"
              />
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {eventDetails.administrativeAchievements &&
            eventDetails.administrativeAchievements.length > 0 ? (
              eventDetails.administrativeAchievements.map(
                (achievement, index) => (
                  <div
                    key={index}
                    className="bg-base-200 rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:scale-105"
                  >
                    <p className="text-lg text-base-content mb-4">
                      {achievement}
                    </p>
                  </div>
                )
              )
            ) : (
              <p className="text-lg text-gray-600">{t("no_information")}</p>
            )}
          </div>
        </div>

        {/* Legacy Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-accent mb-6">
            {t("legacy")}
          </h2>
          <p className="text-lg text-base-content">
            {eventDetails.legacy ? eventDetails.legacy : t("no_information")}
          </p>
          <div className="mt-6">
            {eventDetails.images[5] && (
              <img
                src={eventDetails.images[5]}
                alt="legacy"
                className="w-full h-64 object-cover rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
              />
            )}
          </div>
        </div>

        <Link
          to={`/quiz/${eventId}`}
          className="btn btn-primary text-white w-32 py-3 rounded-lg mt-6"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Details;
