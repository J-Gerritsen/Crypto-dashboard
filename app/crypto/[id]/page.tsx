import { getCryptoData } from "@/lib/getCryptoData";

interface CryptoPageProps {
  params: {
    id: string;
  };
}

export default async function CryptoPage({ params }: CryptoPageProps) {
  const data = await getCryptoData();
  const cryptoId = data[params.id];

  return (
    <>
      <main className="p-4 flex items-center justify-center max-w-xl mx-auto h-screen">
        <div className="bg-slate-950 p-6 rounded-2xl text-center">
          <img src={cryptoId.LOGO_URL} alt={`${cryptoId.NAME} Logo`} className="w-28 h-28 mx-auto mb-4 object-contain"/>
          <h1 className="text-2xl font-bold">{cryptoId.NAME}</h1>
          <p className="text-gray-500 mb-4">{cryptoId.SYMBOL}</p>
          <p className="text-xl font-semibold text-green-500">
            ${Number(cryptoId.PRICE_USD).toFixed(2)}
          </p>
          <p className="mt-4 text-sm text-gray-300 whitespace-pre-wrap">
            {cryptoId.ASSET_DESCRIPTION_SNIPPET}
          </p>
        </div>
      </main>
    </>
  );
}  
