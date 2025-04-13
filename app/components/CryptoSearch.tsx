"use client";

import { useState } from "react";
import CryptoCard from "./CryptoCard";
import { useLocalStorageState } from "./useLocalStorageState";

interface CryptoSearchProps {
  data: { [symbol: string]: any };
}

export default function CryptoSearch({ data }: CryptoSearchProps) {
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useLocalStorageState<string[]>("favorites", []);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const filteredData = Object.entries(data).filter(([_, asset]) =>
    asset.NAME.toLowerCase().includes(search.toLowerCase())
  );

  const sortedData = [...filteredData].sort(([_, a], [__, b]) => {
    const aFav = favorites.includes(a.ID);
    const bFav = favorites.includes(b.ID);
    return aFav === bFav ? 0 : aFav ? -1 : 1;
  });

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
        {sortedData.map(([symbol, asset]) => (
          <CryptoCard
            key={asset.ID}
            asset={asset}
            symbol={symbol}
            isFavorite={favorites.includes(asset.ID)}
            onToggleFavorite={() => toggleFavorite(asset.ID)}
          />
        ))}
      </ul>
    </div>
  );
  
}
