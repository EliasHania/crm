import React from "react";

const Map = ({ className = "" }) => {
  return (
    <div className={`w-full h-[450px] ${className}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25959.57152297116!2d-5.3730896387930915!3d35.5797137651789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b43a916acf3c9%3A0x4ac41f8c97f215b9!2sCroissant%20Rouge%20Marocain!5e0!3m2!1ses!2ses!4v1726856434393!5m2!1ses!2ses"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
