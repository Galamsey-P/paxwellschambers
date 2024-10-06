
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
    SheetClose,
    SheetFooter,
    SheetTitle
} from "@/components/ui/sheet";
import Logo from "../logo";
import { Menu } from "lucide-react";
import { isValidArray } from "@/helpers/array";
import { PAGES } from "../data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/context/navigation";
import { cn } from "@/lib/utils";


export default function MobileNav() {
    const {isTransparent } = useNavigation()
    return (
        <Sheet>
            <SheetTrigger className="md:hidden">
                <Menu className={cn(isTransparent ? "text-whyte" : "text-primary")} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <Logo variant="colored" className="mx-auto w-[75px] py-4" />
                    <SheetTitle></SheetTitle>
                    <SheetDescription className="font-sans mx-auto text-center w-full max-w-[80%]">
                        Trusted legal partners that
                        bring you real, working
                        legal solutions.
                    </SheetDescription>
                </SheetHeader>

                <div className="font-sans  h-[60%]  flex flex-col items-center  pt-4 gap-4">
                    {isValidArray(PAGES) && PAGES.map((page, idx) => (
                        <SheetClose className=" w-full text-center py-2 hover:bg-whyte rounded-md" key={idx}>

                            <Link href={page?.href} >
                                {page?.title}
                            </Link>
                        </SheetClose>
                    ))}
                    <SheetClose asChild className="w-full">
                        <Link href="/contact" >
                            <Button className="w-full text-base">
                                Contact Us
                            </Button>
                        </Link>
                    </SheetClose>
                </div>
                <SheetFooter className="text-deep-sb text-xs text-center">
                    Pax & Wells (Dubik & Associates) 2024, All rights reserved
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}