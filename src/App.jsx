// packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
// pages
import Header from "./components/Header";
// styles
import "./assets/styles/responsive.css";
import "./assets/styles/main.css";

// scripts
// images

function App() {
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
