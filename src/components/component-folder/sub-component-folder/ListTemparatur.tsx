import React, { useState } from "react";
import Button from "../../../common/common-component-button/Button";
import { CiEdit } from "react-icons/ci";
import { FaRegTrashAlt, FaRegPlayCircle } from "react-icons/fa";
import { CgPlayPauseO } from "react-icons/cg";

interface TemperaturData {
  id: number;
  topic: string;
  activate: boolean;
}

interface ListTemparaturProps {
  dataTemparatur: TemperaturData[];
}

function ListTemparatur({ dataTemparatur }: ListTemparaturProps) {
  // Simpan data dalam state agar bisa diubah
  const [dataList, setDataList] = useState(dataTemparatur);

  // Fungsi untuk toggle status activate
  const toggleActivate = (id: number) => {
    setDataList((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, activate: !item.activate } : item
      )
    );
  };

  return (
    <>
      {dataList.map((data) => (
        <div
          key={data.id}
          className="flex px-3 py-[6px] bg-blackDDS rounded-[4px] gap-1 justify-center items-center w-[322px] h-[44px]"
        >
          <p className="font-semibold text-[12px] text-white w-[198px] truncate">
            {data.topic}
          </p>

          <Button
            icon={
              data.activate ? (
                <FaRegPlayCircle className="text-greenDDS w-4 h-4" />
              ) : (
                <CgPlayPauseO className="text-redDDS border-redDDS w-4 h-4" />
              )
            }
            className={
              data.activate
                ? "text-greenDDS border-greenDDS bg-primary"
                : "text-white border-redDDS bg-primary"
            }
            onClick={() => toggleActivate(data.id)} // Klik untuk ubah status
          />

          <Button
            icon={<CiEdit className="text-greenDDS w-4 h-4" />}
            className="text-greenDDS border-greenDDS bg-primary"
          />

          <Button
            icon={<FaRegTrashAlt className="text-white w-4 h-4" />}
            className="border-redDDS bg-redDDS"
          />
        </div>
      ))}
    </>
  );
}

export default ListTemparatur;
