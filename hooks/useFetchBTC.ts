import { useEffect, useState } from 'react';
import { lineDataItem } from 'react-native-gifted-charts';

export const useFetchBTC = () => {
  const [data, setData] = useState<lineDataItem[]>([{ value: 0 }]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const call = async () => {
      try {
        // const res = await fetch(
        //   'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=2'
        // );
        const { prices } = await res.json();
        const _data: lineDataItem[] = prices.map((el: any) => {
          return {
            value: parseFloat(el[1]).toFixed(2),
          };
        });
        setData(_data);
        setError(false);
      } catch (e) {
        setError(true);
      }
    };

    // call();
  }, []);
  return { data, error };
};
