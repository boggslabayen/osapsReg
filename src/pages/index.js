
import * as React from "react";
import { StickyNavbar } from "../components/Navbar";
import Banner from "../components/Banner";
import { TableWithStripedRows, TableWithStripedRows2 } from "../components/Table";
import { SimpleCard } from "../components/Card";


const Register = () => {
    return (
        <div className="justify-center">
        <StickyNavbar />
        <Banner 
        headline="Secure your spot at OSAPS 2024:Register today!"
        buttonName="Register"
        subtitle="Early bird rates ends on 12/31/2023"
         />

        <div className="py-8">
        <div className="md:max-w-screen-xl mx-auto pb-8 px-8 md:px-0">
         <p className="text-lg leading-10">Get ready to join us for OSAPS 2024, hosted at the luxurious <span className="font-bold">Shangri-La Mactan, Cebu, from July 4-6, 2024</span>. We offer flexible pricing options to suit your needs:</p>
         </div>
        <TableWithStripedRows />
        </div>
         

        <div className="md:max-w-screen-xl mx-auto pb-8 px-8 md:px-0 ">
         <p className="text-lg leading-10">Maximize your participation by adding the Gala Night and Fillers Master Class to your registration, or register a guest or companion to enhance your OSAPS 2024 experience</p>
         </div>

         <TableWithStripedRows2 />

         <div className="md:max-w-screen-xl mx-auto pb-8 px-8 md:px-0 py-10">
         <p className="text-lg leading-10">*Additional Guests -  Registrants have the option to register one spouse or guest. The guest registration covers Exhibit Hall access, lunch and refreshment breaks with exhibitors. Guests are not permitted in educational sessions and guests may not claim CME credit.</p>
         </div>

         <div className="md:max-w-screen-xl mx-auto pb-8 px-8 md:px-0">
         <h3 className="text-2xl font-bold text-blue-900">To register, simply follow these steps:</h3>
         </div>

         <SimpleCard />

         

       

        
        
        </div>
    )
}

export default Register;