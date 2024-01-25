import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main'
import Error from './pages/Error'
import Shop from './pages/Shop'
import Footer from './components/Footer';

function App() {
  return (
    <div className="hero-app">
      <Router>
        <Header />
        <Routes>
          <Route  path="/Heroes-of-Craet" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
