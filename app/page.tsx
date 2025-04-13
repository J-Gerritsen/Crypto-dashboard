import { getCryptoData } from "@/lib/getCryptoData";

export default async function Page() {
  const data = await getCryptoData();

  return (
    <>
      <main className="p-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(data).map(([_, asset]: [string, any]) => (
            <li key={asset.ID}>
              <div className="bg-slate-950 rounded-2xl p-4 flex flex-col items-center text-center">
                <img src={asset.LOGO_URL} alt={`${asset.NAME} Logo`} className="w-20 h-20 object-contain mb-2"/>
                <h2 className="text-lg font-semibold">{asset.NAME}</h2>
                <p className="text-gray-500">${Number(asset.PRICE_USD).toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}