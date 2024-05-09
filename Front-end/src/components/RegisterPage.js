import { useState } from "react";
import ErrorComponent from "./ErrorPage";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import LoadingComponent from "./LoadingPage";

const RegisterComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState([]);

  const getData = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setRegisterData((obj) => ({ ...obj, [key]: value }));
  };

  const registerUser = async (event) => {
    event.preventDefault();
    setErrors([]);
    setIsLoading(true);

    if (registerData?.password !== registerData?.confirmPassword) {
      setErrors(["Password does not Match."]);
      setIsLoading(false);
      return;
    }
    console.log(registerData);
    if (registerData?.password.length < 8) {
      setErrors(["Password must contain at least 8 letters."]);
      setIsLoading(false);
      return;
    }

    await axios
      .post("http://localhost:8080/login-me/register", registerData)
      .then((response) => {
        if (response.data.status) {
          navigate("/login");
          return;
        }
        setErrors([response?.data?.msg]);
      })
      .catch((err) => {
        console.log("Error occured while registration...");
        setErrors([err.message]);
      });
    setIsLoading(false);

    //Handling Errors
    // 1-Email and Username must be unique
    // 2- Password must be greater than 8 letters.
  };

  return (
    <>
      <LoadingComponent isLoading={isLoading} />
      <div className="header">
        <h1 id="header-title">Welcome to R4U APP</h1>
      </div>

      <div className="login-frame">
        <h1>Register</h1>
        <div style={{ marginLeft: "15px" }}>
          <NavLink to={"/login"}>
            <i className="fas fa-arrow-left" style={{ color: "#df622c" }}></i>
          </NavLink>
        </div>

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
            <label className="labelField">Confirmed Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={registerData?.confirmPassword}
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
