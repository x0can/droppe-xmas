import useSWR from "swr";
import fetcher from "./fetcher";

export const useCarts = () => {
  const { data, error } = useSWR("carts", fetcher);
  return {
    cart: data,
    isLoading: !data && !error,
    isError: error,
  };
};
