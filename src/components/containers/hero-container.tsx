import { cn } from "@/lib/utils";
import { Fragment } from "react";
import Subtitle from "../hierachy/subtitle";

type Props = {
    subtitle: string;
    title: string;
    background: string;
};

export default function HeroContainer({ background, subtitle, title }: Props) {
    return (
        <Fragment>
            <section className={cn(
                "h-screen w-screen overflow-hidden absolute top-0 bg-cover bg-no-repeat bg-center z-1"
            )} style={{
                backgroundImage: `url('/images/${background}')`,
                backgroundAttachment: "fixed"
            }}>
                <div className="w-full h-screen bg-black/60 pb-24 text-whyte flex items-end">
                    <div className="flex flex-col mt-auto container mx-auto">
                        <Subtitle title={subtitle} className="text-white/80" />
                        <h1 className="capitalize">
                        {title}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="lg:h-[70vh] h-[90vh]">

            </section>
        </Fragment>
    );
}