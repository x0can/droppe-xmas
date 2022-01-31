import { Flex, Box } from "@chakra-ui/react";
import NextImage from "next/image";
import NavButton from "./navButton";

const Navbar = () => {
  return (
    <Box
      height="10vh"
      width="100vw"
      borderBottom="10px solid green"
      bgColor="white"
      position="absolute"
      top="0"
    >
      <Flex align="center">
        <Box width="40%">
          <Flex justify="left" align="left" color="white">
            <NavButton text="Nav 1" />
          </Flex>
        </Box>
        <Box width="20%">
          <NextImage src="/hlt.svg" height="80px" width="220px" />
        </Box>
        <Box width="40%">
          <Flex justify="right" align="right" color="white">
            <NavButton text="Nav 2" />
            <NavButton text="Nav 3" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
