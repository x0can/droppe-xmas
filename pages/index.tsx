import { Container, Button, Stack } from "@chakra-ui/react";
import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import LandingPage from "../components/landingPage";
import { useCarts } from "../lib/hooks";
import { arrayReducer, arrayRemove } from "../lib/filter";
import LoadingData from "../components/loadingData";
import ViewOrder from "../components/viewOrder";
import MessageBox from "../components/messageBox";

const arr = [];
const Home = () => {
  const [products, setProducts] = useState([]);
  const [child, setChild] = useState();
  const addProducts = useStoreActions((store: any) => store.addProducts);
  const { orders, isLoading } = useCarts();
  const [carts, setCarts] = useState();
  const [approved, setApproved] = useState([]);
  const [viewOrder, setViewOrder] = useState(false);
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
      product.child = child;
      arr.push(product);
      setApproved(arr);
    }
  };

  const handleViewOrder = () => {
    setViewOrder(true);
  };

  if (isLoading) {
    return <LoadingData />;
  }

  return (
    <Container maxW="5xl">
      {viewOrder ? (
        <>
          {approved.length > 0 && (
            <Stack
              textAlign="center"
              align="center"
              spacing={{ base: 8, md: 10 }}
              py={{ base: 20, md: 28 }}
            >
              <ViewOrder approved={approved} />
              <Stack
                textAlign="center"
                align="center"
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, md: 28 }}
              >
                <Button
                  onClick={() => setViewOrder(false)}
                  rounded="full"
                  px={6}
                  colorScheme="orange"
                  bg="orange.400"
                  _hover={{ bg: "orange.500" }}
                  id="productsTable"
                >
                  Buy
                </Button>
              </Stack>
            </Stack>
          )}
          {approved.length === 0 && (
            <>
              <MessageBox text="No approved products" />
              <Button
                onClick={() => setViewOrder(false)}
                rounded="full"
                px={6}
                colorScheme="orange"
                bg="orange.400"
                _hover={{ bg: "orange.500" }}
                id="productsTable"
              >
                GO BACK TO SELECT PRODUCT
              </Button>
            </>
          )}
        </>
      ) : (
        <LandingPage
          orders={carts}
          handleProducts={handleProducts}
          products={products}
          setIsChecked={handleCheck}
          approved={approved}
          handleViewOrder={handleViewOrder}
        />
      )}
    </Container>
  );
};

export default Home;
