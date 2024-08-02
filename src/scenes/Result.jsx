import React from "react";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Result() {
  const carInfo = JSON.parse(localStorage.getItem("carInfo"));
  const estimatedPrice = localStorage.getItem("estimatedPrice");
  console.log(carInfo);
  console.log(estimatedPrice);
  return (
    <div className="relative flex flex-col items-center px-5 py-4 h-[85vh] gap-5 pb-[10vh]">
      <Link to="/" className="absolute  left-5">
        <IoMdArrowRoundBack size={30} />
      </Link>

      <motion.h1
        className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center lg:w-[30vw] md:w-[50vw] sm:w-[70vw] w-[80vw] tracking-wider"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      >
        Here is the result of the estimation
      </motion.h1>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <motion.div
          className="w-full grid grid-cols-2 gap-4 font-semibold text-base"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          }}
        >
          <p className="pl-[20%]">Mark:</p>
          <p className="text-gray-600">{carInfo.mark}</p>
          <p className="pl-[20%]">Model:</p>
          <p className="text-gray-600">{carInfo.model}</p>
          <p className="pl-[20%]">Fuel:</p>
          <p className="text-gray-600">{carInfo.fuel}</p>
          <p className="pl-[20%]">Year:</p>
          <p className="text-gray-600">{carInfo.year}</p>
          <p className="pl-[20%]">Gearbox:</p>
          <p className="text-gray-600">{carInfo.gearbox}</p>
          <p className="pl-[20%]">Isofix:</p>
          <p className="text-gray-600">{carInfo.isofix ? "Yes" : "No"}</p>
          <p className="pl-[20%]">LED:</p>
          <p className="text-gray-600">{carInfo.led ? "Yes" : "No"}</p>
          <p className="pl-[20%]">Cruise control:</p>
          <p className="text-gray-600">
            {carInfo.cruiseControl ? "Yes" : "No"}
          </p>
        </motion.div>
        <motion.div
          className="w-full grid grid-cols-2 gap-4 font-semibold text-base"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          }}
        >
          <p className="pl-[20%]">Bluetooth:</p>
          <p className="text-gray-600">{carInfo.bluetooth ? "Yes" : "No"}</p>
          <p className="pl-[20%]">Auto clim:</p>
          <p className="text-gray-600">{carInfo.autoClim ? "Yes" : "No"}</p>
          <p className="pl-[20%]">Rear camera:</p>
          <p className="text-gray-600">{carInfo.rearCam ? "Yes" : "No"}</p>
          <p className="pl-[20%]">Rear radar:</p>
          <p className="text-gray-600">{carInfo.rearRad ? "Yes" : "No"}</p>
          <p className="pl-[20%]">Power:</p>
          <p className="text-gray-600">{carInfo.power} CH</p>
          <p className="pl-[20%]">Km:</p>
          <p className="text-gray-600">{carInfo.km} km</p>
        </motion.div>
      </div>
      <motion.div
        className="w-full text-center flex items-center gap-5 font-semibold text-2xl  justify-center py-5 md:mt-0 mt-[5vh] md:flex-row flex-col"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 120,
          delay: 1,
        }}
      >
        <p>The estimated price is:</p>
        <p className="text-gray-600 text-2xl">{estimatedPrice} €</p>
      </motion.div>
    </div>
  );
}

export default Result;
