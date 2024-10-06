import Image from "next/image";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { CSSProperties } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { stringify } from "@/helpers/string";

type Props = {
    src?: string;
    alt?: string;
    containerStyles: ClassValue;
    object?: "cover" | "contain" | "none";
    innerStyles?: ClassValue;
    priority?: boolean;
    containerHTMLStyles?: CSSProperties;
    width: number; // original width
    height: number; // original height
};

export default function RelativeImage({ containerStyles, src, alt, innerStyles, object, priority, containerHTMLStyles, height, width}: Props) {
    return (
        <div className={cn("relative flex-shrink-0 select-none  ", containerStyles)} style={{
            ...containerHTMLStyles,
        }}>
            <AspectRatio ratio={width/height}>
                <Image
                    draggable={false}
                    src={`/images/${stringify(src)}`}
                    alt={stringify(alt) || ""}
                    // fill
                    width={width}
                    height={height}
                    priority={priority || false}
                    className={cn(
                        "object-contain flex-shrink-0",
                        object === "cover" && "object-cover",
                        object === "contain" && "object-contain",
                        object === "none" && "object-none",
                        innerStyles
                    )}
                />
            </AspectRatio>
        </div>
    );
}