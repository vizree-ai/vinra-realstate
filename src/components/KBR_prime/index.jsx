import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Hero2 = dynamic(() => import("./Hero2"));
const Amenities = dynamic(() => import("./Amenities"), {
  loading: () => <div className="w-full min-h-[280px]" />,
});
const Configurations = dynamic(() => import("./Configurations"), {
  loading: () => <div className="w-full min-h-[360px]" />,
});
const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => <div className="w-full min-h-[420px]" />,
});
const EnquiryForm = dynamic(() => import("../EnquiryForm"), {
  loading: () => <div className="w-full min-h-[300px]" />,
});

export default function KBRPrime() {
  return (
    <>
      <Hero />
      <Hero2 />
      <Amenities />
      <Configurations />
      <Gallery />

      <EnquiryForm />
    </>
  );
}
