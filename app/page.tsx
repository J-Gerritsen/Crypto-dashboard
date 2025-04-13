import { getCryptoData } from "@/lib/getCryptoData";
import CryptoSearch from "@/app/components/CryptoSearch";
import Header from "@/app/components/Header";
import Footer from "./components/Footer";

export default async function Page() {
  const data = await getCryptoData();

  return (
    <>
      <Header />
      <main className="p-4">
        <CryptoSearch data={data} />
      </main>
      <Footer />
    </>
  );
}
