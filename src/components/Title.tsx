import React, { useEffect, useState } from "react";

function Title() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after a delay (you can adjust the delay)
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-slate-200 py-40">
      <h1
        className={`text-8xl font-bold text-center ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-1rem]"
        } transition-all duration-1000 ease-in-out`}
      >
        Meet Axon
      </h1>
    </div>
  );
}

export default Title;
