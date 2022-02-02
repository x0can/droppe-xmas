import { Flex, Box } from "@chakra-ui/react";

const CheckButton = ({ text, handleCheck }) => {
  return (
    <Box
      rounded="md"
      boxShadow="2xl"
      padding="25px"
      width="20%"
      bgColor="green.800"
      cursor="pointer"
      margin="35px"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "lg",
        bg: "orange.900",
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
