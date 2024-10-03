import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";

type Props = {
    src: string;
    alt?: string;
    style: ClassValue;
    object?: "contain" | "cover";
    priority?: boolean;

};

export default function AbsoluteImage({ src, alt, style, object, priority}: Props) {
    return (
        <div className={cn("absolute ", style)}>
            <Image
                fill
                alt={alt || ""}
                src={`/images/${src}`}
                priority={priority || false}
                className={cn('object-contain', object === "cover" && "object-cover")} />
        </div>
    );
}