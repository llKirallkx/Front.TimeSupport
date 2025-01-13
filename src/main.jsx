import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import {  HashRouter, Routes, Route } from "react-router-dom";
import Crc16Create from './Crc16Create.jsx';
import AfdCheck from './AfdCheck.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/crc16create" element={<Crc16Create />} />
        <Route path="/afdcheck" element={<AfdCheck />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);