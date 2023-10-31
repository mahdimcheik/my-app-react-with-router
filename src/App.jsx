import { Link, Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app min-vw-100 min-vh-100">
      <Navbar />
      <main className="container"><Outlet /></main>
      <Footer />
    </div>
  );
}

export default App;