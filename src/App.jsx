// packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import Badges from "./pages/Badges";
import Banners from "./pages/Banners";
import Cards from "./pages/Cards";
import Testimonials from "./pages/Testimonials";
import Tooltip from "./pages/Tooltip";
import Toasts from "./pages/Toasts";

// styles
import "./assets/styles/main.css";
import "./assets/styles/badges.css";
import "./assets/styles/banners.css";
import "./assets/styles/cards-toasts.css";
import "./assets/styles/testimonials.css";
import "./assets/styles/tooltip.css";
import "./assets/styles/responsive.css";

// scripts
import useToggle from "./assets/hooks/useToggle";

const ToggleContext = createContext();

function App() {
  const [on, toggle] = useToggle(false);
  return (
    <BrowserRouter>
      <ToggleContext.Provider value={{ on, toggle }}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/badges" element={<Badges />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/tooltips" element={<Tooltip />} />
            <Route path="/toasts" element={<Toasts />} />
          </Routes>
        </div>
        <Footer />
      </ToggleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { ToggleContext };
