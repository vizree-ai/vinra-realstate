import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./Hero"));
const Overview = dynamic(() => import("./Overview"));
const Amenities = dynamic(() => import("./Amenities"), {
  loading: () => <div className="w-full min-h-[280px]" />,
});
const Gallery = dynamic(() => import("./Gallery"), {
  loading: () => <div className="w-full min-h-[420px]" />,
});
const EnquiryForm = dynamic(() => import("../EnquiryForm"), {
  loading: () => <div className="w-full min-h-[300px]" />,
});

export default function BMRVelverde() {
  return (
    <>
      <Hero />
      <Overview />
      <Amenities />
      <Gallery />
      <EnquiryForm tableName="bmr_enquiries" />
    </>
  );
}
