import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";

import ps1 from "../Picture/pubstresst/pub-street1.jpg"
import ps2 from "../Picture/pubstresst/pub-street2.jpg"
import ps3 from "../Picture/pubstresst/pub-street3.jpg"
import ps4 from "../Picture/pubstresst/pub-street4.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";


async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function pub_street() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Pub Street</h2>
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
            <Image src={ps1} alt="ps1" className=" h-full py-2" />
            <Image src={ps2} alt="ps2" className=" h-full py-2" />
            <div>
              <Image src={ps3} alt="ps3" className="py-2" />
              <Image src={ps4} alt="ps4" className="py-2" />
            </div>
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[670px] text-lg">
            <span className="font-bold">
            Pub Street in Siem Reap is the pulsating heart of Cambodia’s nightlife. Neon-lit clubs, bars, and <br />street food carts line this lively 100m stretch. Come dance, indulge in $0.75 beers, and savor <br />Cambodian BBQ.
            </span>
            <span className="text-red-600 text-right">From 35 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72 text-lg">
          <ul>
            <li>{data.pub_street.content1}</li>
            <li>{data.pub_street.point1}</li>
            <li>{data.pub_street.point2}</li>
            <li>{data.pub_street.point3}</li>
            <li>{data.pub_street.content2}</li>
            <li>{data.pub_street.point4}</li>
            <li>{data.pub_street.point5}</li>
            <li>{data.pub_street.point6}</li>
            <li>{data.pub_street.point7}</li>
            <li>{data.pub_street.point8}</li>
            <li>{data.pub_street.point9}</li>
            <li>{data.pub_street.point10}</li>
            <li>{data.pub_street.content3}</li>
            <li>{data.pub_street.point11}</li>
            <li>{data.pub_street.point12}</li>
            <li>{data.pub_street.point13}</li>
            <li>{data.pub_street.point14}</li>
            <li>{data.pub_street.point15}</li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
