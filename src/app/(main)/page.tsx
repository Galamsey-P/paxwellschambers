import ClientCard from "@/components/cards/client-card";
import PracticeCard from "@/components/cards/practice-card";
import TestimonialCard from "@/components/cards/testimonial-card";
import { GridXOverflowContainer } from "@/components/containers";
import Subtitle from "@/components/hierachy/subtitle";
import { AbsoluteImage, RelativeImage } from "@/components/image";
import { OpaqueHeader } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { isValidArray } from "@/helpers/array";
import { CLIENTS, PRACTICES, TESTIMONIALS } from "@/lib/data";
import Link from "next/link";

const stats = [
  {
    count: "54+",
    label: "cases won"
  },
  {
    count: "20+",
    label: "staying clients"
  },
  {
    count: "8+",
    label: "partners"
  },

];

export default function Home() {

  return (
    <OpaqueHeader>
      <main className="bg-white">

      
      <section className="p-8 flex flex-col items-center justify-between h-full w-full gap-16 min-h-[70vh] lg:min-h-[90vh] relative ">
        <div className="max-w-2xl flex flex-col gap-8 text-center">

          <h1 className=" ">
            Trusted legal <span className="text-deep-sb">partners</span> that
            bring you real, working <span className="text-deep-sb">legal solutions</span>.
          </h1>
          <p className="">
            Lorem ipsum dolor set ifcet, capari, son simit Lorem ipsum dolor set ifcet,
            capari, son simit. Lorem ipsum dolor set ifcet, capari, son simit
            Lorem ipsum dolor set ifcet, capari, son simit
          </p>
          <div className="flex items-center justify-center gap-2 lg:gap-4 xl:max-w-[90%] w-full mx-auto">
            <Link href="/contact" className="w-full">
              <Button className="w-full">
                Talk to Us
              </Button>
            </Link>
            <Link href="/about" className="w-full">
              <Button className="w-full" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center  w-full justify-between gap-8">
          <div className=" w-full max-w-2xl  grid grid-cols-3 gap-4 lg:gap-8">
            {
              isValidArray(stats) && stats?.map(({ count, label }, idx) => (
                <div className="flex flex-col gap-4 text-center items-center justify-center w-full" key={idx}>
                  <h1>
                    {count}
                  </h1>
                  <p>
                    {label}
                  </p>
                </div>
              ))
            }
          </div>
          <RelativeImage src="arrow.png" containerStyles="w-[100px] lg:w-[150px]  " width={226} height={226} />
        </div>
          <AbsoluteImage src="scales.png" style='left-0 bottom-0 w-[200px] md:w-[350px] lg:w-[500px]  xl:w-[600px]  2xl:w-[700px]  ' width={739} height={729} />
      </section>
      <section className="bg-gradient-to-b lg:bg-gradient-to-r from-[#486A8133]  to-[#2E556F33] h-full min-h-[90vh] relative ">
        <div className="container w-full flex flex-col  lg:flex-row items-center h-full min-h-[90vh] mx-auto relative">
          <div className=" w-full flex flex-col  h-full justify-center gap-4 max-w-xl py-12 px-2">
            <Subtitle title="who we are" />
            <h2>
              A Law Firm with <span className="text-deep-sb"> over 50
                years</span> of legal experience
              and case winnings.
            </h2>
            <p className="text-neutral-600">
              Lorem ipsum dolor set ifcet, capari, son simit Lorem
              ipsum dolor set ifcet, capari, son simit. Lorem ipsum
              dolor set ifcet, capari, son simit. Lorem ipsum dolor
              set ifcet, capari, son simit
            </p>
            <Link href="/about">
              <Button className="w-max">
                Learn More
              </Button>
            </Link>
          </div>

          <AbsoluteImage src="lawyers.png" style=" w-[390px] xl:w-[600px]  2xl:w-[779px] lg:right-10 bottom-0 " width={779} height={724} />
        </div>
      </section>
      <section className="container mx-auto  py-8 grid grid-cols-1 lg:grid-cols-2 px-4 gap-4">
        <div className="grid grid-cols-2 max-lg:gap-2 lg:gap-x-4">
          {isValidArray(PRACTICES) && PRACTICES.map((label, idx) => (
            <PracticeCard label={label} key={idx} />
          ))}
        </div>
        <div className=" w-full flex flex-col text-right  max-lg:text-center h-full justify- ml-auto items-end max-lg:items-center gap-4 max-w-xl py-16 ">
          <Subtitle title="our services" />
          <h2>
            Our Firm handles legal cases in <span className="text-deep-sb"> whatever</span> area you may need
          </h2>
          <p className="text-neutral-600">
            Lorem ipsum dolor set ifcet, capari, son simit Lorem
            ipsum dolor set ifcet, capari, son simit. Lorem ipsum
            dolor set ifcet, capari, son simit. Lorem ipsum dolor
            set ifcet, capari, son simit
          </p>
          <Link href="/about">
            <Button className="w-max">
              Learn More
            </Button>
          </Link>
        </div>
      </section>
      <section className="lg:py-20"></section>
      <section className="bg-[#F6F6F6] h-full min-h-[70vh] relative px-4 ">
        <div className="container w-full flex flex-col  lg:flex-row items-center h-full min-h-[70vh] mx-auto relative">
          <div className=" w-full flex flex-col  h-full justify-center gap-4 max-w-2xl mr-auto  py-12 px-2 ">
            <Subtitle title="OUR VISION & MISSION" />
            <h2>
              To remain a <span className="text-deep-sb"> top firm</span> that offers the <span className="text-deep-sb"> best legal services </span>
              and a <span className="text-deep-sb">pillar</span> in the society of law.
            </h2>
            <p className="text-neutral-600">
              Lorem ipsum dolor set ifcet, capari, son simit Lorem
              ipsum dolor set ifcet, capari, son simit. Lorem ipsum
              dolor set ifcet, capari, son simit. Lorem ipsum dolor
              set ifcet, capari, son simit
            </p>
            <Link href="/about">
              <Button className="w-max">
                Work With Us
              </Button>
            </Link>
            <RelativeImage src="golawyers.png" width={842} height={928} containerStyles="w-full xl:w-[650px]  2xl:w-[810px] xl:hidden mt-4" />
          </div>

        </div>
        <AbsoluteImage src="golawyers.png" style=" w-full xl:w-[450px]  2xl:w-[810px] lg:-right-4 -bottom-20 hidden xl:block " width={842} height={928} />
      </section>
      <section className="lg:py-16"></section>

      <section className="pb-12 flex flex-col gap-8 w-full">
        <div className="container mx-auto ">

          <Subtitle title="Testimonials" className="ml-auto w-max  " />
          <div className="max-w-xl mx-auto text-center flex flex-col gap-4 mt-4">
            <h2 className="text-center">
              Don&apos;t believe us? <br /> Hear us <span className="text-deep-sb">them!</span>
            </h2>
            <p >
              Over 100+ clients satisfied with our countless services, because
              with us, the clients needs are the most important and getting them
              wins is what we do.
            </p>
          </div>
        </div>
        <GridXOverflowContainer breakpoint={3400} styles="grid-cols-4 gap-4 mx-auto" mobileStyles=" gap-4" >
          {
            isValidArray(TESTIMONIALS) && TESTIMONIALS.map((test, idx) => (
              <TestimonialCard item={test} key={idx} />
            ))
          }
        </GridXOverflowContainer>
      </section>
      <section className="py-20 flex flex-col gap-8">
        <h2 className="text-center mx-auto">
          Our Clients
        </h2>
        <GridXOverflowContainer breakpoint={3400} styles="grid-cols-4 gap-4 mx-auto" mobileStyles=" gap-4" >
          {
            isValidArray(CLIENTS) && CLIENTS.map((client, idx) => (
              <ClientCard item={client} key={idx} />
            ))
          }
          {
            isValidArray(CLIENTS) && CLIENTS.map((client, idx) => (
              <ClientCard item={client} key={idx} />
            ))
          }
          {
            isValidArray(CLIENTS) && CLIENTS.map((client, idx) => (
              <ClientCard item={client} key={idx} />
            ))
          }
        </GridXOverflowContainer>


      </section>
      </main>
    </OpaqueHeader>
  );
}
