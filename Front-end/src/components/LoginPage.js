import { useEffect, useState } from "react";
import ErrorComponent from "./ErrorPage";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "./LoadingPage";
import axios from "axios";

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    useremail: "",
    userpassword: "",
  });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      async function getData() {
        axios.defaults.withCredentials = true;
        await axios
          .get("http://localhost:5500/dashboard")
          .then((response) => {
            if (response?.data) navigate("/dashboard");
            else console.log("Session is not saved");
          })
          .catch((err) => {
            console.log("Error Occured while checking session....");
          });
      }
      getData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const setData = (event) => {
    const name = event?.target.name;
    const value = event?.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const checkCredentials = async (e) => {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    //Checking the coming data
    console.log("Login Event");

    if (loginInfo.userpassword.length < 8) {
      setErrors(["Password must contain at least 8 digits."]);
      setIsLoading(false);
      return;
    }
    axios.defaults.withCredentials = true;

    await axios
      .post("http://localhost:5500/login-me", loginInfo)
      .then((response) => {
        if (response?.data) navigate("/dashboard");
        else setErrors(["Authentication Failed"]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("Error Occured while logging....");
        setErrors([err.message]);
        setIsLoading(false);
      });
  };
  return (
    <>
      <LoadingComponent isLoading={isLoading} />
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
