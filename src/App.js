import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import HomePage from './components/Homepage';
import Chicago from './components/Chicago';
import {
    BrowserRouter as Router,
    Route, Routes
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Chicago />} />
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;