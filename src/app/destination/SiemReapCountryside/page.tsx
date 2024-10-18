import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import { fstat } from "fs";
import Image from "next/image";
import logo from "../logo.png";

import cs1 from "../Picture/countryside/countryside1.jpg";
import cs2 from "../Picture/countryside/countryside2.jpg";
import cs3 from "../Picture/countryside/countryside3.jpg";
import cs4 from "../Picture/countryside/countryside4.jpg";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
  const path = process.cwd() + "/src/app/data/destionation.json";
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}

export default async function srcountryside() {
  const data = await getData();
  console.log(data);

  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Countryside</h2>
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
            <Image src={cs1} alt="cs1" className=" h-full py-2" />
            <Image src={cs2} alt="cs2" className=" h-full py-2" />
            <div>
              <Image src={cs3} alt="cs3" className="py-2" />
              <Image src={cs4} alt="cs4" className="py-2" />
            </div>
          </div>
          <div className="flex items-center gap-x-[760px] text-lg">
            <span className="font-bold">
              The Siem Reap countryside is a hidden gem beyond the temples.
              Explore lush jungles,
              <br />
              meet local villagers, bike along riverbanks, and discover ancient
              ruins.
            </span>
            <span className="text-red-600 text-right">From 20 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.srcountryside.content1}</li>
            <li>{data.srcountryside.point1}</li>
            <li>{data.srcountryside.point2}</li>
            <li>{data.srcountryside.point3}</li>
            <li>{data.srcountryside.content2}</li>
            <li>{data.srcountryside.point4}</li>
            <li>{data.srcountryside.point5}</li>
            <li>{data.srcountryside.point6}</li>
            <li>{data.srcountryside.content3}</li>
            <li>{data.srcountryside.point7}</li>
            <li>{data.srcountryside.point8}</li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
