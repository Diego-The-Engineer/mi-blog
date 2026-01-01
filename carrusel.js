import React from 'react';
import './Carrusel.css'; 

const Carrusel = () => {
  const items = [
    "🔥 React",
    "🚀 Javascript",
    "🎨 CSS",
    "💻 HTML5",
    "⚡ Vite",
    "✨ Next.js"
  ];
  return (
    <div className="carrusel-contenedor">
      <div className="carrusel-track">
        {items.map((item, index) => (
          <div className="carrusel-item" key={`a-${index}`}>
            {item}
          </div>
        ))}

        {items.map((item, index) => (
          <div className="carrusel-item" key={`b-${index}`}>
            {item}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Carrusel;