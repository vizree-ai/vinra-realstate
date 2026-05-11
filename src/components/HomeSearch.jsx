"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function HomeSearch() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchListings = async () => {
      try {
        const { getProperties } = await import("@/lib/supabase");
        const data = await getProperties();

        if (isMounted) {
          setListings(data || []);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const idleCallback =
      window.requestIdleCallback || ((callback) => window.setTimeout(callback, 1));
    const cancelIdleCallback =
      window.cancelIdleCallback || ((id) => window.clearTimeout(id));
    const idleId = idleCallback(fetchListings, { timeout: 1500 });

    return () => {
      isMounted = false;
      cancelIdleCallback(idleId);
    };
  }, []);

  const filteredListings = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    if (!searchTerm) return [];

    return listings.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(searchTerm),
    );
  }, [listings, search]);

  return (
    <div className="mt-6 flex w-full justify-left">
      <div className="relative w-full max-w-md">
        <div className="flex w-full flex-row items-center overflow-hidden rounded-full border border-orange-300 bg-white text-black shadow-lg">
          <div className="relative flex w-full items-center">
            <MapPin
              size={18}
              className="absolute left-3 text-gray-500"
              strokeWidth={1.5}
            />

            <input
              type="text"
              placeholder="Search by location eg. Hoskote"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="flex-1 rounded-full py-3 pl-10 pr-4 text-sm text-black outline-none"
            />
          </div>

          <button className="m-1 flex shrink-0 items-center justify-center rounded-full bg-[#B97715] p-4 text-white transition-colors hover:bg-orange-600">
            <Search size={18} />
          </button>
        </div>

        {search && (
          <div className="absolute top-full z-50 mt-2 w-full rounded-2xl border bg-amber-50 text-gray-900 shadow-lg">
            {filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <Link
                  key={item.id}
                  href={item.link || "/KBR_prime"}
                  className="flex cursor-pointer items-center gap-3 px-4 py-3 hover:rounded-2xl hover:bg-gray-200"
                >
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image || item.img || "/house.webp"}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-700">
                      {item.location || "Bangalore"}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="p-3 text-sm text-gray-500">No results found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
