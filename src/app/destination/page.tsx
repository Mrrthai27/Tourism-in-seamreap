import React from "react";
import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import { join } from "path";
import { fstat } from "fs";
import Header from "../Header";
import Footer from "../Footer";
import DestinationList from "./desinationlist";

async function getData() {
  const path = process.cwd() + "/src/app/data/destionation.json";
  const file = await fs.promises.readFile(path, "utf8");
  const data = JSON.parse(file);
  return data;
  //return path;
}

export default async function destination() {
  const data = await getData();
  return (
    <html>
      <body>
        <div>
          <Header />
        </div>
        <div>
          <DestinationList />
        </div>
        <Footer />
      </body>
    </html>
  );
}
