import Link from "next/link";
import { Check } from "lucide-react";

export const metadata = {
  title: "Thank You | Vinra KBR Prime",
  description: "Thank you for enquiring about Vinra KBR Prime luxury apartments.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen w-full bg-[#FAF8F5] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-[430px] sm:max-w-[450px] bg-white rounded-[32px] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-[#ede7de] flex flex-col items-center text-center">
        {/* Mint Green Circle with Checkmark */}
        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-6">
          <Check className="w-9 h-9 sm:w-10 sm:h-10 text-[#16A34A]" strokeWidth={2.8} />
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-[30px] font-bold text-[#111827] tracking-tight mb-2.5">
          Thank You!
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-[#4B5563] leading-relaxed max-w-[320px] mb-8 sm:mb-9">
          Your request has been submitted successfully. Our team will contact you shortly.
        </p>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3">
          {/* Primary Button */}
          <Link
            href="/kbr-prime"
            className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-semibold text-base text-white text-center bg-[#a65d03] hover:bg-[#8f4f02] active:scale-[0.99] transition duration-200 shadow-sm"
          >
            Go to Home
          </Link>

          {/* Secondary Button */}
          <a
            href="https://wa.me/919606044174?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20Vinra%20KBR%20Prime.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 sm:py-4 px-6 rounded-xl font-semibold text-base text-[#111827] bg-white border border-[#D1D5DB] hover:bg-gray-50 active:scale-[0.99] transition duration-200 text-center"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
