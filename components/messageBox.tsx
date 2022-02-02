import { Flex, Box } from "@chakra-ui/react";

const MessageBox = ({ text }) => {
  return (
    <Box
      padding="25px"
      width="80%"
      bgColor="orange.500"
      margin="23px"
      sx={{
        "&:hover": {
          bg: "orange.800",
        },
      }}
    >
      <Flex justify="center" align="center">
        {text}
      </Flex>
    </Box>
  );
};

export default MessageBox;
