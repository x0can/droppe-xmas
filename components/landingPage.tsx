import { Flex, Box } from "@chakra-ui/react";
import NextImage from "next/image";
import NavButton from "./navButton";

const LandingPage = ({ children }) => {
  return (
    <Box height="100%" overflowY="auto">
      <Box height="8vh" width="100vw" borderBottom="3px solid black">
        <Flex align="center">
          <Box width="40%">
            <Flex justify="left" align="left" padding="2px" color="white">
              <NavButton text="Nav 1" />
            </Flex>
          </Box>
          <Box width="20%">
            <NextImage src="/hlt.svg" height="80px" width="220px" />
          </Box>
          <Box width="40%">
            <Flex justify="right" align="right" padding="2px" color="white">
              <NavButton text="Nav 2" />
              <NavButton text="Nav 3" />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box height="100vh" padding="50px">
        {children}
      </Box>
    </Box>
  );
};

export default LandingPage;
