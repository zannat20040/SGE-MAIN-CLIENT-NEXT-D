"use client";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Coming_Soon = () => {
  return (
    <div className="pb-20 min-h-screen flex flex-col items-center justify-center bg-[#EFF6FF] text-center px-5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl lg:text-6xl font-bold text-[#2563EB]"
      >
        {`We're`} Coming Soon
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-lg lg:text-2xl mt-4 text-[#2563EB]"
      >
        Exciting things are happening! Our new website is on its way.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex space-x-4 mt-8"
      >
        <a
          rel="nofollow noopener noreferrer"
          href="https://www.facebook.com/ShabujGlobaleducationuk/"
          className="text-[#2563EB] text-2xl hover:text-[#1e40af]"
        >
          <FaFacebookF />
        </a>
        <a
          rel="nofollow"
          href="https://x.com/shabujglobaluk"
          className="text-[#2563EB] text-2xl hover:text-[#1e40af]"
        >
          <FaTwitter />
        </a>
        <a
          rel="nofollow noopener noreferrer"
          href="https://www.instagram.com/shabujglobaleducation/"
          className="text-[#2563EB] text-2xl hover:text-[#1e40af]"
        >
          <FaInstagram />
        </a>
        <a
          rel="nofollow"
          href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEkbZ14xeAt8wAAAZEXbnaoJWt-ogVrPCWsB3Ufw3gb3wrzBSE3XcNHequ5lpil4I54Crsk0qaoWcyHvqLrTdX2geridADLkgc3_cGAuBn7zb4v-iR2dBdszRH3_wEnsRkelIE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fshabuj-global-education%2F"
          className="text-[#2563EB] text-2xl hover:text-[#1e40af]"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="mt-12 text-[#2563EB]"
      >
        <p className="text-xl">Stay tuned for updates!</p>
      </motion.div>
    </div>
  );
};

export default Coming_Soon;
