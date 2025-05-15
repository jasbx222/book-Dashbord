'use client';

import Image from "next/image";
import React from "react";
import img from "../../../../public/img/wellcome.png";
import boy from "../../../../public/img/boy.png";

const Wellcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#925FE2] rounded-2xl w-full md:w-[80%] h-fit p-6 gap-4 md:relative md:right-24">
      {/* Left Content */}
      <div className="flex flex-col justify-center md:pl-12 space-y-4">
        <p className="text-white/70 text-sm">4 سبتمبر، 2023</p>
        <h1 className="text-white text-3xl font-bold">مرحبا بعودتك ADMIN</h1>
        <p className="text-white/80 text-base">نتمنى لك يوماً مليئاً بالإنتاجية والنجاح.</p>
      </div>

      {/* Right Images */}
      <div className="relative flex justify-center items-center">
        {/* الخلفية */}
        <Image
          src={img}
          alt="Welcome background"
          width={300}
          height={300}
          className="z-10 relative -right-12 hidden md:block"
        />
        {/* الصبي */}
        <Image
          src={boy}
          alt="Boy image"
          width={160}
          height={160}
          className="z-20"
        />
      </div>
    </div>
  );
};

export default Wellcome;
