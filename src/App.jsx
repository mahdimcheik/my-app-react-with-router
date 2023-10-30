import { Link, Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/articles/972"><span>path avec id</span></Link>
        <Link to="/articles/971/mahdi"><span>path avec id et name</span></Link>
      </nav>
      <main><Outlet /></main>
      <footer>footer </footer>
    </>
  );
}

export default App;