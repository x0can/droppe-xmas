import { Container } from "@chakra-ui/react";
import { useState } from "react";
import { getDups } from "../lib/discount";
import Orderprocess from "./orderProcess";

const LandingPage = ({
  orders,
  products,
  handleProducts,
  setIsChecked,
  approved,
}) => {
  const [viewOrder, setViewOrder] = useState(false);

  const handleViewOrder = () => {
    setViewOrder(true);
  };

  return (
    <Container maxW="5xl">
      <Orderprocess
        orders={orders}
        products={products}
        handleProducts={handleProducts}
        setIsChecked={setIsChecked}
        approved={approved}
        handleViewOrder={handleViewOrder}
      />
    </Container>
  );
};

export default LandingPage;
