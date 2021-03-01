import React from 'react';
import {BrowserRouter as Router,
        Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import {Error} from './components/Error';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
