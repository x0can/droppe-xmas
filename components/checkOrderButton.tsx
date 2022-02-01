import { Flex, Box } from "@chakra-ui/react";

const CheckButton = ({ text, handleCheck }) => {
  return (
    <Box
      padding="25px"
      width="80%"
      bgColor="orange.800"
      cursor="pointer"
      margin="35px"
      sx={{
        "&:hover": {
          bg: "green.800",
        },
      }}
      onClick={() => handleCheck(true)}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default CheckButton;
