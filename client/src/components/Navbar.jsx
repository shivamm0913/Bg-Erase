import { MoveRight } from "lucide-react";
import { assets } from "../assets/assets";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between  mx-4 py-3 lg:mx-44 ">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-32 sm:w-44" />
      </Link>
      {isSignedIn ? (
        <div>
          <UserButton/>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className=" text-sm rounded-full "
        >
          <InteractiveHoverButton className="text-black px-4 py-2 sm:px-8 sm:py-3">
            Get Started
          </InteractiveHoverButton>
        </button>
      )}
    </div>
  );
};

export default Navbar;
