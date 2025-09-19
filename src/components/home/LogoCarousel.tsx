
"use client";

import Image from 'next/image';

export function LogoCarousel() {
  const logos = Array(2).fill("/images/matblklogo.png");

  return (
    <div className="w-full bg-transparent relative flex items-center justify-center py-8">
      <div className="flex">
        {logos.map((src, index) => (
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
