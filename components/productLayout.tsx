import { Flex } from "@chakra-ui/layout";
import ProductBox from "./productBox";

const MealLayout = ({ cart }) => {

  return (
    <Flex padding="20">
      {cart.map((items) => (
        <ProductBox products={items.products} />
      ))}
    </Flex>
  );
};

export default MealLayout;
