import { useState } from "react";

export default function useToggle (initialValue = false) {
  const [on, setOn] = useState(initialValue);

  function toggle () {
    setOn(prev => !prev);
  }
  return [on, toggle];
}