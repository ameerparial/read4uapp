import { useState } from "react";
import ErrorComponent from "./ErrorPage";

const LoginComponent = () => {
  const [loginInfo, setLoginInfo] = useState({
    useremail: "",
    userpassword: "",
  });
  const [errors, setErrors] = useState([]);

  const setData = (event) => {
    const name = event?.target.name;
    const value = event?.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const checkCredentials = (e) => {
    e.preventDefault();
    //Checking the coming data
    const errors = [];
    if (loginInfo.userpassword.length < 8) {
      errors.push("Password must contain at least 8 digits.");
    }
    // if (errors.length === 0) {
    //   const requestOptions = {
    //     method: "GET",
    //     headers: { "Content-Type": "" },
    //     body: JSON.stringify(loginInfo),
    //   };

    //   fetch("http://localhost:5500/login-me")
    //     .then((response) => {
    //       response.json();
    //     })
    //     .catch();
    // }
    setErrors(errors);
  };
  return (
    <>
      <div className="header">
        <h1 id="header-title">Welcome to R4U APP</h1>
      </div>

      <div className="login-frame">
        <h1>Sign In</h1>
        <form onSubmit={checkCredentials}>
          <div className="separator">
            <label className="labelField">Email:</label>
            <input
              type="email"
              className="inputField"
              value={loginInfo?.useremail}
              name="useremail"
              onChange={setData}
              required
            />
          </div>

          <div className="separator">
            <label className="labelField">Password:</label>
            <input
              type="password"
              className="inputField"
              value={loginInfo?.userpassword}
              name="userpassword"
              onChange={setData}
              required
            />
          </div>

          <div className="forget-message">
            <a href="/">Forgot Password?</a>
          </div>
          <div className="separator">
            {errors && <ErrorComponent errors={errors} />}
          </div>

          <div className="separator">
            <div className="d-flex">
              <a type="button" className="btn" href="/register">
                Register
              </a>
              <input
                type="submit"
                value="Sign in"
                className="btn"
                style={{ width: "100px" }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
