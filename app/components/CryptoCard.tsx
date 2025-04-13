"use client";

import Link from "next/link";

interface CryptoCardProps {
  asset: any;
  symbol: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export default function CryptoCard({
  asset,
  symbol,
  isFavorite,
  onToggleFavorite,
}: CryptoCardProps) {
  return (
    <li className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite();
        }}
        className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded text-sm"
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>

      <Link
        href={`/crypto/${symbol}`}
        className="bg-slate-950 rounded-2xl p-4 flex flex-col items-center text-center"
      >
        <img
          src={asset.LOGO_URL}
          alt={`${asset.NAME} Logo`}
          className="w-20 h-20 object-contain mb-2"
        />
        <h2 className="text-lg font-semibold">{asset.NAME}</h2>
        <p className="text-gray-500">
          ${Number(asset.PRICE_USD).toFixed(2)}
        </p>
      </Link>
    </li>
  );
}
