import { getCryptoData } from "@/lib/getCryptoData";
import CryptoSearch from "@/app/components/CryptoSearch";

export default async function Page() {
  const data = await getCryptoData();

  return (
    <main className="p-4">
      <CryptoSearch data={data} />
    </main>
  );
}
