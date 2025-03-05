import { IoCloseSharp } from "react-icons/io5";
import BoxName from "./component-folder/BoxName";
import BoxSubcriptions from "./component-folder/BoxSubcriptions";
import BoxListTemparatur from "./component-folder/BoxListTemparatur";
import Search from "../common/common-component-search/Search";
import Filter from "./component-folder/Filter";
import ButtonTextIcon from "../common/common-component-buttonTextIcon/ButtonTextIcon";
import Message from "../components/component-folder/Message";
import TableComponent from "./component-folder/sub-component-folder/Table";
import Temparatur from "../data/Temparatur";

function OpenDdsSimulator() {
  return (
    <div className="container font-display  bg-primary py-4 px-3 flex flex-col gap-4 w-[1280px] min-w-[1280px] h-[720px] rounded-xl justify-center items-center">
      <div className=" flex justify-between w-[1248px] max-w-[1248px] px-[5px] h-[24px] items-center">
        <h1
          className="text-white font-bold text-xl
        "
        >
          Open DDS Simulator
        </h1>
        <IoCloseSharp className="text-white w-6 h-6" />
      </div>
      <div className="flex w-[1248px] gap-4 h-[656px]">
        <div className="flex flex-col gap-4 w-[361px]">
          <div className="bg-secondary py-3 px-4 rounded-xl flex justify-center items-center text-white h-20">
            <BoxName />
          </div>
          <div className="bg-secondary rounded-xl max-h-full flex-1 flex flex-col gap-4 p-4 h-[560px]">
            <BoxSubcriptions />
            <BoxListTemparatur dataTemparatur={Temparatur} />
          </div>
        </div>
        <div className="p-4 bg-secondary rounded-xl flex flex-col gap-4 ">
          <Filter />
          <Search />
          <div className="h-[465px] flex gap-2 ">
            <TableComponent data={Temparatur} />
            <Message />
          </div>

          <div className="flex justify-end">
            <ButtonTextIcon
              className=" bg-redDDS w-[174px] h-9 text-[16px] font-medium"
              text={"Clear Table"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenDdsSimulator;
