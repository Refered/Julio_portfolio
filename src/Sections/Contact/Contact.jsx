import React from "react";
import "./Contact.css";

import ContactChannelList from "../../Components/Contact_Channel/ContactChannelList.jsx";

const Contact = ({ sectionState }) => {
  return (
    <section className={`${sectionState}`}>
      <div className="contact_container">
        <div className="title_container">
          <h2>Contact</h2>
        </div>
        <div className="content_container">
          <div className="side_a">
            <h3>Have You Any Questions ?</h3>
            <p>Contact me</p>
          </div>
          <div className="side_b">
            <ContactChannelList />
          </div>
          <div className="side_c">
            <p>
              Powered by{" "}
              <a href="https://paulfolio.netlify.app/" target="blank">
                Alphainvicta
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
