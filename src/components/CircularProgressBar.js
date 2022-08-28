import React, { useEffect, useState, useRef, useMemo } from "react";

const CircularProgressBar = (props) => {
  const [number, setNumber] = useState(0);
  const targetRef = useRef(null);
  let counter = 0;
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setTimeout(() => {
          setInterval(() => {
            if (counter === props.value) {
              clearInterval();
            } else {
              counter += 1;
              setNumber(counter);
            }
          }, 20);
        }, 400 * props.number);
      }
    }, options);
    const currentTarget = targetRef.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [targetRef, options]);
  return (
    <div ref={targetRef} className="circular-progress-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#405d6c" />
          </linearGradient>
        </defs>
        <circle
          style={{
            stroke: "url(#GradientColor)",
            strokeDashoffset: `calc(439 - 439 * ${number} / 100)`,
          }}
          cx="80"
          cy="80"
          r="70"
          strokeLinecap="round"
        ></circle>
      </svg>
      <div className="number">{number}/100</div>
    </div>
  );
};

export default CircularProgressBar;
