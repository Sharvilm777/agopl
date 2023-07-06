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
    <div className="contactForm w-full bg-green-900 h-auto m-2">
      <div className="contact_heading text-2xl text-center mt-4 font-semibold">
        Request a Callback
      </div>
      <div className="form flex sm:flex-row flex-col justify-evenly items-center ">
        <input
          type="text"
          name="name"
          id="name"
          value={contactFormData.name}
          onChange={handleOnChange}
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
          className="p-4 m-4 bg-slate-800 rounded-md text-white"
        />
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          value={contactFormData.phoneNumber}
          onChange={handleOnChange}
          placeholder="Phone Number"
          className="p-4 m-4 bg-slate-800 rounded-md text-white"
        />
        <button
          onClick={handleSubmit}
          className="bg-green-700 mb-4 pl-24 pr-24 pt-5 pb-5 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CallBackForm;
