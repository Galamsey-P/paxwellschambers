import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Minus } from "lucide-react";

type Props = {
    title?: string;
    className?:ClassValue
};
export default function Subtitle({ title, className }: Props) {
    return (
        <div className={cn("flex items-end relative gap-3 text-neutral-600", className)} >
            <Minus strokeWidth={.7} className="absolute -bottom-2 size-6" />
            <p className="uppercase ml-5">
                {title}
            </p>
        </div>
    );
}