import useSWR from "swr";
import { fetcher } from "./fetcher";

export const useCarts = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/carts", fetcher);
  return {
    orders: data,
    isLoading: !data && !error,
    isError: error,
  };
};
