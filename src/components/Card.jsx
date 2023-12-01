import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines,faCreditCard, faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";

import {
    Typography,
  } from "@material-tailwind/react";
   
  export function SimpleCard() {
    return (
    
     <div className="w-auto md:flex md:max-w-screen-xl mx-auto">

        <div className="mx-auto text-center w-64 pb-8">

        <FontAwesomeIcon icon={faFileLines} className="text-blue-900 text-8xl text-center pb-4"/>
          <Typography>
           Complete the Registration Form
          </Typography>

        </div>

        <div className="mx-auto text-center w-64 pb-8">

        <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue-900 text-8xl text-center pb-4"/>
          <Typography>
          Keep an eye on your e-mail for further instructions
          </Typography>

        </div>

        <div className="mx-auto text-center w-64 pb-8">

        <FontAwesomeIcon icon={faCreditCard} className="text-blue-900 text-8xl text-center pb-4"/>
          <Typography>
          Proceed with payment once registration is accepted
          </Typography>

        </div>


      </div>

     
    );
  }
  