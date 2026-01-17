import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { API } from "./api";
import About from "./about";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "20px",
              padding: "20px",
              backgroundColor: "#f0f0f0",
            }}
          >
            <li>
              <Link to="/">API</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<API />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
