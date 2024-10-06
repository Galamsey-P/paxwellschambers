// "use client"

import { ContactForm } from "@/forms";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Subtitle from "@/components/hierachy/subtitle";
import Logo from "../logo";
import { FOOTER_CONTACT } from "@/lib/data";
import { isValidArray } from "@/helpers/array";
import Link from "next/link";



export default function Footer() {
    return (
        <footer className={cn(
            "bg-deep-sb min-h-screen lg:min-h-[90vh] flex flex-col gap-8 justify-between text-white pt-20 pb-8 "
        )}>

            <div className={cn(
                "container mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "
            )}>
                <div className="col-span-1 xl:col-span-2  flex flex-col justify-between min-h-[50vh]">
                    <div className="flex flex-col gap-2">
                        <Subtitle title="contact" className="text-white/70" />
                        <h2 className="font-sans uppercase font-bold tracking-wider">
                            LET&apos;S TALK
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Logo variant="white" className="2xl:w-[80px]" />
                        <div className="flex flex-col gap-2">
                            <p>
                                {FOOTER_CONTACT.address}
                            </p>

                            {
                                isValidArray(FOOTER_CONTACT?.emails) && FOOTER_CONTACT?.emails.map((email, idx) => (
                                    <Link href={`mailto:${email}`} key={idx} className="hover:underline transition duration-300" >
                                        {email?.toLowerCase()}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <ContactForm />
            </div>

            <Separator className="bg-whyte/10 mt-auto" />

            <div className="mt-auto  pt-8">
                <div className={cn(
                    "container mx-auto flex items-center justify-between text-white/70 text-sm"
                )}>
                    <p>
                        Pax & Wells (Dubik & Associates) 2024
                    </p>
                    <p>
                        All rights reserved
                    </p>

                </div>

            </div>
        </footer>
    );
}