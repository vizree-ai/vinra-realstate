import Image from "next/image";
import HomeContactControls from "./HomeContactControls";
import HomeSearch from "./HomeSearch";
import LazyProjects from "./LazyProjects";

export default function MainPage() {
  return (
    <>
      <section className="relative flex h-[85vh] w-full items-center justify-center overflow-visible md:h-[99vh]">
        <div className="absolute left-0 top-0 z-20 h-36 w-full bg-gradient-to-b from-yellow/85 via-yellow/45 to-transparent md:h-44" />

        <div className="absolute inset-0">
          <Image
            src="/hd (1).webp"
            alt="Vinra Estate homes in Bangalore"
            fill
            priority
            sizes="100vw"
            className="h-full w-full object-cover object-[54%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#04120f]/95 via-[#0a1d18]/15 via-[20%] to-transparent md:via-[60%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow/55 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl px-4 pt-16 md:px-0 md:pt-10 lg:pt-28">
          <div className="max-w-3xl text-left [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.9))_drop-shadow(0_0_18px_rgba(0,0,0,0.75))_drop-shadow(0_0_30px_rgba(0,0,0,0.6))]">
            <span className="relative whitespace-nowrap bg-gradient-to-b from-[#fff6cf] via-[#e0b347] to-[#9a6815] bg-clip-text text-[26px] font-semibold text-transparent sm:text-[40px] md:text-[25px]">
              Find. Choose. Own.
            </span>

            <h1 className="mt-3 font-semibold leading-[1.12]">
              <span className="mb-1 block font-serif text-[30px] text-[#F7F3EC] sm:text-[48px] md:text-[62px]">
                Search Affordable
                <br className="block md:hidden" />
                <span className="mb-2 mt-2 block md:mb-0 md:mt-0">
                  Homes in Bangalore
                </span>
              </span>
            </h1>

            <div className="mt-5 h-[3px] w-26 rounded-full bg-[#D8A33B] md:w-20" />

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
              Thousands of people are already exploring homes{" "}
              <br className="hidden md:block" />
              with us - join them.
            </p>

            <HomeSearch />
          </div>
        </div>
      </section>

      <LazyProjects />
      <HomeContactControls />
    </>
  );
}
