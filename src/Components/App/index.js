import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';

import Landing from '../../Pages/Landing';
import Home from '../../Pages/Home';
import AboutUs from '../../Pages/AboutUs'

import * as ROUTES from '../../Constraints/routes';

const App = () =>(
    <Router>
        <Navigation />
        <Routes>
            <Route path={ROUTES.LANDING} element={<Landing/>} />
            <Route path={ROUTES.HOME} element={<Home/>} />
            <Route path={ROUTES.ABOUTUS} element={<AboutUs/>} />
        </Routes>
        <Footer />
    </Router>
);

export default App;