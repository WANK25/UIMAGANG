import React from "react";
import { FaAngleRight } from "react-icons/fa";
import BoxInputDate from "./BoxInputDate";
import Input from "../../common/common-componet-input/Input";

function Filter() {
  return (
    <div className="flex font-bold  items-center text-white gap-2 w-[839px]">
      <p className="font-semibold text-xl">Filter : </p>
      <Input
        icon={<FaAngleRight className="w-[24px] h-[24px]" />}
        text="your topic ccccccccccccccccccccccccc"
        className="text-{14px} font-medium w-[320px]"
      />

      <BoxInputDate />

      <Input
        icon={<FaAngleRight className="w-[24px] h-[24px]" />}
        text="status"
        className="text-{14px} font-medium w-[119px]"
      />
    </div>
  );
}

export default Filter;
