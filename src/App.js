import React from 'react';
import {BrowserRouter as Router,
        Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import {Home} from './components/Home';
import {Error} from './components/Error';
import { Mens } from './components/Mens';
import { Womens } from './components/Womens';
import { Kids } from './components/Kids';
import { Product } from './components/Product';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Mens" element={<Mens />}/>
          <Route path="Womens" element={<Womens />}/>
          <Route path="Kids" element={<Kids />}/>
          <Route path="/:id" element={<Product />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
