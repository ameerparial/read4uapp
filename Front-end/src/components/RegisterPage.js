const RegisterComponent = () => {
  return (
    <>
      <div className="header">
        <h1 id="header-title">Welcome to R4U APP</h1>
      </div>

      <div className="login-frame">
        <h1>Register</h1>
        <form method="post" action="http://localhost:5500/login-me/register">
          <div className="separator">
            <label className="labelField">Email:</label>
            <input
              type="email"
              className="inputField"
              placeholder="awais-std@gmail.com"
              name="email"
              required
            />
          </div>

          <div className="separator">
            <label className="labelField">Username:</label>
            <input
              type="text"
              className="inputField"
              name="username"
              required
            />
          </div>

          <div className="separator">
            <label className="labelField">Password:</label>
            <input
              type="password"
              name="password"
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
