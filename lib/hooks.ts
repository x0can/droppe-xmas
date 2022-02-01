import useSWR from "swr";
import { add, fetcher } from "./fetcher";

export const useCarts = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/carts", fetcher);
  return {
    cart: data,
    isLoading: !data && !error,
    isError: error,
  };
};

export const usePost = () => {
  const { data, error } = useSWR("https://fakestoreapi.com/carts", add);

  return {
    order: data,
    isError: error,
  };
};
