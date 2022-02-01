import { Flex } from "@chakra-ui/layout";
import { Fragment } from "react";
import ProductBox from "./productBox";

const MealLayout = ({ cart }) => {
  return (
    <Flex padding="20">
      {cart.map((items) => (
        <Fragment key={items.id}>
          <ProductBox items={items} />
        </Fragment>
      ))}
    </Flex>
  );
};

export default MealLayout;
