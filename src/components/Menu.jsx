import React, { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ canvasRef }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDownload = () => {
    const canvas = canvasRef.current;

    if (canvas) {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "canvas-image.png";
      link.click();
    }
  };

  return (
    <div className="z-10 fixed bottom-10 left-[35%] lg:left-[45%]">
      <div className="flex text-4xl space-x-6 border-2 py-2 px-6 bg-white/50 items-center cursor-pointer">
        <IoSparklesSharp
          className="hover:opacity-60 transition-opacity duration-150 ease-in-out"
          onClick={() => setShowModal(!showModal)}
        />
        <IoMdDownload
          onClick={handleDownload}
          className="transform translate-y-1 hover:opacity-60 transition-opacity duration-150 ease-in-out"
        />
      </div>
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute bottom-20 w-80 h-32 -translate-x-[92px] bg-white/50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg cursor-default px-4">
              <p className="font-poppins font-semibold text-neutral-800 py-1">
                Ask AI for design
              </p>
              <textarea
                name="textarea"
                cols="30"
                rows="3"
                className="opacity-60 outline-none mb-4 w-full px-2"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
