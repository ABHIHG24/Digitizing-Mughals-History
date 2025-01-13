import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import eventData from "../data.json";

function Timeline() {
  const [events, setEvents] = useState([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    setEvents(eventData);
  }, []);

  useEffect(() => {
    // Set up Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Subtle Particle System
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 20;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x888888,
      size: 0.05,
      transparent: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.001; // Subtle rotation
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-base-100 py-16 px-8">
      {/* Three.js Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-center text-primary mb-14">
          Mughal Empire Timeline
        </h1>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-px h-full"></div>

          <div className="space-y-16">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center`}
              >
                {/* Event Marker */}
                <div className="absolute w-6 h-6 bg-primary rounded-full border-4 border-white left-1/2 transform -translate-x-1/2 z-10"></div>

                {/* Event Card */}
                <div
                  className={`bg-base-200 shadow-md rounded-lg w-full max-w-xl p-6 transition-all hover:shadow-lg ${
                    index % 2 === 0 ? "ml-12" : "mr-12"
                  }`}
                >
                  <figure className="mb-4">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </figure>
                  <h2 className="text-xl font-semibold text-success mb-2">
                    {event.title}
                  </h2>
                  <p className="text-gray-500 mb-4">{event.year}</p>
                  <p className="text-sm text-gray-600">
                    {event.description.slice(0, 120)}...
                  </p>
                  <Link
                    to={`/${event.id}`}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
