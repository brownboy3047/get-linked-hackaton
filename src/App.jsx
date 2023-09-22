import { BrowserRouter, Routes, Route } from "react-router-dom";

//layout
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

//pages
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

//style
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
