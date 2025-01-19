import React from "react";

const models = [
  {
    title: "Taj Mahal",
    src: "https://sketchfab.com/models/33149233cefd492b9abdd50fe5a8c921/embed",
    description:
      "The Taj Mahal is an iconic symbol of India, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage site and one of the New Seven Wonders of the World.",
  },
  {
    title: "Qutb Minar Environment Block-out",
    src: "https://sketchfab.com/models/239b025e19ea460eb87a0e66ac280d72/embed",
    description:
      "The Qutb Minar is the tallest brick minaret in the world, located in Delhi, India. It was built in the 12th century by Qutb-ud-Din Aibak to mark the beginning of Muslim rule in India.",
  },
  {
    title: "Badshahi Mosque",
    src: "https://sketchfab.com/models/0a8593dd909e4e42b68d34b914f83fca/embed",
    description:
      "Badshahi Mosque, located in Lahore, Pakistan, is one of the largest mosques in the world. It was built in 1673 by the Mughal Emperor Aurangzeb.",
  },
  {
    title: "Red Fort Model",
    src: "https://sketchfab.com/models/2ad9ae0a1b524a37a2c3ab245b0e5423/embed",
    description:
      "The Red Fort in Delhi, India, is a historic fortification. It served as the main residence of the Mughal emperors for around 200 years. The fort is an example of Indo-Islamic Mughal architecture.",
  },
];

const Model3D = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold text-center  text-secondary">
        Virtual Tour of Historical Landmarks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {models.map((model, index) => (
          <div key={index} className="space-y-4">
            <div className="relative w-full h-96 bg-gray-100 shadow-xl rounded-lg">
              <iframe
                title={model.title}
                frameBorder="0"
                allowFullScreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-full rounded-lg"
                src={model.src}
              ></iframe>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-success">{model.title}</h2>
              <p className="text-gray-400">{model.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Model3D;
