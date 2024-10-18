import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from 'path'
import { fstat } from "fs";
import Image from "next/image";
import about from '../img/about.png'
import Footer from "../Footer";
import Header from "../Header";


async function getData() {
    
  const path = process.cwd() + '/src/app/data/aboutdata.json';
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}


export default async function HomePage() {
  const data = await getData();
  return (
    <html>
      <body>
        <div>
          <Header/>
        </div>
          <div className="bg-white text-black text-lg px-72">
            <ul>
            <li className="flex justify-center items-center px-14 py-14"><Image src={about} width={500} height={259} alt="aboutus"/></li>
            <li>{data.title}</li>
            <li>{data.content}</li>
            <li>{data.title1}</li>
            <li>{data.content1}</li>
            <li>{data.title2}</li>
            <li>{data.content2}
              <ul className="pl-3">
                <li>{data.point1}</li>
                <li>{data.point2}</li>
                <li>{data.point3}</li>
              </ul>
            </li>
            <li>{data.title3}
              <ul className="pl-3">
                <li>{data.point31}</li>
                <li>{data.point32}</li>
                <li>{data.point33}</li>
              </ul>
            </li>
            <li>{data.title4}</li>
            <li>{data.content4}</li>
          </ul>
          </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}

