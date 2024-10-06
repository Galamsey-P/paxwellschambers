
"use client";
import { cn } from "@/lib/utils";
import React from "react";
import DesktopNav from "./desktop";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useNavigation } from "@/context/navigation";
import MobileNav from "./mobile";
import Logo from "../logo";



export default function Header() {
    const { isTransparent } = useNavigation();
    return (
        <header
            className={cn(
                "py-4 sticky top-0 z-50 w-full font-sans transition-all duration-300",
                isTransparent
                    ? "bg- backdrop-blur-md bg-black/10"
                    : "bg-white shadow"

            )}>
            <div className="container flex items-center justify-between mx-auto px-2">
                <Logo />
                <DesktopNav />
                <div className="md:flex hidden">
                    <Link href="/contact">
                        <Button>
                            Contact Us!
                        </Button>
                    </Link>
                </div>

                <MobileNav />
            </div>

        </header>
    );
}