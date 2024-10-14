import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <header><div className="header-text">Welcome to React Router</div></header>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default App;