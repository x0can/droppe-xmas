import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  return (
    <Box overflowX="hidden">
      <Navbar />
      <Flex
        padding="20px"
        align="center"
        justify="center"
        height="100vh"
        bgColor="orange.900"
      >
        <Box margin="0">{children}</Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
