import React from "react";

import { Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["","Early-bird Rate", "Standard Rate", "On-site Rate"];
 
const TABLE_ROWS = [
  {
    type:"International Plastic Surgeons",
    earlyBird: "US $ 500",
    standard: "US $ 650",
    onSite: "US $ 750",
  },
  {
    type:"International Plastic Surgery Trainees",
    earlyBird: "US $ 400",
    standard: "US $ 500",
    onSite: "US $ 600",
  },
  {
    type:"Medical Students",
    earlyBird: "US $ 200",
    standard: "US $ 200",
    onSite: "US $ 200",
  },
  {
    type:"Allied Professionals (Nursing, PT/OT/SP)",
    earlyBird: "US $ 200",
    standard: "US $ 250",
    onSite: "US $ 300",
  },
];
 
export function TableWithStripedRows() {
  return (
    <div className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left md:max-w-screen-lg mx-auto px-10 md:px-0">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-gray-50 bg-gray-50 p-4">

                <Typography
                  variant="lead"
                  color="black"
                  className="font-normal leading-none opacity-70 font-bold text-center"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {TABLE_ROWS.map(({ type, earlyBird, standard,onSite }, index) => (
            <tr key={type} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-normal text-center">
                  {type}
                </Typography>
              </td>

              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-normal text-center">
                  {earlyBird}
                </Typography>
              </td>

              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-norma text-centerl">
                  {standard}
                </Typography>
              </td>

              <td className="p-4">
                <Typography as="a" href="#" variant="lead" color="blue-gray" className="font-normal text-center">
                  {onSite}
                </Typography>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}






const TABLE_HEAD2 = ["Add-Ons","Early-bird Rate", "Standard Rate", "On-site Rate"];
 
const TABLE_ROWS2 = [
  {
    type:"Additional Companion / Guest (Local)",
    earlyBird: "₱ 5000",
    standard: "₱ 5000",
    onSite: "₱ 5000",
  },
  {
    type:"Additional Companion / Guest (Foreign)",
    earlyBird: "US $ 130",
    standard: "US $ 130",
    onSite: "US $ 130",
  },
  {
    type:"OSAPS 2024 Gala Dinner",
    earlyBird: "US $ 50 / ₱ 2,600",
    standard: "US $ 50 / ₱ 2,600",
    onSite: "US $ 50 / ₱ 2,600",
  },
];
 
export function TableWithStripedRows2() {
  return (
    <div className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left md:max-w-screen-lg mx-auto px-10 md:px-0 border-gray-300 border ">
        <thead>
          <tr>
            {TABLE_HEAD2.map((head) => (
              <th key={head} className="border-b border-gray-50 bg-gray-50 p-4">

                <Typography
                  variant="lead"
                  color="black"
                  className="font-normal leading-none opacity-70 font-bold text-center"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {TABLE_ROWS2.map(({ type, earlyBird, standard,onSite }, index) => (
            <tr key={type} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-normal text-center">
                  {type}
                </Typography>
              </td>

              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-normal text-center">
                  {earlyBird}
                </Typography>
              </td>

              <td className="p-4">
                <Typography variant="lead" color="blue-gray" className="font-norma text-centerl">
                  {standard}
                </Typography>
              </td>

              <td className="p-4">
                <Typography as="a" href="#" variant="lead" color="blue-gray" className="font-normal text-center">
                  {onSite}
                </Typography>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}