import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";
import pk1 from "../Picture/kulen/PhnomKulen1.jpg"
import pk2 from "../Picture/kulen/PhnomKulen2.jpg"
import pk3 from "../Picture/kulen/PhnomKulen3.jpg"
import pk4 from "../Picture/kulen/PhnomKulen4.jpg"
import Header from "@/app/Header";
import Footer from "@/app/Footer";

async function getData() {
    
  const path = process.cwd() + '/src/app/data/destionation.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function phnom_kulen() {
  const data = await getData();
  console.log(data);
  
  return (
    <html>
      <body>
        <div>
        <Header/>
        </div>
        <div className="bg-white text-black px-36 py-10">
          <h2 className="py-3 text-2xl font-serif">Siem Reap: Phnom Kulen</h2>
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
            <Image src={pk1} alt="pk1" className=" h-full py-2" />
            <Image src={pk2} alt="pk2" className=" h-full py-2" />
            <div>
              <Image src={pk3} alt="pk3" className="h-[350px] py-2" />
              <Image src={pk4} alt="pk4" className="py-2" />
            </div>
          </div>
          <div className="flex items-center sm:gap-x-[20px] lg:gap-x-[680px] text-lg">
            <span className="font-bold">
            Phnom Kulen, also known as Kulen Mountain, is a captivating destination just north of Siem <br /> Reap. Explore stunning waterfalls, a reclining Buddha, and breathtaking scenic views.
            </span>
            <span className="text-red-600 text-right">From 25 USD</span>
          </div>
        </div>
        <div className="bg-white text-black px-72">
          <ul>
            <li>{data.phnom_kulen.title}</li>
            <li>{data.phnom_kulen.content1}</li>
            <li>{data.phnom_kulen.content2}</li>
            <li>{data.phnom_kulen.content3}
              <ul>
                <li>{data.phnom_kulen.point1}</li>
                <li>{data.phnom_kulen.point2}</li>
              </ul>
            </li>
            <li>{data.phnom_kulen.content4}
              <ul>
                <li>{data.phnom_kulen.point3}</li>
                <li>{data.phnom_kulen.point4}</li>
              </ul>
            </li>
            <li>{data.phnom_kulen.content5}
              <ul>
                <li>{data.phnom_kulen.point5}</li>
                <li>{data.phnom_kulen.point6}</li>
              </ul>
            </li>
            <li>{data.phnom_kulen.content6}
              <ul>
                <li>{data.phnom_kulen.point7}</li>
                <li>{data.phnom_kulen.point8}</li>
              </ul>
            </li>
            <li>{data.phnom_kulen.content7}
              <ul>
                <li>{data.phnom_kulen.point9}</li>
                <li>{data.phnom_kulen.point10}</li>
              </ul>
            </li>
            <li>{data.phnom_kulen.content8}</li>
          </ul>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
