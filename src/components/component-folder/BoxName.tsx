import PowerOnOff from "./sub-component-folder/PowerOnOff";
import Button from "../../common/common-component-button/Button";
import { BiSave } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import Input from "../../common/common-componet-input/Input";

function BoxName() {
  return (
    <div className="flex w-[329px] h-[56px] items-end justify-end gap-2 text-base font-semibold">
      <div className="flex flex-col gap-1">
        <p>Name</p>
        <Input
          text="No data"
          className="text-{12px}  h-8 w-[150px] px-[10px] py-2 font-medium text-base"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p>Start</p>
        <PowerOnOff />
      </div>
      <Button
        icon={<BiSave className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />

      <Button
        icon={<MdOutlineFileUpload className="text-greenDDS w-4 h-4" />}
        className=" text-greenDDS  border-greenDDS bg-primary"
      />
    </div>
  );
}

export default BoxName;
