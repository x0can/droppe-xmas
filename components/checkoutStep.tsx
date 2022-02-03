import { Box, Flex } from "@chakra-ui/layout";
import ProductLayout from "./productLayout";

const CheckoutStep = ({ carts }) => {
  return (
    <Box padding="100px">
      <ProductLayout carts={carts} />
    </Box>
  );
};

export default CheckoutStep;
