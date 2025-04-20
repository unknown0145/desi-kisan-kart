
import React, { useRef, useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

// Tailwind classes for fade+slide in/out. You can customize animation duration and distance here
const baseClass =
  "transition-transform transition-opacity duration-500 ease-out";
const enterClass =
  "opacity-100 translate-x-0";
const exitClass =
  "opacity-0 -translate-x-10 pointer-events-none";

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const nodeRef = useRef<HTMLDivElement | null>(null);
  // Transition state handling
  const [displayChildren, setDisplayChildren] = React.useState(children);
  const [animating, setAnimating] = React.useState(false);

  useEffect(() => {
    // When location changes, animate the old page out, then swap content
    setAnimating(true); // trigger exit
    const timeout = setTimeout(() => {
      setDisplayChildren(children);
      setAnimating(false);
    }, 250); // shorter exit delay (must match duration-500 if you use same for in/out)

    return () => clearTimeout(timeout);
  }, [location, children]);

  return (
    <div
      ref={nodeRef}
      className={`${baseClass} ${
        animating ? exitClass : enterClass
      } min-h-[60vh]`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
