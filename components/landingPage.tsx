import { Box, Flex } from "@chakra-ui/react";
import ProductLayout from "./productLayout";
import Navbar from "./navBar";

const LandingPage = ({ children, carts }) => {
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
          {carts !== undefined ? (
            <ProductLayout carts={carts} />
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
