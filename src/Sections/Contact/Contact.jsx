import React from "react";
import "./Contact.css";

const Contact = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="contact_container">
        <div className="title_container">
          <h2>Contact</h2>
        </div>
      </div>
    </section>
  );
};

export default Contact;
