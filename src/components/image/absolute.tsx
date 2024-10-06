import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";


type Props = {
    src: string;
    alt?: string;
    style: ClassValue;
    object?: "contain" | "cover";
    priority?: boolean;
    width: number; // original width
    height: number; // original height
};

export default function AbsoluteImage({ src, alt, style, object, priority, height, width }: Props) {
    return (
        <div className={cn("absolute ", style)}>
            <AspectRatio ratio={width/height}>
                <Image
                    draggable={false}
                    width={width}
                    height={height}
                    alt={alt || ""}
                    src={`/images/${src}`}
                    priority={priority || false}
                    className={cn('object-contain', object === "cover" && "object-cover")} />
            </AspectRatio>
        </div>
    );
}