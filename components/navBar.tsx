import { Flex, Box } from "@chakra-ui/react";
import NextImage from "next/image";
import MainButton from "./button";

const Navbar = () => {
  return (
    <Box
      height="11vh"
      width="100vw"
      borderBottom="10px solid green"
      bgColor="white"
      position="absolute"
      top="0"
    >
      <Flex align="center">
        <Box width="40%">
          <Flex justify="left" align="left" color="white">
            <MainButton text="Nav 1" />
          </Flex>
        </Box>
        <Box width="20%">
          <NextImage src="/xma.svg" height="80px" width="220px" />
        </Box>
        <Box width="40%">
          <Flex justify="right" align="right" color="white">
            <MainButton text="Nav 2" />
            <MainButton text="Nav 3" />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
