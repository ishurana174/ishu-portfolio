import { createContext, useContext, useEffect, useState } from "react";

const MouseContext = createContext();

export function MouseProvider({ children }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <MouseContext.Provider value={mouse}>
      {children}
    </MouseContext.Provider>
  );
}

export const useMouse = () => useContext(MouseContext);