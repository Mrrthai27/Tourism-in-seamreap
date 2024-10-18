"use client";
import Image from "next/image";
import Link from "next/link";
import angkorwat from "../destination/Picture/angkor_wat/angkorwat1.jpg";
import bakong from "../destination/Picture/bakong/bakonghome.jpeg";
import phnomkulen from "../destination/Picture/kulen/PhnomKulen1.jpg";
import angkorthom from "../destination/Picture/angkor_thom/angkor_thom1.png";
import kampongpluk from "../destination/Picture/kompongPhluk/kampotplug1.jpg";
import kohker from "../destination/Picture/kohker/kohker1.jpg";
import Srcountryside from "../destination/Picture/countryside/countryside1.jpg";
import pubstresst from "../destination/Picture/pubstresst/pub-street1.jpg";

const destinations = [
  {
    href: "/destination/angkorwat",
    src: angkorwat,
    alt: "angkorwat",
    title: "Angkor Wat",
  },
  {
    href: "/destination/bakong",
    src: bakong,
    alt: "bakong",
    title: "Bakong Temple",
  },
  {
    href: "/destination/PhnomKulen",
    src: phnomkulen,
    alt: "phnomkule",
    title: "Phnom Kulen",
  },
  {
    href: "/destination/angkorthom",
    src: angkorthom,
    alt: "angkorthom",
    title: "Angkor Thom",
  },
  {
    href: "/destination/kampongphluk",
    src: kampongpluk,
    alt: "kompongPhluk",
    title: "Kampong Phluk",
  },
  {
    href: "/destination/Kohker",
    src: kohker,
    alt: "kohker",
    title: "Koh Ker",
  },
  {
    href: "/destination/SiemReapCountryside",
    src: Srcountryside,
    alt: "Srcountryside",
    title: "Siem Reap Countryside",
  },
  {
    href: "/destination/PubStreets",
    src: pubstresst,
    alt: "pubstreets",
    title: "Pub Streets",
  },
];

const DestinationList = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Recommended Destination
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {destinations.map((destination) => (
            <li key={destination.href}>
              <Link href={destination.href}>
                <span className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  <Image
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                    src={destination.src}
                    width={227}
                    height={393}
                    alt={destination.alt}
                  />
                  {destination.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DestinationList;
