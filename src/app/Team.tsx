"use client";
import Image from "next/image";

type Person = {
  name: string;
  role: string;
  imageUrl: string;
};

const people: Person[] = [
  {
    name: "Ngan Putin",
    role: "Leader",
    imageUrl: require("../app/img/me.jpg"),
  },
  {
    name: "Penchanthan Vithatthai",
    role: "Member",
    imageUrl: require("../app/img/thai.png"),
  },
  {
    name: "Kean Narong",
    role: "Member",
    imageUrl: require("../app/img/rong.png"),
  },
  {
    name: "Raksmey Sensopol",
    role: "Member",
    imageUrl: require("../app/img/pol.png"),
  },
  {
    name: "San Emeng",
    role: "Member",
    imageUrl: require("../app/img/meng.png"),
  },
];

export default function Team() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="mt-4 pb-6 text-base text-red-500">TESTIMONAL</p>
          <h2 className="text-4xl font-bold font-serif tracking-tight text-gray-900 sm:text-5xl">
            Our Members 
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 gap-x-6"
        >
          {people.map((person) => (
            <li
              key={person.name}
              className="rounded-2xl bg-red-100 px-8 py-10 shadow-md hover:shadow-lg transition duration-300"
            >
              <Image
                alt="#"
                src={person.imageUrl}
                className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
              />
              <h3 className="mt-6 text-lg font-bold leading-7 tracking-tight text-gray-800">
                {person.name}
              </h3>
              <p className="text-base font-semibold leading-6 text-red-500">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}