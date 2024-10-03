"use client"
import useActivePath from "@/hooks/use-active-path";
import Link from "next/link";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { PAGES } from "../data";
import { ClassValue } from "clsx";
import { useNavigation } from "@/context/navigation";

type Props = {
    item: typeof PAGES[0];
    className?: ClassValue
};

export default function NavigationLink({ item, className }: Props) {
    const { isTransparent } = useNavigation()

    const { href, title } = item;
    const isActive = useActivePath(href);
    return (
        <Link href={href} legacyBehavior passHref>
            <NavigationMenuLink className={cn(
                navigationMenuTriggerStyle(),
                "font-normal px-4 text-base ",
                (isTransparent && !isActive ) && "text-neutral-400 hover:bg-black/50",
                (!isTransparent && !isActive ) && "text-neutral-600 hover:bg-whyte",
                (!isTransparent && isActive) && "font-medium hover:bg-whyte",
                (isTransparent && isActive) && "font-medium text-whyte hover:bg-black/50",
                className
            )}>
                {title}
            </NavigationMenuLink>
        </Link>
    );
}