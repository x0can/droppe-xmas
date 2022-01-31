import { Flex, Box } from "@chakra-ui/react";

const NavButton = ({ text }) => {
  return (
    <Box
      padding="25px"
      width="30%"
      bgColor="black"
      cursor="pointer"
      margin="0 2px"
      sx={{
        "&:hover": {
          bg: "gray",
        },
      }}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default NavButton;
