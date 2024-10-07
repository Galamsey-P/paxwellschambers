import TitanCard from "@/components/cards/titan-card";
import { HeroContainer } from "@/components/containers";
import Subtitle from "@/components/hierachy/subtitle";
import { RelativeImage } from "@/components/image";
import { TransparentHeader } from "@/components/navigation";
import { TITANS } from "@/components/navigation/data";
import { isValidArray } from "@/helpers/array";

export default function About() {
    return (
        <TransparentHeader>
            <HeroContainer subtitle="find out" title="About Us" background="about-hero.jpeg" />
            <section className="container flex flex-col mx-auto min-h-[110vh] gap-4  justify-center p-4">
                <Subtitle title="who we are" />
                <h2>
                    We Are <span className="text-deep-sb">Pax & Wells</span> (Dubik & Associates)
                </h2>
                <br />
                <p>
                    Pax and Wells Chambers has been in existence since 2005. It was previously known as Flosus Chambers-Dubik, Onny & Associates till it was rebranded in August
                    2018. The firm was set up by Dubik Yakubu Mahama Esq. and Komla Onny Esq. who were both called to the Ghana Bar in the year 1993.
                    <br />
                    <br />
                    Dubik Yakubu Mahama is a very seasoned lawyer in the area of Taxation, Corporate Law, Maritime Law, Immovable Property Law, Divorces and others. His
                    seasoned career spans over 30 years of public service work before adopting full time practice. The current partners of the firm are Dubik Yakubu Mahama Esq.
                    as the Managing Partner, Akrofi Kumoji Esq., Samuel Dubik Mahama Esq. and Emmanuel L. Dubik Mahama Esq.
                    <br />
                    <br />
                    He has represented prominent persons, companies and corporations to date. Currently the firm has prominence in the legal field in Ghana and represent a variety
                    of clients not only within Ghana but across the world.
                    <br />
                    <br />
                    The law firm currently has world class lawyers within and beyond Ghana dedicated to ensuring the best interest of their clientele.
                </p>
            </section>
            <section className="bg-[#F6F6F6] py-20 min-h-screen">
                <div className="container mx-auto">
                    <Subtitle title="our vision" />
                </div>
                <div className=" w-full flex items-center max-lg:flex-col-reverse justify-between gap-4">
                    <RelativeImage src='vision.png' width={842} height={828} containerStyles="lg:hidden w-[350px] md:w-[550px]" />
                    <RelativeImage src='vision.png' width={842} height={828} containerStyles=" hidden lg:block  lg:w-[620px] 2xl:w-[842px] mx-auto translate-y-[19.5%]" />
                    <div className="lg:text-right container flex flex-col gap-4  lg:max-w-xl lg:mr-20">
                        <h2>
                            To remain an ambitious,
                            <span className="text-deep-sb"> world class</span>   firm that
                            supports our clients.
                        </h2>
                        <p>
                            Our vision is to be a global world class law firm, profitable,
                            ambitious, cooperative and considerate, supporting our
                            clients and people through our transparency
                            and integrity motivated by always
                            putting the client first.
                        </p>
                    </div>
                </div>


            </section>
            <section className="py-10 bg-white">

            </section>
            <section className="bg-[#F6F6F6] flex flex-col gap-8 py-20 min-h-[80vh]">
                <div className="container mx-auto">
                    <Subtitle title="our mission" />
                </div>
                <div className=" w-full flex items-center max-lg:flex-col justify-between gap-4 ">
                    <div className="text-left container flex   flex-col gap-4 lg:max-w-xl lg:ml-20">
                        <h2>
                            <span className="text-deep-sb"> Dedication</span> to Justice and
                            <span className="text-deep-sb"> exceptional service </span> to our clients.
                        </h2>
                        <p >
                            We deliver tailored legal solutions with integrity
                            and precision. Our experienced attorneys are dedicated
                            to protecting your rights and guiding you through every
                            legal challenge. With a focus on achieving results that
                            secure your future, we provide both peace of mind and
                            long-term success.
                        </p>
                    </div>
                    <RelativeImage src='mission.png' width={842} height={828} containerStyles=" lg:hidden w-[350px] md:w-[550px] " />
                    <RelativeImage src='mission.png' width={842} height={828} containerStyles=" hidden lg:block lg:w-[620px] 2xl:w-[842px] mx-auto lg:translate-y-[19.5%]" />
                </div>

            </section>
            <section className="py-10 bg-white">

            </section>
            <section className="bg-[#F6F6F6] py-10 min-h-screen flex items-center justify-center ">
                <div className="container mx-auto flex flex-col items-center justify-center w-full h-full gap-8">
                    <h2 className="text-center">
                        Meet the Titans
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:max-w-6xl w-full  mx-">
                        {
                            isValidArray(TITANS) && TITANS.map((titan, idx) => (
                                <TitanCard key={idx} item={titan} />
                            ))
}
                    </div>
                </div>
            </section>
        </TransparentHeader>
    );
}