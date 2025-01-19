import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const Legacy = () => {
  const legacyData = [
    {
      title: "Babur (Founder of the Mughal Empire)",
      highlights: [
        "Foundation of the Mughal Empire: Babur laid the groundwork for the Mughal dynasty after the Battle of Panipat (1526).",
        "Memoirs - Baburnama: Babur’s autobiography provides detailed insights into the political, cultural, and natural world of his time.",
        "Cultural Blending: Introduced Central Asian culture and practices to India, setting the stage for future Mughals.",
      ],
    },
    {
      title: "Akbar (The Great)",
      highlights: [
        "Religious Tolerance: Akbar promoted inclusivity by establishing Din-i-Ilahi and abolishing the Jizya tax on non-Muslims.",
        "Administration: Introduced an efficient governance system, including the Mansabdari system and land revenue reforms.",
        "Cultural Flourishing: Patronized art, literature, and architecture (e.g., Fatehpur Sikri).",
      ],
    },
    {
      title: "Jahangir (The Connoisseur of Art)",
      highlights: [
        "Art and Culture: Jahangir elevated Mughal painting through the promotion of miniature art and naturalistic themes.",
        "Love for Nature: Documented flora, fauna, and landscapes in Tuzk-e-Jahangiri (his memoirs).",
        "Stability: Maintained the empire's prosperity and stability while enriching its cultural identity.",
      ],
    },
    {
      title: "Shah Jahan (The Architect of Wonders)",
      highlights: [
        "Architectural Masterpieces: Built iconic structures such as the Taj Mahal, Red Fort, and Jama Masjid, which symbolize Mughal grandeur.",
        "Cultural Peak: The Mughal Empire reached its zenith in architecture and luxury.",
        "Symbol of Love: The Taj Mahal remains a global symbol of love and beauty.",
      ],
    },
    {
      title: "Aurangzeb (The Expansionist)",
      highlights: [
        "Military Expansion: Extended the Mughal Empire to its greatest territorial extent, including parts of the Deccan.",
        "Architectural Contributions: Built structures like the Bibi Ka Maqbara (resembling the Taj Mahal).",
        "Controversy: His reign saw tensions due to strict policies and religious conservatism.",
      ],
    },
    {
      title: "Bahadur Shah II (The Last Emperor)",
      highlights: [
        "Symbol of Resistance: Played a symbolic role in the 1857 First War of Indian Independence against British rule.",
        "End of the Mughals: Marked the fall of the Mughal Empire and the beginning of British dominance.",
        "Literary Legacy: Known for his poetry and patronage of Urdu literature.",
      ],
    },
  ];

  return (
    <div className="bg-base-200 min-h-screen flex flex-col items-center p-6">
      {/* Sketchfab 3D Model */}
      <div className="sketchfab-embed-wrapper w-full h-64 my-8">
        <iframe
          title="India"
          frameBorder="0"
          allowFullScreen
          mozAllowFullscreen="true"
          webkitAllowFullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          webShare
          src="https://sketchfab.com/models/c86b16b141e54d2d844b740941bedb0c/embed"
          className="w-full h-full"
        />
        <p
          style={{
            fontSize: "13px",
            fontWeight: "normal",
            margin: "5px",
            color: "#4A4A4A",
          }}
        ></p>
      </div>

      {/* Title Section */}
      <h1 className="text-4xl font-bold text-primary my-6">Mughal Legacy</h1>

      {/* Legacy Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {legacyData.map((item, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl transition-all hover:scale-105"
          >
            <div className="card-body">
              <h2 className="card-title text-accent">{item.title}</h2>
              <ul className="list-disc pl-4 space-y-2 text-base-content">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legacy;
