import { Flex, Box } from "@chakra-ui/react";

const MainButton = ({ text }) => {
  return (
    <Box
      padding="15px"
      width="30%"
      bgColor="orange.800"
      cursor="pointer"
      margin="0 3px 5px 3px"
      sx={{
        "&:hover": {
          bg: "green.800",
        },
      }}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default MainButton;
