import Home from './Routes/Home';
import Changingstate from './components/common/USESTATE';
import {BrowserRouter, Link, Route, Routes, Router} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ali" element={<Changingstate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
