import useSWR from "swr";
import { fetchWithArgs, fetcher } from "./fetcher";

export const useCarts = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/carts", fetcher);
  return {
    cart: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePost = (obj) => {
  const { data, error } = useSWR("https://fakestoreapi.com/carts", (url) =>
    fetchWithArgs(url, obj)
  );

  return {
    order: data,
    isError: error,
  };
};
