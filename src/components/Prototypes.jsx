// components/Prototypes.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css'// Make sure you've installed react-router-dom

const prototypesList = [
  "PROTOTYPE 1",
  "PROTOTYPE 2",
  "PROTOTYPE 3",
  "PROTOTYPE 4",
  "PROTOTYPE 5"
];

const Prototypes = () => {
  return (
    <div className="prototype-landing">
      <ul>
        {prototypesList.map((title, index) => (
          <li key={index}>
            <Link to={`/prototype/${title.toLowerCase().split(' ').join('-')}`}>
              {index + 1}. {title}
            </Link>
          </li>
        ))}
      </ul>
      {}
    </div>
  );
};

export default Prototypes;
