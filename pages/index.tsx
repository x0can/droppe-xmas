import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { arrayReducer, arrayRemove } from "../lib/filter";
import LoadingData from "../components/loadingData";

const arr = [];
const Home = () => {
  const [products, setProducts] = useState([]);
  const [child, setChild] = useState();
  const addProducts = useStoreActions((store: any) => store.addProducts);
  const { orders, isLoading } = useCarts();
  const [carts, setCarts] = useState();
  const [approved, setApproved] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      const reduced = arrayReducer(orders);
      setCarts(reduced);
    }
  }, [isLoading, orders]);

  const handleProducts = (order, orderProducts) => {
    setChild(order);
    setProducts(orderProducts);
    addProducts(orderProducts);
  };

  const handleDelete = (product) => {
    const newProducts = arrayRemove(products, product);
    setProducts(newProducts);
  };

  const handleCheck = (bool, product) => {
    if (bool) {
      handleDelete(product);
      arr.push(product);
      setApproved(arr);
    }
  };

  if (isLoading) {
    return <LoadingData />;
  }

  return (
    <LandingPage
      orders={carts}
      handleProducts={handleProducts}
      products={products}
      setIsChecked={handleCheck}
      approved={approved}
    />
  );
};

export default Home;
