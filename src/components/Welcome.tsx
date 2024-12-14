import Image from "next/image";
import React from "react";
import ActionButton from "./ActionButton";
import Link from "next/link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

interface Props {
  setSelectedPage: (value: string) => void;
}

const WelcomeComponent = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="h-full gap-16 bg-gray-20 py-10 md:h-5/6 md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        // color change when scroll to different part
        onViewportEnter={() => setSelectedPage("home")}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-24 before:-top-24 before:z-[-1] md:before:content-evolvetext">
                <Image
                  src="/assets/HomePageText.png"
                  alt="home-page-text"
                  width={320}
                  height={320}
                />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <Link
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              href={"#contactus"}
              onClick={() => setSelectedPage("contactus")}
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
          <Image
            src="/assets/HomePageGraphic.png"
            alt="home-page-graphic"
            width={400}
            height={400}
          />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-center gap-16">
              <img src="/assets/SponsorRedBull.png" alt="redbull-sponsor" />
              <img src="/assets/SponsorForbes.png" alt="forbes-sponsor" />
              <img src="/assets/SponsorFortune.png" alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WelcomeComponent;
