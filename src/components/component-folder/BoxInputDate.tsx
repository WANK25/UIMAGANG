import React from "react";
import InputTime from "./sub-component-folder/InputDate";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../../common/common-component-button/Button";

interface Props {}

function BoxInputDate(props: Props) {
  const {} = props;

  return (
    <div className="p-2 flex h-10 gap-2.5 w-[308px] bg-blackDDS rounded-lg justify-center items-center">
      <InputTime />
      <div className="border-t border-white w-4"></div>

      <InputTime />
      <Button
        icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
        className=" border-redDDS bg-redDDS"
      />
    </div>
  );
}

export default BoxInputDate;
