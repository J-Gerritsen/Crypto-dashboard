'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Props {
  coinData: {
    [key: string]: {
      NAME: string;
      PRICE_USD: number;
    };
  };
}

export default function TopCoinsChart({ coinData }: Props) {

    const topCoins = Object.entries(coinData)
    .sort(([, a], [, b]) => b.PRICE_USD - a.PRICE_USD)
    .slice(0, 10);

  const labels = topCoins.map(([, coin]) => coin.NAME);
  const prices = topCoins.map(([, coin]) => coin.PRICE_USD);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price in USD',
        data: prices,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
}
