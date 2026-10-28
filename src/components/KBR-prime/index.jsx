import dynamic from "next/dynamic";
import Hero from "./Hero";
import Hero2 from "./Hero2";

const Amenities = dynamic(() => import("./Amenities"), {
  loading: () => <div className="min-h-[400px] bg-[#f4f4f4]" />,
});

const Configurations = dynamic(() => import("./Configurations"), {
  loading: () => <div className="min-h-[400px] bg-[#1E3D34]" />,
});

const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => <div className="min-h-[600px] bg-[#f4f4f4]" />,
});

export default function KBRPrime() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Amenities />
      <Configurations />
      <Gallery />
    </>
  );
}
