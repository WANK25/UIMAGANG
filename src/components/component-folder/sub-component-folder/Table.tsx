import { FaSortAmountDown } from "react-icons/fa";

interface TableRow {
  timestamp: string;
  topic: string;
  status: "transmitted" | "received";
}

function TableComponent({ data }: { data: TableRow[] }) {
  return (
    <div className="min-w-[563px] w-[563px] text-white flex flex-col gap-2">
      {/* Header */}
      <div className="bg-blackDDS w-[540px] px-[10px] rounded-[10px] flex items-center gap-2.5 text-[14px]">
        <div className="flex items-center px-[10px] py-[5px] gap-2 font-bold w-[135px]">
          <p>Time Stamp</p>
          <FaSortAmountDown />
        </div>
        <div className="flex items-center gap-2 font-bold w-[216px] px-[10px] py-[5px]">
          Topic <FaSortAmountDown />
        </div>
        <div className="flex items-center gap-2 font-bold w-[158px]">
          Status <FaSortAmountDown />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-[2px] overflow-y-auto scrollbar-thin pr-2 h-[429px] scrollbar-thumb-rounded-full scrollbar-thumb-white scrollbar-track-transparent">
        {data.map((row, index) => (
          <div
            key={index}
            className="bg-greyDDS px-[10px] rounded-[10px] flex items-center gap-2.5 text-[14px] w-[540px] min-h-[35px]"
          >
            <div className="flex items-center px-[10px] py-[5px] w-[135px]">
              {row.timestamp}
            </div>
            <div className="flex items-center w-[207px] px-[10px] py-[5px] justify-center">
              <p className="truncate">{row.topic}</p>
            </div>
            <div className="flex items-center w-[158px] px-[10px] py-[5px]">
              {row.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableComponent;
