import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";

const Home = () => {
  const { cart } = useCarts();
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);

  const arrayReducer = (arr) => {
    if (arr.length > 5) {
      arr.length -= 1;
      return arr;
    }
  };

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(cart);
    }
  }, [addAllCarts, cart]);

  return <LandingPage carts={arrayReducer(carts)}>footer</LandingPage>;
};

export default Home;
