import Image from "next/image";
import Configurations from "@/components/Configurations";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <div>
      <Hero1 />
      {/* <Hero />
      <Configurations />
      <Amenities />
      <Gallery /> */}
    </div>
  );
}
