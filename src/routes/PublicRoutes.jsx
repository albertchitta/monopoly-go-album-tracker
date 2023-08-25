// import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';

export default function PublicRoutes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  )
}
