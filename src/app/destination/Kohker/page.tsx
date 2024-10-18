import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";

import kke1 from "../Picture/kohker/kohker1.jpg"
import kke2 from "../Picture/kohker/kohker2.jpg"
import kke3 from "../Picture/kohker/kohkee3.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function koh_ker() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Koh Ker</h2>
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
            <Image src={kke1} alt="kke1" className=" h-full py-2" />
            <Image src={kke2} alt="kke2" className=" h-full py-2" />
            <Image src={kke3} alt="kke3" className="h-full py-2" />
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[680px] text-lg">
            <span className="font-bold">
            Koh Ker, an ancient archaeological site about 120 kilometers northeast of Siem Reap, boasts a <br /> magnificent seven-tiered pyramid called Prang, standing tall at 36 meters amidst encroaching <br /> jungle. Explore this hidden gem with its moss-covered ruins, meditation palaces, and stunning <br />views.
            </span>
            <span className="text-red-600 text-right">From 40 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.koh_ker.title}</li>
            <li>{data.koh_ker.content1}
              <ul className="px-5">
                <li >{data.koh_ker.point1}</li>
                <li>{data.koh_ker.point2}</li>
              </ul>
            </li>
            <li>{data.koh_ker.content2}
              <ul className="px-5">
                <li>{data.koh_ker.point3}</li>
                <li>{data.koh_ker.point4}</li>
                <li>{data.koh_ker.point5}</li>
                <li>{data.koh_ker.point6}</li>
              </ul>
            </li>
            <li>{data.koh_ker.content3}
              <ul className="px-5">
                <li>{data.koh_ker.point7}</li>
                <li>{data.koh_ker.point8}</li>
              </ul>
            </li>
            <li>{data.koh_ker.content4}
              <ul className="px-5">
                <li>{data.koh_ker.point9}</li>
                <li>{data.koh_ker.point10}</li>
                <li>{data.koh_ker.point11}</li>
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
