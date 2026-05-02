import MainPage from "@/components/MainPage";
import React from "react";

export const metadata = {
  title: "Properties in Bangalore",
  description:
    "Explore Vinra Group properties, apartments, plots, and homes in Bangalore.",
  alternates: {
    canonical: "/",
  },
};

function page() {
  return (
    <div>
      <MainPage />
    </div>
  );
}

export default page;
