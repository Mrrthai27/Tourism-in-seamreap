import React from "react";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import { fstat } from "fs";
import Image from "next/image";
import wv1 from "../Hotel/pic/wakaVilla/waka1.jpg";
import tu1 from "../Hotel/pic/theUrban/urban1.jpg";
import ta1 from "../Hotel/pic/tara_angkor/tara1.jpg";
import pu1 from "../img/pandora.jpg";
import Footer from "../Footer";
import Header from "../Header";

async function getData() {
  const path = process.cwd() + "/src/app/data/hotel.json";
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}

export default async function hotel() {
  const data = await getData();
  console.log(data);

  return (
    <html>
      <body>
        <div>
          <Header/>
        </div>
        <div>
          <div className="bg-white py-24 md:py-32">
            <div className="mx-auto max-w-7xl   px-6 lg:px-8 ">
              <div className="max-w-2xl pb-24">
                <h2 className="text-3xl font-bold font-serif tracking-tight text-red-500 sm:text-4xl">
                  Hotel Information
                </h2>
              </div>
              <ul
                role="list"
                className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
              >
                <Link href="/Hotel/Wakavilla">
                  <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                    <Image
                      className="aspect-[3/2] w-96 flex-none rounded-2xl object-cover"
                      src={wv1}
                      alt="wv1"
                    />
                    <div className="max-w-xl flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        Waka Villa Private Resort
                      </h3>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        Private Pool Villa-1 Bedroom-Opening promotion <br />
                        Private suite • 1 bedroom • 1 living room • 1
                        bathroom • 128m² <br />• 1 extra-large double bed
                      </p>
                      <p className="text-red-400 pt-9">150 USD</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Hotel/theurban">
                  <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                    <Image
                      className="aspect-[3/2] w-96 flex-none rounded-2xl object-cover"
                      src={tu1}
                      alt="tu1"
                    />
                    <div className="max-w-xl flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        The Urban
                      </h3>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        The Urban <br /> Location Hotel in Siem Reap <br />Jungle in the city
                        centre - To explore the city on foot at your own
                        leisurely pace, <br />“The Urban” is the best choice.
                      </p>
                      <p className="text-red-400 pt-9">200 USD</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Hotel/taraangkor">
                  <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                    <Image
                      className="aspect-[3/2] w-96 flex-none rounded-2xl object-cover"
                      src={ta1}
                      alt="ta1"
                    />
                    <div className="max-w-xl flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        Tara Angkor Hotel
                      </h3>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        • Entire studio • 1 bathroom • 30m² <br />• Beds: 1
                        double or 2 singles
                      </p>
                      <p className="text-red-400 pt-9">99 USD</p>
                    </div>
                  </li>
                </Link>

                <Link href="/Hotel/PandoraSuite">
                  <li className="flex flex-col gap-10 pt-12 sm:flex-row">
                    <Image
                      className="aspect-[3/2] w-96 flex-none rounded-2xl object-cover"
                      src={pu1}
                      alt="pu1"
                    />
                    <div className="max-w-xl flex-auto">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                        Pandora Suite
                      </h3>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        Premier Deluxe Pool View <br />• 1 extra-large double
                        bed
                      </p>
                      <p className="text-red-400 pt-9">80 USD</p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
