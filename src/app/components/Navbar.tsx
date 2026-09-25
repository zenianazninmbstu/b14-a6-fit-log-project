import React from 'react';

import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="bg-black mx-8 border-b border-gray-800">

<div className="flex items-center justify-between py-2 ml-2">
            {/* logo */}

<div className="flex items-center gap-2 py-2 ml-2">
  <Image
    src="/logo.png"
    alt="Fitlog"
    width={25}
    height={12}
  />

  <span className="text-sm font-bold text-white">Fitlog</span>
</div>


{/* Middle link */}

<div className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-white">
    <span>Workout</span>
    <span>My Plan</span>
</div>
</div>
          </nav>
         
    );
     
};

export default Navbar;