import logo from './logo.svg';
import './App.css';
import Index from './pages/index';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Page4 from './pages/page4';
import Page5 from './pages/page5';
import Page6 from './pages/page6';
import Page7 from './pages/page7';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/page5' element={<Page5 />} />
          <Route path='/page6' element={<Page6 />} />
          <Route path='/page7' element={<Page7 />} />
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
