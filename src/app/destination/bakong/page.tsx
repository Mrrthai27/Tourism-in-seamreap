import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";
import bk1 from "../Picture/bakong/bakong1.jpg"
import bk2 from "../Picture/bakong/bakong2.jpg"
import bk3 from "../Picture/bakong/bakong3.jpg"
import bk4 from "../Picture/bakong/bakong4.jpg"
import Footer from "@/app/Footer";
import Header from "@/app/Header";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function bakong() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Bakong Temple</h2>
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
            <Image src={bk1} alt="bk1" className=" h-full py-2" />
            <Image src={bk2} alt="bk2" className=" h-full py-2" />
            <div>
              <Image src={bk3} alt="bk3" className="h-[450px] py-2" />
              <Image src={bk4} alt="bk4" className="h-[450px] py-2" />
            </div>
            
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[600px] text-lg">
            <span className="font-bold">
             Bakong Temple is a remarkable 9th-century gem nestled near Siem Reap, Cambodia. It’s <br /> one of the earliest temple constructions, featuring a stepped pyramid design dedicated <br /> to Hindu God Shiva.
            </span>
            <span className="text-red-600 text-right">From 30 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.bakong_temple.content1}
              <ul className="px-5">
                  <li>{data.bakong_temple.point1}</li>
                  <li>{data.bakong_temple.point2}</li>
                  <li>{data.bakong_temple.point3}</li>
                  <li>{data.bakong_temple.point4}</li>
                  <li>{data.bakong_temple.point5}</li>
              </ul>
            </li>
            <li>{data.bakong_temple.content2}
              <ul className="px-5">
                <li>{data.bakong_temple.point6}</li>
                <li>{data.bakong_temple.point7}</li>
                <li>{data.bakong_temple.point8}</li>
                <li>{data.bakong_temple.point9}</li>
                <li>{data.bakong_temple.point10}</li>
                <li>{data.bakong_temple.point11}</li>
              </ul>
            </li>
            <li>{data.bakong_temple.content3}
              <ul className=" px-5">
                <li>{data.bakong_temple.point12}</li>
                <li>{data.bakong_temple.point13}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
