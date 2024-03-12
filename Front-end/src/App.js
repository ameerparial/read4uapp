import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginPage";
import RegisterComponent from "./components/RegisterPage";
import DashboardComponent from "./components/Dashboard";
import Container from "./components/Data-Container";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route Component={LoginComponent} path="/login" />
          <Route Component={RegisterComponent} path="/register" />
          <Route path="dashboard" element={<DashboardComponent />}>
            <Route path=":route" element={<Container />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
