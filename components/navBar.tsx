import { Flex, Box } from "@chakra-ui/react";
import NextImage from "next/image";

const Navbar = () => {
  return (
    <Box
      height="11vh"
      width="100vw"
      borderBottom="20px solid green"
      bgColor="white"
      position="absolute"
      top="0"
    >
      <Flex align="center" justify="center">
        <Box width="20%">
          <NextImage src="/xma.svg" height="80px" width="220px" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
