import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  return (
    <Flex top="0" >
      <Navbar />
      <Box overflowY="auto" backgroundImage="url(/topography.svg)">{children}</Box>
    </Flex>
  );
};

export default LandingPage;
