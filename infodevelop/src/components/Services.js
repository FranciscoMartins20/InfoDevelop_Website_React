import React from 'react';
import '../css/Services.css'

const Service = ({ title, description, icon }) => {
  return (
    <div className="service">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
    </div>
  );
}

export default Service;
