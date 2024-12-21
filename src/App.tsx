import { useState } from "react";
import "./App.css";
import useMousePosition from "./hooks/useMousePosition";
import { motion } from "framer-motion";
function App() {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 100

  return (
    <div className="container">
      <div className="body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores non
          sequi optio nulla? Atque laudantium pariatur ex deserunt, voluptates
          minima omnis saepe dolore tenetur esse nulla quo? Non, magni expedita!
        </p>
      </div>
      <motion.div
        className="mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskSize: `${size}px`
        }}

        transition={{
          type: 'tween',
          ease: "backOut"
        }}
      >
        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores non
          sequi optio nulla? Atque laudantium pariatur ex deserunt, voluptates
          minima omnis saepe dolore tenetur esse nulla quo? Non, magni expedita!
        </p>
      </motion.div>
    </div>
  );
}

export default App;
