import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";
import at1 from "../Picture/angkor_thom/angkor_thom1.png"
import at2 from "../Picture/angkor_thom/angkor-thom2.jpg"
import at3 from "../Picture/angkor_thom/angkor-thom3.jpg"
import at4 from "../Picture/angkor_thom/Angkor_Thom4.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function angkor_thom() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Angkor Thom</h2>
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
            <Image src={at1} alt="at1" className=" h-full py-2" />
            <Image src={at2} alt="at2" className=" h-full py-2" />
            <div>
              <Image src={at3} alt="at3" className="h-[450px] py-2" />
              <Image src={at4} alt="at4" className="h-[450px] py-2" />
            </div>
            
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[600px] text-lg">
            <span className="font-bold">
             Angkor Thom is not just another temple; it’s an entire city within the Angkor Archaeological <br />Park in Siem Reap, Cambodia. Founded by King Jayavarman VII, it covers 10 square kilometers <br />and features iconic structures like the Bayon temple with its 216 enigmatic faces.
            </span>
            <span className="text-red-600 text-right">From 35 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.angkor_thom.Content1}</li>
            <li>{data.angkor_thom.point1}</li>
            <li>{data.angkor_thom.point2}</li>
            <li>{data.angkor_thom.point3}</li>
            <li>{data.angkor_thom.point4}</li>
            <li>{data.angkor_thom.point5}</li>
            <li>{data.angkor_thom.point6}</li>
            <li>{data.angkor_thom.point7}</li>
            <li>{data.angkor_thom.point8}</li>
            <li>{data.angkor_thom.point9}</li>
            <li>{data.angkor_thom.point10}</li>
            <li>{data.angkor_thom.point11}</li>
            <li>{data.angkor_thom.point12}</li>
            <li>{data.angkor_thom.point13}</li>
            <li>{data.angkor_thom.point14}</li>
            <li>{data.angkor_thom.point15}</li>
            <li>{data.angkor_thom.point16}</li>
            <li>{data.angkor_thom.point17}</li>
            <li>{data.angkor_thom.point18}</li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
