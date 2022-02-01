import { Flex } from "@chakra-ui/layout";
import { Fragment } from "react";
import ProductBox from "./productBox";

const ProductLayout = ({ carts, approved, handleSubmit }) => {
  return (
    <Flex padding="20">
      {carts.map((items) => (
        <Fragment key={items.id}>
          <ProductBox
            items={items}
            approved={approved}
            handleSubmit={handleSubmit}
          />
        </Fragment>
      ))}
    </Flex>
  );
};

export default ProductLayout;
