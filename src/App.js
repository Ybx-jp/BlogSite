import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/home.js'
import Biography from './components/biography/biography.js'
import Dreams from './components/dreams/dreams.js'
import Portfolio from './components/portfolio/portfolio.js'
import Blogs from './components/blogs/blogs.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/biography" element={<Biography />} />
          <Route exact path="/dreams" element={<Dreams />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
          <Route exact path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
