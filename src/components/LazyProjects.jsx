"use client";

import dynamic from "next/dynamic";
import DeferredSection from "./DeferredSection";

const Projects = dynamic(() => import("./Projects"), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
});

export default function LazyProjects() {
  return (
    <DeferredSection>
      <Projects />
    </DeferredSection>
  );
}
