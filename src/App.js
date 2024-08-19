// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import { PointerProvider, usePointer } from './Context/PointerContext';
import Pointer from './Common/Pointer';
import Pointer2 from './Common/Pointer';
import './App.css';

function App() {
  return (
    <PointerProvider>
      <div className="cursor-none">
        <AppWithPointer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </PointerProvider>
  );
}

const AppWithPointer = () => {
  const { isPointer2Visible } = usePointer(); // Ensure this hook is imported correctly

  return (
    <>
      {!isPointer2Visible ? <Pointer /> : <Pointer2 />}
    </>
  );
};

export default App;
