"use client";
import { motion } from "framer-motion";
import React from "react";
import HText from "./HText";
import { useForm } from "react-hook-form";

interface Props {
  setSelectedPage: (value: string) => void;
}

const ContactUsComponent = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const handleOnSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => {
          setSelectedPage("contactus");
        }}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleOnSumbit}
              action="https://formsubmit.co/cf4c51373e280edb9da5f46a4558b60c"
              method="POST"
            >
              <input
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name?.type === "required" &&
                    "This field is required."}
                  {errors.name?.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email?.type === "required" &&
                    "This field is required."}
                  {errors.email?.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className="mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message?.type === "required" &&
                    "This field is required."}
                  {errors.message?.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                src="assets/ContactUsPageGraphic.png"
                alt="contact-us-page-graphic"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUsComponent;
