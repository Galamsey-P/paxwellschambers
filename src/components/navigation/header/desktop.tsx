"use client";

import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { PAGES } from "../data";
import { isValidArray } from "@/helpers/array";
import { stringify } from "@/helpers/string";
import NavigationLink from "../core/link";


export default function DesktopNav() {

    return (
        <div>
            <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    {
                        isValidArray(PAGES) && PAGES.map((page) => (
                            <NavigationLink  key={stringify(page?.href + page?.title)} item={page} />
                        ))
                    }
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}