import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function InputTime() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      flatpickr(inputRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i:S", // Format 24 jam (hh:mm:ss)
        time_24hr: true,
      });
    }
  }, []);

  return (
    <input
      placeholder="--:--:--"
      ref={inputRef}
      className="h-6 w-[105px] font-medium text-[20px] focus:outline-none  min-w-0 min-h-0 text-white bg-blackDDS rounded-lg border border-white text-center p-1"
    />
  );
}

export default InputTime;
