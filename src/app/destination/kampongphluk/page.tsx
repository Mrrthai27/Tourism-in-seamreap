import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";

import kp1 from "../Picture/kompongPhluk/kampotplug1.jpg"
import kp2 from "../Picture/kompongPhluk/kompong-phluk2.jpg"
import kp3 from "../Picture/kompongPhluk/Kompong-Phluk3.jpg"
import kp4 from "../Picture/kompongPhluk/kompongphluk4.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function kampong_phluk() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Kampong Phluk</h2>
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
            <Image src={kp1} alt="kp1" className=" h-full py-2" />
            <Image src={kp2} alt="kp2" className=" h-full py-2" />
            <div>
              <Image src={kp3} alt="kp3" className=" py-2" />
              <Image src={kp4} alt="kp4" className=" py-2" />
            </div>
            
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[600px] text-lg">
            <span className="font-bold">
            Kampong Phluk is a captivating floating village near Siem Reap, Cambodia. Explore stilted houses,<br /> mangrove forests, and learn about local culture.
            </span>
            <span className="text-red-600 text-right">From 30 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.kampong_phluk.title}</li>
            <li>{data.kampong_phluk.content1}
              <ul className="px-5">
                <li>{data.kampong_phluk.point1}</li>
                <li>{data.kampong_phluk.point2}
                  <ul className="px-6">
                    <li>{data.kampong_phluk.text1}</li>
                    <li>{data.kampong_phluk.text2}</li>
                    <li>{data.kampong_phluk.text3}</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>{data.kampong_phluk.content2}
              <ul className="px-5">
                <li>{data.kampong_phluk.point3}</li>
                <li>{data.kampong_phluk.point4}</li>
              </ul>
            </li>
            <li>{data.kampong_phluk.content3}
              <ul className="px-5">
                <li>{data.kampong_phluk.point5}</li>
                <li>{data.kampong_phluk.point6}</li>
                <li>{data.kampong_phluk.point7}</li>
              </ul>
            </li>
            <li>{data.kampong_phluk.content4}
              <ul className="px-5">
                <li>{data.kampong_phluk.point8}</li>  
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
