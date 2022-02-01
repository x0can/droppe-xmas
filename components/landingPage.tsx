import { Box, Flex } from "@chakra-ui/react";
import { useCarts } from "../lib/hooks";
import ProductLayout from "./productLayout";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  const { cart } = useCarts();

  const arrayReducer = (arr) => {
    const { length } = arr;
    if (length > 5) {
      arr.length -= 1;
      return arr;
    }
    return arrayReducer(arr);
  };

  return (
    <Flex top="0">
      <Navbar />
      <Box overflowY="auto">
        <Box
          overflow="hidden"
          bgColor="gray.300"
          height="60vh"
          padding="30px"
          width="100vw"
        >
          {cart !== undefined ? (
            <ProductLayout cart={arrayReducer(cart)} />
          ) : (
            <Box> Waiting for data....</Box>
          )}
        </Box>

        {children}
      </Box>
    </Flex>
  );
};

export default LandingPage;
