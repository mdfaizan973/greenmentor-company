import { CiBellOn } from "react-icons/ci";
import { BsEmojiGrin } from "react-icons/bs";
const Navbar = () => {
  return (
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
  );
};

export default Navbar;
