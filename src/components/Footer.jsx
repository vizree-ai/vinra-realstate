import Image from "next/image";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/vinragroupofficial/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/Vinragroupofficial",
    icon: Facebook,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCtYIR-Fm-DBCeKLeEw-SWdA",
    icon: Youtube,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/vinragroup",
    icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-6 px-5 sm:px-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_0.6fr_1fr] gap-15 items-start">
          {/* LOGO + ABOUT */}
          <div>
            <div className="-ml-0 flex items-center gap-3 cursor-pointer">
              <Image
                src="/vinrarealstate2.png"
                alt="logo"
                width={155}
                height={40}
                style={{ height: "auto", width: "auto" }}
              />
            </div>

            <h2 className="mt-2 text-yellow-500 font-medium">A Unit of Vinra Group</h2>

            <p className="text-sm mt-4 text-justify text-gray-300 leading-relaxed">
              Vinra Estates is a leading real estate company in Bangalore,
              offering premium residential and commercial property solutions. We
              specialize in helping clients find the perfect home, investment
              opportunities, and land options with complete transparency and
              expert guidance. From property selection to final purchase, we
              ensure a smooth and reliable experience.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-4">
              Property Services
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>Residential Sales</li>
              <li>Commercial Sales</li>
              <li>Home Renovation</li>
              <li>Architectural Design</li>

              <li>Industrial Construction</li>
              <li>Commercial Construction</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="w-fit justify-self-start">
            <h3 className="text-yellow-500 font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li>Join Our Team</li>
              <li>Refer & Earn</li>
              <li>Become Our Partner</li>
            </ul>

            <div className="border-t border-gray-700 pt-4 space-y-2 text-sm text-gray-300">
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <p>📞
                636-6699-888</p>
              <p>✉️ info@vinragroup.com</p>

              <p className="leading-relaxed">
                No-34-1 First Floor <br />
                Promenade Junction, <br />
                Meanee Ave Rd, Sindhi Colony, <br />
                Bengaluru, Karnataka 560042
              </p>
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex gap-3 mt-5 flex-wrap items-center">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full text-gray-300 hover:bg-yellow-500 hover:text-black transition duration-300 border border-gray-700 hover:border-yellow-500"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            © Vinra Estates is a unit of Vinra Group (Vinra Estates &
            Infrastructure Private Limited)
          </p>

          <p className="mt-1">All Rights Reserved © 2025</p>
        </div>
      </div>
    </footer>
  );
}
