import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
