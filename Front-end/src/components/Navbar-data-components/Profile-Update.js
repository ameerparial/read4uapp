import axios from "axios";
import React, { useEffect, useState } from "react";

function AccountSettings() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(function () {
    async function getData() {
      await axios
        .get("http://localhost:5500/dashboard")
        .then((response) => {
          const username = response?.data?.username;
          const email = response?.data?.email;
          setFormData({ ...formData, username, email });
        })
        .catch((err) => {
          console.log("Error while getting profile data...");
          console.log(err);
        });
    }
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // You can send this data to your backend API for further processing
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        boxShadow: "2px 2px 10px black",
        borderRadius: "10px",
        margin: "0px auto",
        backgroundColor: "white",
        opacity: "90%",
        padding: "20px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="inputField m-0 form-control"
            id="email"
            disabled="true"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="inputField m-0 form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="inputField m-0 form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="inputField m-0 form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn w-100">
          Update
        </button>
      </form>
    </div>
  );
}

export default AccountSettings;
