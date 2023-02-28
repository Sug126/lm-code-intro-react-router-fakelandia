import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour';
import React from 'react';

const Router: React.FC =() => (
  <>
    <Routes>
        <Route path="/" index element={<Home/>} />
        <Route path="/confession" element={<Confession/>} />
        <Route path="/misdemeanour" element={<Misdemeanour/>} />
    </Routes>
    </>
)


export default Router;
