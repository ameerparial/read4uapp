import { useState } from "react";

const RegisterComponent = () => {
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const getData = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setRegisterData((obj) => ({ ...obj, [key]: value }));
  };

  const registerUser = (event) => {
    event.preventDefault();
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
