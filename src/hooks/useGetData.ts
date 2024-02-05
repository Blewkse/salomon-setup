import { useEffect, useState } from "react";
import initialData from "../../data.ts";

type Data = {
  name: string;
  sex: boolean;
  price: number;
  image: string;
  type: string;
};

export default function useGetData() {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData(initialData);
    }, 5000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false);
    }
  }, [data]);

  return { data, isLoading, refetch: fetchData };
}
