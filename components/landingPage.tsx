import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  return (
    <Box top="0">
      <Navbar />
      <Flex justify="center" padding="center">
        <Box
          width="100vw"
          overflowY="auto"
          backgroundImage="url(/temple.svg)"
          backgroundColor="gray.400"
        >
          {children}
        </Box>
      </Flex>
    </Box>
  );
};

export default LandingPage;
