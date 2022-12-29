import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const DropDown = ({ data, checkBox, type, setSort, genre, setGenre }) => {
  const [open, setOpen] = useState(false);

  const isOpen = open;
  const isClosed = !open;

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setGenre(
      isChecked ? [...genre, value] : genre?.filter((item) => item !== value)
    );
  };

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  return (
    <div className="flex my-3 " ref={menuRef}>
      <div className="relativev">
        <button
          className="text-white bg-gradient-to-b from-white/5 py-3 px-5 rounded-t-xl items-center flex justify-between  min-w-[190px]"
          onClick={() => setOpen(!open)}
        >
          {type}
          {isOpen && <KeyboardArrowUpOutlinedIcon />}
          {isClosed && <KeyboardArrowDownOutlinedIcon />}
        </button>
        {open && (
          <div className=" absolute z-10  rounded divide-y divide-gray-100 shadow dark:bg-blue/90 border-[1px] border-gray-500/20 max-h-[400px] overflow-auto ">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 min-w-[190px]">
              {data?.map((item) => (
                <li key={item.id}>
                  {checkBox ? (
                    <label className="cursor-pointer  py-2 px-4 duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex items-center">
                      <input
                        type="checkbox"
                        value={item.id}
                        onChange={handleChange}
                        id={item.id}
                      />
                      <span className="ml-2">{item.name}</span>
                    </label>
                  ) : (
                    <div
                      onClick={() => setSort(item.value)}
                      className="cursor-pointer  py-2 px-4 duration-300 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {item.name}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
