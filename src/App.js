import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginPage";
import RegisterComponent from "./components/RegisterPage";
import DashboardComponent from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={LoginComponent} path="/login" />
          <Route Component={RegisterComponent} path="/register" />
          <Route path="dashboard" element={<DashboardComponent />}>
            <Route path=":route" element={<span>I can container</span>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
