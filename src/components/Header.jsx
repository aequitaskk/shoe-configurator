import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full fixed mx-auto justify-center mt-20 lg:mt-40"
    >
      <div className="flex flex-col px-10">
        <h1 className="font-extrabold text-6xl mx-auto uppercase bg-gradient-to-r from-pink-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
          Create your own shoe
        </h1>
        <p className="mx-auto font-medium text-xl text-slate-600">
          click the part you want to change the color
        </p>
      </div>
    </motion.div>
  );
};

export default Header;
