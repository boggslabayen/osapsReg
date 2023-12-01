import React from "react";
import { Button } from "@material-tailwind/react";
import { StaticImage } from 'gatsby-plugin-image';

function Banner(props) {
    return (
        <div className="py-10  bg-yellow-50    ">

        <div className="md:flex mx-auto justify-between items-center px-8 md:px-0 md:max-w-screen-xl">

   

        
        <div className="">

            <div className="pb-6">
            <h1 className="text-5xl font-sans font-extrabold text-blue-900 leading-tight n">
            {props.headline}
            </h1>
            </div>
            

            
            <Button
                variant="filled"
                size="lg"
                className="lg:inline-block rounded-full bg-amber-500 hover:bg-amber-700 text-gray-900 hover:text-brown-50"
              > 
              {props.buttonName}
              </Button>
              

            <div className="pt-2">
            <p>{props.subtitle}</p>
            </div>

        </div>

        
        <StaticImage
            alt="Image of a person talking in stage"
            src="../images/register-image.png"
            className="hidden md:inline-flex"
            
            />
        
       
            
           

        </div>
            
        </div>
    )
}

export default Banner;