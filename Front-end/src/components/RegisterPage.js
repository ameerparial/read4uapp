import { useState } from "react";
import ErrorComponent from "./ErrorPage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterComponent = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);

  const getData = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setRegisterData((obj) => ({ ...obj, [key]: value }));
  };

  const registerUser = async (event) => {
    event.preventDefault();
    console.log(registerData);
    if (registerData?.password.length < 8) {
      setErrors(["Password must contain at least 8 letters."]);
      return;
    }

    const response = await axios.post(
      "http://localhost:5500/login-me/register",
      registerData
    );

    console.log(response.data);
    if (response.data.status) {
      navigate("/login");
      return;
    }
    setErrors([response?.data?.msg]);

    //Handling Errors
    // 1-Email and Username must be unique
    // 2- Password must be greater than 8 letters.
  };

  return (
    <>
      <div className="header">
        <h1 id="header-title">Welcome to R4U APP</h1>
      </div>

      <div className="login-frame">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <div className="separator">
            <label className="labelField">Email:</label>
            <input
              type="email"
              className="inputField"
              placeholder="awais-std@gmail.com"
              name="email"
              value={registerData?.email}
              onChange={getData}
              required
            />
          </div>

          <div className="separator">
            <label className="labelField">Username:</label>
            <input
              type="text"
              className="inputField"
              name="username"
              value={registerData?.username}
              onChange={getData}
              required
            />
          </div>

          <div className="separator">
            <label className="labelField">Password:</label>
            <input
              type="password"
              name="password"
              value={registerData?.password}
              onChange={getData}
              className="inputField"
              required
            />
          </div>
          <div className="separator">
            {errors && <ErrorComponent errors={errors} />}
          </div>

          <div className="separator" style={{ padding: "0px" }}>
            <div className="d-flex">
              <input
                type="submit"
                value="Register"
                id="btn"
                className="btn"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterComponent;
