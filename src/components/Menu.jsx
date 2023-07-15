import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

const Menu = ({ canvasRef }) => {
  const [ishovered, setIshovered] = useState(false);
  console.log(ishovered);

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
    <AnimatePresence>
      <div
        onMouseEnter={() => setIshovered(true)}
        onMouseLeave={() => setIshovered(false)}
        className="z-10 fixed bottom-10 left-0"
      >
        <div className="flex text-4xl border-2 rounded-lg py-2 px-2 bg-white/50 items-center cursor-pointer hover:bg-gray-800 hover:text-white transition duration-150 ease-in-out">
          {ishovered ? (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="pr-3 flex items-center gap-2"
            >
              <IoMdDownload
                onClick={handleDownload}
                className="hover:opacity-90 transition-opacity duration-150 ease-in-out"
              />
              <p className="text-base font-medium">Download</p>
            </motion.div>
          ) : (
            <IoMdDownload onClick={handleDownload} />
          )}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Menu;
