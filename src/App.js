import React from 'react';

import { Container } from 'react-bootstrap';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'

import ProductDetail from './pages/ProductDetail.js';

import Home from './pages/Home.js';

const App = () => {
  return (
    <Router>
        <Header />
        <main className='py-3'>
            <Container>
              <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/product/:id' element={<ProductDetail />} />
              </Routes>
            </Container>
        </main>
        <Footer />
    </Router>
  )
}

export default App;
