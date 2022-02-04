import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { arrayReducer, arrayRemove } from "../lib/filter";
import LoadingData from "../components/loadingData";

const Home = () => {
  const [products, setProducts] = useState([]);
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

  const handleDelete = (product) => {
    const newProducts = arrayRemove(products, product);
    setProducts(newProducts);
  };

  if (isLoading) {
    return <LoadingData />;
  }

  return (
    <LandingPage
      orders={carts}
      handleProducts={handleProducts}
      products={products}
      handleDelete={handleDelete}
    />
  );
};

export default Home;
