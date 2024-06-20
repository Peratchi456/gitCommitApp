import React, { useState } from "react";
import NextArrow from '../assets/next.png';
import DownArrow from '../assets/down.png';
import "../App.css";

const AccordionItem = ({ title, content, isActive, onClick }) => (
  <div style={{ marginBottom: "2rem", border: "#E7EBF1" }}>
    <li className="accordion-item">
      <div className="accordion-header" onClick={onClick}>
        {isActive? <img src={DownArrow} className="accord" alt="Profile"/> : <img src={NextArrow} className="accord" alt="Profile"/>}<span>{title}</span>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </li>
  </div>
);

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
