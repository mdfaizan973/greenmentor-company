import { CiBellOn } from "react-icons/ci";
import { BsEmojiGrin } from "react-icons/bs";
const Navbar = () => {
  return (
    <>
      <nav className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" font-bold text-md">Caegory-1</div>

          <div className="flex items-center space-x-4">
            <span className="flex">
              <BsEmojiGrin />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-4 w-4 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            <span className="">
              <CiBellOn />
            </span>
          </div>
        </div>
      </nav>
      <div className="flex justify-end">
        <select
          id="exampleSelect"
          name="exampleSelect"
          className="mt-2 mr-12 p-2 text-[10px] block w-[13%] border border-green-300 rounded-md focus:outline-none focus:border-green-500 focus:ring focus:ring-green-200"
        >
          <option className="text-[10px]">Show Time Mar 23 - Apr 23</option>
          <option className="text-[10px]">Show Time Aug 15 - Sep 15</option>
          <option className="text-[10px]">Show Time Oct 9 - Nov 12</option>
        </select>
      </div>
    </>
  );
};

export default Navbar;
