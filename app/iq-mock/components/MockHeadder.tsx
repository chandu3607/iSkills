"use client";

import Image from "next/image";

export default function MockHedder() {
  return (
    <header className="w-full   px-4 md:px-10 py-3 flex items-center justify-between">
      
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2">
        {/* Logo Image */}
        <img
          src="https://shikshacoach.com/wp-content/uploads/2026/02/iquanta-logo-1024x294.png" // put your logo inside /public/logo.png
          alt="iQuanta Logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

      {/* RIGHT: User Info */}
      <div className="flex items-center gap-3">
             {/* Avatar */}
        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
          <img
            src="https://s3-ap-south-1.amazonaws.com/iquantamedia/media/profile_pic/profile_pic/giphy.gif" // put image in public/user.jpg
            alt="User"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        
        {/* User Details */}
        <div className=" leading-tight">
          <p className="text-sm font-medium text-gray-800">
            Deepanshu Omer
          </p>
          <p className="text-xs text-gray-600">
            UID: 58675
          </p>
        </div>

   
      </div>
    </header>
  );
}