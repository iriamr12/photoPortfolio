import React, { useEffect, useState } from 'react';
import { SlFrame } from 'react-icons/sl';
import { usePointer } from '../Context/PointerContext'; // Import your context hook

const Pointer2 = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isPointer2Visible } = usePointer(); // Context for pointer visibility

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  // Render only if Pointer2 is visible
  if (!isPointer2Visible) return null;

  return (
    <SlFrame
      className="custom-pointer text-black"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
      size={18}
    />
  );
};

export default Pointer2;