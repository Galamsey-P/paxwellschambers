import { ClassValue } from "clsx";
import { LogoVariant, logoVariantMap } from "./index.types";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/context/navigation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";

type Props = {
    variant?: LogoVariant;
    className?: ClassValue;
};

export default function Logo({ className, variant }: Props) {
    const { logoVariant } = useNavigation();

    return (
        <Link href="/">
            <div className={cn("w-[30px] md:w-[40px] 2xl:w-[52px]", className)}>
                <AspectRatio ratio={52 / 78}>
                    <Image src={`/images/${logoVariantMap[variant || logoVariant]}`} alt={`${logoVariant} logo`} width={52} height={78} className={cn("", className)} priority />
                </AspectRatio>
            </div>
        </Link>
    );
}