import PracticeCard from "@/components/cards/practice-card";
import { HeroContainer } from "@/components/containers";
import Subtitle from "@/components/hierachy/subtitle";
import { AbsoluteImage } from "@/components/image";
import { TransparentHeader } from "@/components/navigation";
import { isValidArray } from "@/helpers/array";
import { PRACTICES2 } from "@/lib/data";

export default function Practices() {
    return (
        <TransparentHeader>
            <HeroContainer subtitle="all of" title="our practices" background="practices-hero.jpeg" />

            <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#486A811A]  to-[#2E556F1A] h-full lg:mt-8 min-h-[110vh] relative ">
                <div className="container w-full flex flex-col  lg:flex-row items-center h-full min-h-[110vh] mx-auto ">
                    <div className=" w-full flex flex-col  h-full justify-center gap-4 max-w-2xl py-12 px-2">
                        <Subtitle title="what we provide" />
                        <h2>
                            We offer <span className="text-deep-sb">legal assistance</span>  in a wide
                            range of areas.
                        </h2>
                        <p className="text-neutral-600">
                            With a dedicated team of experienced cream of the crop lawyers, Pax & Wells has dedicated
                            itself to providing top notch legal services across varied practice areas.
                            <br />
                            <br />
                            <br />
                            Our lawyers know that the best way to address our clients&apos; legal issues is to understand their
                            business and industry and most importantly their peculiar needs. Your case is important to us
                            — read on to learn about our areas of expertise.
                        </p>



                    </div>

                </div>
                <AbsoluteImage src="gavl.png" style="w-[350px] xl:w-[570px]  2xl:w-[634px] right-0 bottom-0 " width={634} height={833} />
            </section>
            <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#486A811A]  to-[#2E556F1A] min-h-screen flex flex-col gap-8 items-center justify-center pb-4 px-2">
                <h2 className="text-center">
                    We specialize in
                </h2>
                <div className=" grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    {
                        isValidArray(PRACTICES2) && PRACTICES2.map((practice, idx) => (
                            <PracticeCard label={practice} key={idx} />
                        ))
                    }
                </div>

            </section>
        </TransparentHeader>
    );
}