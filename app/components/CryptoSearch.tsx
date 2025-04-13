"use client";

import { useState } from "react";
import Link from "next/link";

interface CryptoSearchProps {
  data: { [symbol: string]: any };
}

export default function CryptoSearch({ data }: CryptoSearchProps) {
  const [search, setSearch] = useState("");

  const filteredData = Object.entries(data).filter(([_, asset]) =>
    asset.NAME.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a crypto currency"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 w-full max-w-md rounded border border-gray-300 !text-white"
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredData.map(([symbol, asset]) => (
          <li key={asset.ID}>
            <Link href={`/crypto/${symbol}`} className="bg-slate-950 rounded-2xl p-4 flex flex-col items-center text-center"
            >
              <img src={asset.LOGO_URL} alt={`${asset.NAME} Logo`} className="w-20 h-20 object-contain mb-2"/>
              <h2 className="text-lg font-semibold">{asset.NAME}</h2>
              <p className="text-gray-500">
                ${Number(asset.PRICE_USD).toFixed(2)}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}