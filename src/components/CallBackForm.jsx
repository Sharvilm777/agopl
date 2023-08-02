"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.info("Sending request..");
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
      toast.success("Request Submitted successfully");
      toast.info("You will get the call soon...");
      setcontactFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.log("Some errored Occured", error);
      toast.error("Sorry some error occurred ");
      toast.info("Message not sent!!! ");
      setcontactFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="contactForm w-full bg-green-900 h-auto ">
        <div className="contact_heading text-2xl text-center mt-4 font-semibold text-white p-4">
          Request a Callback
        </div>
        <div>
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="form flex lg:flex-row flex-col justify-evenly items-center "
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
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              maxLength="10"
              minLength="10"
              pattern="^[0-9]{10}$"
              title="Please enter a valid phone number"
              required
              value={contactFormData.phoneNumber}
              onChange={handleOnChange}
              placeholder="Phone Number"
              className="p-4 m-4 bg-slate-800 rounded-md text-white"
            />
            <button
              type="submit"
              className="bg-green-700 m-4 pl-24 pr-24 pt-4 pb-4  rounded-md"
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CallBackForm;
