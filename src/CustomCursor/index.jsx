import React, { useContext } from "react";
import "./style.scss";
// import CustomCursorContext from "./context/CustomCursorContext";

// TODO: Hide if cursor not moved
const CustomCursor = () => {
  // const { type } = useContext(CustomCursorContext);
  const secondaryCursor = React.useRef(null);
  const positionRef = React.useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  React.useEffect(() => {
    // Start from center
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cursorWidth = secondaryCursor.current?.clientWidth || 20;
    const cursorHeight = secondaryCursor.current?.clientHeight || 20;

    const initX = centerX - cursorWidth / 2;
    const initY = centerY - cursorHeight / 2;

    positionRef.current.mouseX = initX;
    positionRef.current.mouseY = initY;
    positionRef.current.destinationX = initX;
    positionRef.current.destinationY = initY;

    // Listen for mouse move
    const handleMouseMove = (event) => {
      const mouseX = event.clientX - cursorWidth / 2;
      const mouseY = event.clientY - cursorHeight / 2;

      positionRef.current.mouseX = mouseX;
      positionRef.current.mouseY = mouseY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }
      if (secondaryCursor && secondaryCursor.current)
        secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
    };
    followMouse();
  }, []);
  return (
    <div className={`cursor-wrapper default`}>
      <div className="secondary-cursor" ref={secondaryCursor}></div>
    </div>
  );
};

export default CustomCursor;
