// packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

// components
import Header from "./components/Header";

// pages
import Badges from "./pages/Badges";
import Banners from "./pages/Banners";
import Testimonials from "./pages/Testimonials";

// styles
import "./assets/styles/main.css";
import "./assets/styles/badges.css";
import "./assets/styles/banners.css";
import "./assets/styles/testimonials.css";
import "./assets/styles/responsive.css";

// scripts
import useToggle from "./assets/hooks/useToggle";

// images

const ToggleContext = createContext();

function App() {
  const [on, toggle] = useToggle(false);
  return (
    <BrowserRouter>
      <ToggleContext.Provider value={{ on, toggle }}>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/badges" element={<Badges />} />
            <Route path="/banners" element={<Banners />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </ToggleContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { ToggleContext };
