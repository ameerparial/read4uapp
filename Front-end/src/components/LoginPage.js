import { useState } from "react";

const LoginComponent = () => {
  const [loginInfo, setLoginInfo] = useState({
    useremail: "",
    userpassword: "",
  });

  const setData = (event) => {
    const name = event?.target.name;
    const value = event?.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const checkCredentials = () => {
    console.log(loginInfo);
  };
  return (
    <>
      <div className="header">
        <h1 id="header-title">Welcome to R4U APP</h1>
      </div>

      <div className="login-frame">
        <h1>Sign In</h1>
        <form onSubmit={checkCredentials} method="post">
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
