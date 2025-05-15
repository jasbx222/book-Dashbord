"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardData {
  title: string;
  value: string;
  href: string;
  icon: string | StaticImageData;
}

interface CardsSummaryProps {
  items: CardData[];
}

const CardsSummary: React.FC<CardsSummaryProps> = ({ items }) => {
  return (
    <div className="flex relative top-12 flex-col md:flex-row gap-4 justify-center items-center w-full">
      {items.map((card, index) => (
        <Link href={card.href} key={index}>
          <div className="flex flex-col items-center justify-center w-60 h-44 bg-white rounded-2xl shadow-sm transition-all border-2 border-purple-300">
            {card.icon && (
              <Image
                className="mb-3"
                alt="icon"
                width={50}
                height={50}
                src={card.icon}
              />
            )}
            <div className="text-lg font-semibold">{card.value}</div>
            <div className="text-gray-500 text-sm mt-1">{card.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardsSummary;
