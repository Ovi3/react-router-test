
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Home组件
function Home() {
  return <h2>Home</h2>;
}

// About组件
function About() {
  return <h2>About</h2>;
}

// App组件
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;