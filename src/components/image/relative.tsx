import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { CSSProperties } from "react";
import { stringify } from "@/helpers/string";

type Props = {
    src?: string;
    alt?: string;
    containerStyles: ClassValue;
    object?: "cover" | "contain" | "none";
    innerStyles?: ClassValue;
    priority?: boolean;
    containerHTMLStyles?: CSSProperties;
};

export default function RelativeImage({ containerStyles, src, alt, innerStyles, object, priority, containerHTMLStyles,  }: Props) {
    return (
        <div className={cn("relative flex-shrink-0 select-none  ", containerStyles)} style={containerHTMLStyles}>

            <Image
                draggable={false}
                src={`/images/${stringify(src)}`}
                alt={stringify(alt) || ""}
                fill
                priority={priority || false}
                className={cn(
                    "object-contain flex-shrink-0",
                    object === "cover" && "object-cover",
                    object === "contain" && "object-contain",
                    object === "none" && "object-none",
                    innerStyles
                )}
            />
        </div>
    );
}