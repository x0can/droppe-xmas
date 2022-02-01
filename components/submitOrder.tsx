import { Flex, Box } from "@chakra-ui/react";

const SubmitButton = ({ text, handleSubmit }) => {
  return (
    <Box
      padding="25px"
      width="20%"
      bgColor="orange.800"
      cursor="pointer"
      margin="35px"
      id="orderTable"
      sx={{
        "&:hover": {
          bg: "green.800",
        },
      }}
      onClick={handleSubmit}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default SubmitButton;
