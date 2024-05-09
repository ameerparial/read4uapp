import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileImage from "../ProfileImage";
import noProfileImage from "../../images/profile-image.jpeg";

function AccountSettings() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [changes, setChanges] = useState({
    profile: false,
    username: false,
    password: false,
  });

  useEffect(
    function () {
      async function getData() {
        await axios
          .get("http://localhost:8080/dashboard")
          .then((response) => {
            const username = response?.data?.username;
            const email = response?.data?.email;
            const filename = response?.data?.filename;
            if (filename) {
              console.log("Profile Image Updated");
              console.log(filename);
              setProfileImage(`http://localhost:8080/${filename}`);
            }
            setFormData({ ...formData, username, email });
          })
          .catch((err) => {
            console.log("Error while getting profile data...");
            console.log(err);
          });
      }
      getData();
    },
    [profileImage]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setChanges({ ...changes, [name]: true });
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(changes);

    // Add your form submission logic here
    const { file, username, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert("Password does not Match.");
      return;
    }

    const form = new FormData();
    form.append("email", email);
    var toUpdate = false;
    if (changes?.username) {
      form.append("username", username);
      toUpdate = true;
    }
    if (changes?.password) {
      form.append("password", password);
      toUpdate = true;
    }
    if (changes?.profile) {
      form.append("file", file);
      toUpdate = true;
    }

    console.log("Update Fields");
    console.log(form);
    console.log(changes);

    if (!toUpdate) return;

    axios
      .post("http://localhost:8080/dashboard/profileUpdate", form)
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileSubmit = (file) => {
    setChanges({ ...changes, profile: true });
    setFormData({ ...formData, file });
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
        <div className="mb-0">
          <ProfileImage
            onFileSelect={handleFileSubmit}
            profile={profileImage ? profileImage : noProfileImage}
          />
        </div>

        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="inputField m-0 form-control"
            id="email"
            disabled={true}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-1">
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

        <div className="mb-1">
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
        <div className="mb-1">
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
