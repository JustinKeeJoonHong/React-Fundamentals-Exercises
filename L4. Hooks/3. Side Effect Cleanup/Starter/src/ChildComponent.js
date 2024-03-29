import React, { useState, useEffect } from "react";

function ChildComponent() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) {
      setTimeout(() => setColor("green"), 3000);
    }
    return () => {
      unmounted = true;
    };
  }, []);

  return <p style={{ color }}>{color}</p>;
}
export default ChildComponent;
