export async function getCryptoData() {

const res = await fetch(
    'https://data-api.coindesk.com/asset/v2/metadata?assets=BTC,ETH,USDT,XRP,BNB,SOL,USDC,ADA,DOGE,TRX,STETH,WBTC,SUI,AVAX,XLM,WSTETH,HBAR,LEO,LINK,PI&asset_lookup_priority=ID&quote_asset=USD&groups=ID,BASIC,PRICE,DESCRIPTION,DESCRIPTION_SUMMARY',
    {
      next: { revalidate: 60 }
    }
  );
  const data = await res.json();

  return data.Data;
}