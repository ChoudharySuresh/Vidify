import { useState } from "react";

const Dropdown = ({ children, trigger }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-fit relative z-10"
      onClick={() => setShow((curr) => !curr)}
    >
      <div>{trigger}</div>
      {show && (
        <ul
          className={`min-w-max absolute right-0 mt-3 rounded-md bg-[#282828] divide-y divide-gray-600 shadow overflow-hidden`}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

export function DropdownItem({ children }) {
  return (
    <li
      className={`flex gap-3 items-center px-4 py-3 text-white hover:bg-[#3F3F3F] cursor-pointer`}
    >
      {children}
    </li>
  );
}
