// packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";

// pages
import Badges from "./pages/Badges";

// styles
import "./assets/styles/main.css";
import "./assets/styles/badges.css";
import "./assets/styles/responsive.css";

// scripts
// images

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/badges" element={<Badges />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
