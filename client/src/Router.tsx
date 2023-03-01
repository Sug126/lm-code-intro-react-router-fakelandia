import * as React from "react"
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Confession from './Confession';
import Misdemeanour from './Misdemeanour';
import Layout from './Layout';
import NotFound from './NotFound';

const Router: React.FC =() => (

    <Routes>
      <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
    <Route path="/Confession" element={<Confession />} />
    <Route path="/Misdemeanour" element={<Misdemeanour/>} />
    </Routes>
  
)


export default Router
