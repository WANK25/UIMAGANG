import { useState } from "react";

function PowerOnOff() {
  const [isOn, setIsOn] = useState<boolean>(false);

  return (
    <div
      className={`flex items-center gap-1 px-1 py-1 w-[90px] h-8 rounded-2xl cursor-pointer transition-colors duration-300 ${
        isOn ? "bg-green-500" : "bg-red-500"
      }`}
      onClick={() => setIsOn((prev) => !prev)}
    >
      <button
        className={`rounded-full w-6 h-6 bg-white transition-transform duration-300  ${
          isOn ? "translate-x-[56px]" : "translate-x-0"
        }`}
        aria-label={isOn ? "Turn off" : "Turn on"}
      ></button>

      <p
        className={`text-white text-[14px] w-13 text-center font-medium 
        ${isOn ? "translate-x-[-30px]" : "translate-x-0"}`}
      >
        {isOn ? "On " : "Off"}
      </p>
    </div>
  );
}

export default PowerOnOff;
