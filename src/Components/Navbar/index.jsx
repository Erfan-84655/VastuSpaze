import React, { useState } from "react";

export default function Navbar() {
  const Navbar = () => {
    const [isopen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isopen);
    };
  };
  return (
    <nav className="border-b-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-8">
        <div className="pl-2">
          <a href="#">
          {/* compilite */}
          </a>

        </div>

      </div>
    </nav>
  );
}
