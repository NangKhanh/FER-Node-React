import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import AboutUs from './component/AboutUs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Content />
        <Routes>
          <Route path="/about" element={<AboutUs/>}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  );
}
export default App;
