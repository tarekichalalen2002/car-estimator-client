import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Select from "react-select";
import marks from "../utils/marks";
import models from "../utils/models-by-marks";
import fuels from "../utils/fuels";
import gearboxes from "../utils/gearboxes";
import { PropagateLoader } from "react-spinners";
import years from "../utils/years";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [mark, setMark] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [km, setKm] = useState("");
  const [year, setYear] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [power, setPower] = useState("");
  const [isofix, setIsOfix] = useState(false);
  const [led, setLed] = useState(false);
  const [cruiseControl, setCruiseControl] = useState(false);
  const [bluetooth, setBluetooth] = useState(false);
  const [autoClim, setAutoClim] = useState(false);
  const [rearCam, setRearCam] = useState(false);
  const [rearRad, setRearRad] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const marksOptions = marks.map((mark) => ({ value: mark, label: mark }));
  const yearsOptions = years.map((year) => ({ value: year, label: year }));
  const gearboxOptions = gearboxes.map((gearbox) => ({
    value: gearbox,
    label: gearbox,
  }));
  const [modelsOptions, setModelsOptions] = useState([]);
  useEffect(() => {
    if (mark) {
      const markModels = models.filter((m) => m.mark === mark)[0].models;
      setModelsOptions(
        markModels.map((model) => ({ value: model, label: model }))
      );
    }
  }, [mark]);

  const estimatePrice = async () => {
    if (!mark || !model || !fuel || !km || !year || !gearbox || !power) {
      setError("Please fill all the fields");
      return;
    } else {
      setError("");
      setLoading(true);
      try {
        console.log(
          mark,
          model,
          fuel,
          parseInt(year),
          gearbox,
          isofix ? 1 : 0,
          led ? 1 : 0,
          cruiseControl ? 1 : 0,
          bluetooth ? 1 : 0,
          autoClim ? 1 : 0,
          rearCam ? 1 : 0,
          rearRad ? 1 : 0,
          parseFloat(power),
          parseFloat(km)
        );
        const response = await fetch(
          "https://estin.us-east-1.modelbit.com/v1/predict_price/latest",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: [
                mark,
                model,
                fuel,
                parseInt(year),
                gearbox,
                isofix ? 1 : 0,
                led ? 1 : 0,
                cruiseControl ? 1 : 0,
                bluetooth ? 1 : 0,
                autoClim ? 1 : 0,
                rearCam ? 1 : 0,
                rearRad ? 1 : 0,
                parseFloat(power),
                parseFloat(km),
              ],
            }),
          }
        );
        const data = await response.json();
        setLoading(false);
        if (response.ok) {
          setError("");
          localStorage.setItem(
            "carInfo",
            JSON.stringify({
              mark,
              model,
              fuel,
              year,
              gearbox,
              isofix,
              led,
              cruiseControl,
              bluetooth,
              autoClim,
              rearCam,
              rearRad,
              power,
              km,
            })
          );
          localStorage.setItem("estimatedPrice", data.data.pridicted_price);
          navigate("/Result");
          return;
        } else {
          setError("An error occurred, please try again later");
          return;
        }
      } catch (error) {
        setError("An error occurred, please try again later");
        setLoading(false);
        return;
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center px-5 py-4 h-[85vh] gap-5 pb-[10vh]">
      <motion.h1
        className="lg:text-3xl md:text-2xl sm:text-xl text-lg font-semibold text-center lg:w-[30vw] md:w-[50vw] sm:w-[70vw] w-[80vw] tracking-wider"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      >
        Enter the information about your car
      </motion.h1>
      <div className="w-full gap-3 grid md:grid-cols-2 grid-cols-1">
        <motion.div
          className="flex flex-col items-center gap-5 col-span-1 w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          }}
        >
          <Select
            className="w-[70%]"
            options={marksOptions}
            onChange={(e) => setMark(e.value)}
            placeholder="Mark"
          />
          <Select
            className="w-[70%]"
            options={modelsOptions}
            onChange={(e) => setModel(e.value)}
            placeholder="Model"
            isDisabled={!mark}
          />
          <Select
            className="w-[70%]"
            options={fuels.map((fuel) => ({ value: fuel, label: fuel }))}
            onChange={(e) => setFuel(e.value)}
            placeholder="Fuel"
          />
          <input
            className="w-[70%] p-2 border-2 border-gray-300 rounded-lg"
            type="number"
            placeholder="Kilometers"
            onChange={(e) => setKm(e.target.value)}
          />
          <input
            className="w-[70%] p-2 border-2 border-gray-300 rounded-lg"
            type="number"
            placeholder="Horse Power"
            onChange={(e) => setPower(e.target.value)}
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-5 col-span-1 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            type: "spring",
            stiffness: 120,
            delay: 0.5,
          }}
        >
          <Select
            className="w-[70%]"
            options={gearboxOptions}
            onChange={(e) => setGearbox(e.value)}
            placeholder="Gearbox"
          />

          <Select
            className="w-[70%]"
            options={yearsOptions}
            onChange={(e) => setYear(e.value)}
            placeholder="Year"
          />
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-2 w-[70%] gap-5">
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setIsOfix(e.target.checked)}
                />
                <label>isofix</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setLed(e.target.checked)}
                />
                <label>led</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setCruiseControl(e.target.checked)}
                />
                <label>Cruise Control</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setBluetooth(e.target.checked)}
                />
                <label>Bluetooth</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setAutoClim(e.target.checked)}
                />
                <label>Auto Clim</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setRearCam(e.target.checked)}
                />
                <label>Rear Camera</label>
              </span>
              <span className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  onChange={(e) => setRearRad(e.target.checked)}
                />
                <label>Rear Radar</label>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <p className="text-red-500 font-semibold h-[15px]">{error}</p>
      <motion.button
        className="bg-black text-white font-bold px-5 py-3 rounded-lg min-w-[30%] min-h-[50px]"
        onClick={estimatePrice}
        disabled={loading}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 120, delay: 1 }}
      >
        {loading ? (
          <PropagateLoader color="#fff" size={8} className="" />
        ) : (
          "Estimate Price"
        )}
      </motion.button>
    </div>
  );
}

export default Home;
