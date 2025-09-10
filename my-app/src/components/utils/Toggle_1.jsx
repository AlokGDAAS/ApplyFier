import { useState } from "react";

export default function Toggle_1() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition mx-4 
        ${enabled ? "bg-blue-600" : "bg-gray-300 border border-gray-400"}`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition 
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}

