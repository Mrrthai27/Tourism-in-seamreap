import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";

import aw1 from "../Picture/angkor_wat/angkorwat1.jpg"
import aw2 from "../Picture/angkor_wat/angkorwat2.jpg"
import aw3 from "../Picture/angkor_wat/angkorwat3.jpg"
import aw4 from "../Picture/angkor_wat/angkorwat4.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}



export default async function Angkorwat() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Angkor Wat</h2>
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
              className="w-7 h-7 text-yellow-300 me-1 "
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <div className="inline-grid grid-cols-3 gap-2 ">
            <Image src={aw1} alt="aw1" className=" h-full py-2" />
            <Image src={aw2} alt="aw2" className=" h-full w-full py-2 " />
            <div>
              <Image src={aw3} alt="aw3" className="h-[450px] py-2" />
              <Image src={aw4} alt="aw4" className="h-[450px] py-2" />
            </div>
            
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[600px] text-lg">
            <span className="font-bold">
             Angkor Wat is a mesmerizing temple complex in Cambodia, known for its intricate architecture and <br /> rich history. For a memorable visit, explore the iconic three-spired Angkor Wat structure and nearby <br /> temples like Bayon and Ta Prohm. 
            </span>
            <span className="text-red-600 text-right">From 40 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.angkor_wat.content1}</li>
            <li>{data.angkor_wat.point1}</li>
            <li>{data.angkor_wat.point2}</li>
            <li>{data.angkor_wat.content2}</li>
            <li>{data.angkor_wat.point3}</li>
            <li>{data.angkor_wat.point4}</li>
            <li>{data.angkor_wat.content3}
            <li>{data.angkor_wat.point5}</li>
              <ul className="px-3">
                <li>{data.angkor_wat.text1}</li>
                <li>{data.angkor_wat.text2}</li>
                <li>{data.angkor_wat.text3}</li>
              </ul>
            </li>
            <li>{data.angkor_wat.point6}</li>
            <li>{data.angkor_wat.content4}</li>
            <li>{data.angkor_wat.point7}</li>
            <li>{data.angkor_wat.point8}</li>
            <li>{data.angkor_wat.point9}</li>
            <li>{data.angkor_wat.content5}</li>
            <li>{data.angkor_wat.point10}</li>
            <li>{data.angkor_wat.point11}</li>
            <li>{data.angkor_wat.point12}</li>
          </ul>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
