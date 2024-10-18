/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import bg from "../app/img/header.png";
import st from "../app/img/setion.png";
import Link from "next/link";

import angkorwat from "../app/destination/Picture/angkor_wat/angkorwat1.jpg";
import bakong from "../app/destination/Picture/bakong/bakonghome.jpeg";
import phnomkulen from "../app/destination/Picture/kulen/PhnomKulen1.jpg";
import angkorthom from "../app/destination/Picture/angkor_thom/angkor_thom1.png";
import Footer from "./Footer";
import Header from "./Header";
import Team from "@/app/Team";

const page = () => {
  return (
    <html>
      <body>
        <div>
          {/* Header */}
          <Header/>
          {/* textarea */}
          <div className="relative h-screen bg-white">
            <div className="absolute inset-0 -z-90">
              <Image
                src={bg}
                alt="Descriptive text for screen readers"
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-6 xl:gap-x-8">
                <h1 className="max-w-2xl text-7xl font-serif font-bold tracking-tight text-gray-900 sm:text-8xl lg:col-span-2 xl:col-auto">
                  Travel to the <br /> any corner <br />
                  of <span className="text-red-500">Siem Reap</span>
                </h1>
                <p className="text-xl text-red-500">
                  We can build the holidays of your trip and <br /> make them
                  unforgettable
                </p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
          </div>
        </div>
        {/* toptrips */}
        <div>
          <div className="bg-white">
            <div className="mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <p className="mt-4 pb-6 text-base text-red-500">Top trips</p>
              <div className="inline-grid grid-cols-2 gap-[300px]">
                <h1 className="text-5xl font-bold font-serif tracking-tight text-gray-900">
                  Explore Top Trips
                </h1>
                <Link
                  href="/destination"
                  className="text-red-500 text-end p-4 font-lg font-semibold "
                >
                  <span>See More...</span>
                </Link>
              </div>

              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
              >
                <li>
                  <Link href="/destination/angkorwat">
                    <span className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      <Image
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                        src={angkorwat}
                        width={227}
                        height={393}
                        alt="angkorwat"
                      />
                      Angkor Wat
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/bakong">
                    <span className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      <Image
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                        src={bakong}
                        width={227}
                        height={393}
                        alt="bakong"
                      />
                      Bakong Temple
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/PhnomKulen">
                    <span className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      <Image
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                        src={phnomkulen}
                        width={227}
                        height={393}
                        alt="phnomkule"
                      />
                      Phnom Kulen
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/destination/angkorthom">
                    <span className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                      <Image
                        className="aspect-[3/2] w-full rounded-2xl object-cover"
                        src={angkorthom}
                        width={227}
                        height={393}
                        alt="angkorthom"
                      />
                      Angkor Thom
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* hotel */}
        <div>
          <div className="relative bg-white h-screen">
            <div className="absolute inset-0 -z-90">
              <Image
                src={st}
                alt="Descriptive text for screen readers"
                layout="fill"
                objectFit="cover"
                className="h-full w-full"
              />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <p className="mt-4 pb-6 text-base text-red-500">HOW WE WORK</p>
              <h1 className="text-7xl font-bold font-serif tracking-tight text-gray-900 sm:text-9xl">
                We Offer Best Service
              </h1>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/destination"
                  className="rounded-md bg-red-400 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  Choose Your trips
                </Link>
                <Link
                  href="/Hotel"
                  className="rounded-md bg-red-400 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
                >
                  Four-Five Star Hotel <span aria-hidden="true"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* about team */}
        <div>
          <Team/>
        </div>
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
};

export default page;
