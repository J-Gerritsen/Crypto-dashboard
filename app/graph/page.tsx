// app/graph/page.tsx
import TopCoinsChart from '@/app/components/TopCoinChart';
import { getCryptoData } from '@/lib/getCryptoData';

export default async function GraphPage() {
  const data = await getCryptoData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Top 10 Most Expensive Coins</h1>
      <TopCoinsChart coinData={data} />
    </div>
  );
}