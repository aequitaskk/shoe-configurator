import React, { useState } from "react";
import { IoSparklesSharp } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

const Menu = ({ canvasRef }) => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState("");

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


  const generateImage = async () => {

    const response = await openai.createImage({
      prompt: input,
      n: 1,
      size: "1024x1024",
    });
    console.log(response);

    const generatedImageUrl = response.data.data[0].url;
    console.log(generatedImageUrl);


    setInput("");
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
            <div className="absolute bottom-20 w-80 h-40 -translate-x-[92px] bg-white/50 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg cursor-default px-4">
              <p className="font-poppins font-semibold text-neutral-800 py-1">
                Ask AI for design
              </p>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                name="textarea"
                cols="30"
                rows="3"
                className="opacity-60 outline-none mb-1 w-full px-2"
              />
              <button onClick={generateImage} className="text-white bg-slate-800 rounded-md py-1 px-2 font-medium flex mx-auto">
                Generate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
