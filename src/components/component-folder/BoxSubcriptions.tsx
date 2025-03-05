import React from "react";
import Search from "../../common/common-component-search/Search";
import ButtonTextIcon from "../../common/common-component-buttonTextIcon/ButtonTextIcon";
import { AiOutlinePlusCircle } from "react-icons/ai";

function BoxSubcriptions() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex font-semibold">
        <div className="p-2 bg-blackDDS rounded-[8px] ">
          <p className="text-white text-base ">Subscriptions</p>
        </div>
        <div className="p-2 rounded-[8px] ">
          <p className="text-whiteDDS text-base ">Publisher</p>
        </div>
      </div>
      <div className="border border-blackDDS"></div>

      <Search />
      <ButtonTextIcon
        icon={<AiOutlinePlusCircle className="text-white w-4 h-4" />}
        className=" bg-greenDDS w-32 px-4 text-[14px] font-semibold"
        text={"Add Topic"}
      />
    </div>
  );
}

export default BoxSubcriptions;
