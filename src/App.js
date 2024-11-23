import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Page/HomePage";
import Login from "./Page/Login";
import "./styles/main.css";

const App = () => {
    
    const location = useLocation();
    
    
    const isLoginPage = location.pathname === "/login";

    return (
        <div>
            
            {!isLoginPage && <Header />}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            
            {!isLoginPage && <Footer />}
        </div>
    );
};

export default App;
