import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import DashboardContent from "./components/DashboardContent";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PracticeMCQs from "./components/PracticeMCQs";
import ShowMCQs from "./components/ShowMCQs";
import ResultPage from "./pages/ResultPage";
import Settings from "./components/Settings";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route
            path="/"
            element={
                <DashboardLayout />
            }
          >
            <Route index element={<DashboardContent />}></Route>
            <Route path="/practice" element={<PracticeMCQs />}></Route>
            <Route path="/show" element={<ShowMCQs />}></Route>
            <Route path="/results" element={<ResultPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
            <Route path="/show" element={<ShowMCQs />}></Route>
          </Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/register" element={<RegisterForm />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
