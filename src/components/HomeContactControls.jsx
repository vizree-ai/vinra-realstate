"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import MobileStickyContact from "./MobileStickyContact";

const EnquiryForm = dynamic(() => import("./EnquiryForm"), {
  ssr: false,
});

export default function HomeContactControls() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <MobileStickyContact setOpen={setOpen} />
      {open && <EnquiryForm open={open} setOpen={setOpen} />}
    </>
  );
}
