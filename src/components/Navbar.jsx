import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import eventLogo from "../images/harmony.png"
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
 
  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <Navbar className="max-w-full bg-blue-950 items-center pt-8 px-9">

        <div className="flex justify-between items-center text-blue-gray-900">

          <img src={eventLogo} alt="event logo" />

          <div className="invisible">
            <ul className="md:flex text-gray-50 gap-8 font-sans hidden">
                <li className=" hover:text-amber-500">Speakers</li>
                <li className=" hover:text-amber-500">Abstract</li>
                <li className=" hover:text-amber-500">Sponsors</li>
                <li className=" hover:text-amber-500">Explore</li>
                <li className=" hover:text-amber-500">About</li>

            </ul>
          </div>

          <div className="flex items-center gap-4">

           
            
            <div>
              <Button
                variant="filled"
                size="lg"
                className="hidden lg:inline-block rounded-full bg-amber-500 hover:bg-amber-700 text-gray-900 hover:text-brown-50"
              >
                <span>Register</span>
              </Button>
            </div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit md:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="white"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        <MobileNav open={openNav}>
         
          <div className=" items-center gap-x-1 my-2">
          <div className="hidden">
            <ul className=" text-gray-50 gap-8 font-sans text-center">
                <li className=" hover:text-amber-500">Speakers</li>
                <li className=" hover:text-amber-500">Abstract</li>
                <li className=" hover:text-amber-500">Sponsors</li>
                <li className=" hover:text-amber-500">Explore</li>
                <li className=" hover:text-amber-500">About</li>

            </ul>
          </div>
            <Button fullWidth variant="filled" size="sm" className="rounded-full bg-amber-500 hover:bg-amber-700 text-gray-900 hover:text-brown-50">
              <span>Register</span>
            </Button>
          </div>
        </MobileNav>
        
      </Navbar>

    </div>
  );
}