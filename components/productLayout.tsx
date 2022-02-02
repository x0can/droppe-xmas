import { Flex } from "@chakra-ui/layout";
import { Fragment } from "react";
import ProductBox from "./productBox";

const ProductLayout = ({ carts, handleSubmit }) => {
  return (
    <Flex justify="center">
      {carts.map((items) => (
        <Fragment key={items.id || items.userId}>
          <ProductBox items={items} handleSubmit={handleSubmit} />
        </Fragment>
      ))}
    </Flex>
  );
};

export default ProductLayout;
