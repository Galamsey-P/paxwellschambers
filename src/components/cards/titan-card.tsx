"use client";

import { TITANS } from "../navigation/data";
import Image from "next/image";

type Props = {
    item: typeof TITANS[0];
};

export default function TitanCard({ item }: Props) {
    return (
        <div className="w-full relative overflow-hidden cursor-pointer group p-4 rounded" style={{ paddingBottom: "200%" }}>
            <Image
                src={`/images/${item.image}`}
                alt={item.name}
                layout="fill"
                className="absolute inset-0 transition-transform object-cover duration-300 group-hover:scale-105 "
            />
            <div className="absolute bottom-2 left-2 right-2  text-center rounded bg-white p-2">
                <p className="text-sm font-serif uppercase font-bold line-clamp-1">{item.name}</p>
                <p className="text-xs text-semibold line-clamp-1">{item.education}</p>
                <p className="text-xs text-gray-500">{item.position}</p>
            </div>
            <div className="absolute inset-0 bg-deep-sb  p-2 flex flex-col items-center justify-between text-center  transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <div className="w-full text-center bg-white p-2 rounded">
                    <p className="text-base font-serif font-bold ">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.education}</p>
                    <p className="text-xs text-gray-600">{item.position}</p>
                </div>
                <div className="w-full">

                <p className="text-white">{item.description}</p>
                </div>
            </div>
        </div>
    );
}