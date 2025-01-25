import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="h-[160px] bg-footer-bg px-[120px] flex justify-between items-center">
      <p className="text-[13px] text-text-secondary">
        © 2021 MoovieTime. All rights reserved.
      </p>
      <Image src="/logo-gray.svg" alt="logo-gray" width={88} height={24} />
      <p className="text-[13px] text-text-secondary">
        Made with Next.JS + TailwindCSS
      </p>
    </div>
  );
};

export default Footer;
