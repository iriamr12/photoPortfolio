import React, { useEffect, useState } from 'react';
import { PiNavigationArrowFill } from 'react-icons/pi';
import { usePointer } from '../Context/PointerContext'; 

const Pointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isPointer2Visible } = usePointer(); 

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  // Render only if Pointer2 is not visible
  if (isPointer2Visible) return null;

  return (
    <PiNavigationArrowFill
      className="custom-pointer"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      size={18}
    />
  );
};

export default Pointer;