import React from "react";
import './ContactSection.css'

const ContactSection = () => {
  return (
    <main className="d-flex justify-content-center row contactSection px-3 pt-3">
      <div className="col-lg-5 col-md-8 col-sm-10 py-5 contact-div m-4">
        <h4 className="px-3 py-1">STAY IN CONTACT</h4>
        <div className="form-div">
          <div className="p-3 m-1">
            <input
              type="text"
              className="px-3 py-2 w-100"
              placeholder="Name"
              required
            />
          </div>
          <div className="p-3 m-1">
            <input
              type="email"
              className="px-3 py-2 w-100"
              placeholder="Email"
              required
            />
          </div>
          <div className="p-3 m-1">
            <input
              type="text"
              className="px-3 py-2 w-100"
              placeholder="Comment"
              required
            />
          </div>
          <div className="p-3 m-1">
            <button
              type="submit"
              className="border-0 w-100 py-2 mx-auto fw-bold"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
