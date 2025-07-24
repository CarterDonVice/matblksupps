
"use client";

import Image from 'next/image';

export function LogoCarousel() {
  // We render the list twice to create a seamless loop.
  const logos = Array(15).fill("/images/matblklogo.png");

  return (
    <div className="w-full h-[277px] bg-transparent relative flex items-center">
       <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10"></div>
       <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10"></div>
      <div className="flex animate-scroll">
        {[...logos, ...logos].map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-6" style={{ width: '277px' }}>
            <Image
              src={src}
              alt="MAT BLK Logo"
              width={277}
              height={277}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
