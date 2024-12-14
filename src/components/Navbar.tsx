import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = () => {
  return (
    <nav>
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-6">
        <div className="mx-auto flex w-5/6 items-center justify-center">
          <div className="flex w-full items-center justify-between gap-16">
            {/* LOGO */}
            <Image src="/assets/Logo.png" alt="logo" width={100} height={100} />

            {/* NAVITEM */}
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center justify-between gap-8 text-sm">
                <Link href={"#home"}>Home</Link>
                <Link href={"#benifits"}>Benifits</Link>
                <Link href={"#ourclasses"}>Our Classes</Link>
                <Link href={"#contactus"}>Contact Us</Link>
              </div>
              <div className="flex items-center justify-between gap-8">
                <p>Sign In</p>
                <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
