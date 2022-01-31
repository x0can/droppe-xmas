import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  return (
    <Flex top="0">
      <Navbar />
      <Box
        overflowX="hidden"
        bgColor="orange.900"
        height="50vh"
        padding="30px"
        width="100vw"
      >
        {children}
      </Box>
    </Flex>
  );
};

export default LandingPage;
