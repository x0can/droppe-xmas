import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { arrayReducer } from "../lib/filter";
import LoadingData from "../components/loadingData";

const Home = () => {
  const [products, setProducts] = useState();
  const [child, setChild] = useState();
  const addAllCarts = useStoreActions((store: any) => store.addAllCarts);
  const carts = useStoreState((state: any) => state.allCarts);
  const { cart, isLoading } = useCarts();

  useEffect(() => {
    if (cart?.length > 0) {
      addAllCarts(arrayReducer(cart));
    }
  }, [addAllCarts, cart]);

  const handleProducts = (order, orderProducts) => {
    setChild(order);
    setProducts(orderProducts);
  };

  if (isLoading) {
    return <LoadingData />;
  }

  return (
    <LandingPage
      orders={carts}
      handleProducts={handleProducts}
      products={products}
    />
  );
};

export default Home;
