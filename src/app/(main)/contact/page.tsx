import { HeroContainer, MapContainer } from "@/components/containers";
import Subtitle from "@/components/hierachy/subtitle";
import { AbsoluteImage } from "@/components/image";
import { TransparentHeader } from "@/components/navigation";
import { isValidArray } from "@/helpers/array";
import { CONTACT } from "@/lib/data";
import Link from "next/link";

export default function Contact() {
    return (
        <TransparentHeader>
            <HeroContainer subtitle="feel free to" title="Contact Us" background="contact-hero.jpeg" />

            <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#486A811A]  to-[#2E556F1A] h-full lg:mt-8 min-h-[110vh]  ">
                <div className="container w-full flex flex-col  lg:flex-row items-center h-full min-h-[110vh] mx-auto relative">
                    <div className=" w-full flex flex-col  h-full justify-center gap-4 max-w-2xl py-12 ">
                        <Subtitle title="REACH OUT TO US" />
                        <h2>
                            Feel free to reach out to us!<br />
                            We would love to hear from you.
                        </h2>
                        <p className="text-neutral-600">
                            We encourage you to call us or walk into our office. We would love
                            to hear from you and offer you our services the best way because you,
                            our client, deserves the best
                        </p>

                        <div className="flex flex-col gap-1">
                            <p className="mb-2 text-neutral-600">
                                Email:
                            </p>
                            {
                                isValidArray(CONTACT?.emails) && CONTACT?.emails.map((email, idx) => (
                                    <Link href={`mailto:${email}`} key={idx} className="hover:underline font-bold transition duration-300" >
                                        {email?.toLowerCase()}
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="mb-2 text-neutral-600">
                                Phone:
                            </p>
                            {
                                isValidArray(CONTACT?.phones) && CONTACT?.phones.map((email, idx) => (
                                    <Link href={`tel:${email}`} key={idx} className="hover:underline font-bold transition duration-300" >
                                        {email?.toLowerCase()}
                                    </Link>
                                ))
                            }
                        </div>

                    </div>

                    <AbsoluteImage src="contact-man.png" style=" w-[390px] lg:w-[600px] xl:w-[700px]  2xl:w-[790px] lg:right-10 bottom-0 " width={814} height={813} />
                </div>
            </section>
            <MapContainer />
        </TransparentHeader>
    );
}