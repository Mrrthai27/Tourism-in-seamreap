import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import { fstat } from "fs";
import Image from "next/image";

import ta1 from "../pic/tara_angkor/tara1.jpg";
import ta2 from "../pic/tara_angkor/tara2.jpg";
import ta3 from "../pic/tara_angkor/tara3.jpg";
import ta4 from "../pic/tara_angkor/tara4.jpg";
import Footer from "@/app/Footer";
import Header from "@/app/Header";

async function getData() {
  const path = process.cwd() + "/src/app/data/hotel.json";
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}

export default async function Tara_Angkor() {
  const data = await getData();
  console.log(data);

  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Tara Angkor Hotel</h2>
          <div className="flex items-center">
            <svg
              className="w-7 h-7 text-yellow-300 me-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-7 h-7 text-yellow-300 me-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-7 h-7 text-yellow-300 me-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-7 h-7 text-yellow-300 me-1"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-7 h-7 text-gray-300 me-1 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <div className="inline-grid grid-cols-3 gap-2 ">
            <Image src={ta1} alt="ta1" className=" h-full py-2" />
            <Image src={ta2} alt="ta2" className=" h-full w-full py-2" />
            <div>
              <Image src={ta3} alt="ta3" className="h-[500px] py-2" />
              <Image src={ta4} alt="ta4" className="h-[500px] py-2" />
            </div>
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[700px] py-3">
            <div>
              <span className="text-xl font-bold">Get the celebrity treatment with world-class service at  Tara Angkor Hotel</span>
              <br />
              <span className="text-lg">
              Vithei Charles De Gaulle, Siem Reap, Cambodia
              </span>
            </div>

            <span className="text-red-600 text-lg">99 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-44 text-lg font-semibold">
          <ul>
            <li className="py-3">{data.Tara_Angkor_Hotel.text1}</li>
            <li className="py-3">{data.Tara_Angkor_Hotel.text2}</li>
            <li className="py-3">{data.Tara_Angkor_Hotel.text3}</li>
            <li className="py-3">{data.Tara_Angkor_Hotel.text4}</li>
            <li className="py-3">{data.Tara_Angkor_Hotel.text5}</li>
            <li className="py-3">{data.Tara_Angkor_Hotel.text6}</li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
