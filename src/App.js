import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginPage";
import RegisterComponent from "./components/RegisterPage";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={LoginComponent} path="/login" />
          <Route Component={RegisterComponent} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
