"use client";
import React, { useState } from "react";

const CallBackForm = () => {
  const [contactFormData, setcontactFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setcontactFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactFormData),
    };
    try {
      const response = await fetch("/api/sendEmail", reqOptions);
      const resJson = await response.json();
      console.log("Response from server", resJson);
    } catch (error) {
      console.log("Some errored Occured", error);
    }
  };

  return (
    <div className="contactForm w-full bg-green-900 h-auto ">
      <div className="contact_heading text-2xl text-center mt-4 font-semibold text-white p-4">
        Request a Callback
      </div>
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="form flex sm:flex-row flex-col justify-evenly items-center "
        >
          <input
            type="text"
            name="name"
            id="name"
            minLength={2}
            value={contactFormData.name}
            onChange={handleOnChange}
            required
            placeholder="Name"
            className="p-4 m-4 bg-slate-800 rounded-md text-white"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={contactFormData.email}
            onChange={handleOnChange}
            placeholder="Email"
            title="Please enter a valid email address."
            required
            className="p-4 m-4 bg-slate-800 rounded-md text-white"
          />
          <input
            type="number"
            name="phoneNumber"
            id="phoneNumber"
            maxLength={10}
            required
            title="Please enter a valid Phone number"
            value={contactFormData.phoneNumber}
            onChange={handleOnChange}
            placeholder="Phone Number"
            className="p-4 m-4 bg-slate-800 rounded-md text-white"
          />
          <button
            type="submit"
            className="bg-green-700 mb-4 pl-24 pr-24 pt-5 pb-5 rounded-md"
          >
            Send Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallBackForm;
