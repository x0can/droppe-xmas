import { Flex, Box } from "@chakra-ui/react";

const MainButton = ({ text, handleSubmit, item }) => {
  return (
    <Box
      padding="25px"
      width="80%"
      bgColor="green.800"
      cursor="pointer"
      margin="23px"
      sx={{
        "&:hover": {
          bg: "orange.800",
        },
      }}
      onClick={() => handleSubmit(item)}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default MainButton;
