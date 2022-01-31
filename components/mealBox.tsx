import { Box, Flex } from "@chakra-ui/layout";

const MealBox = () => {
  return (
    <Box width="20vw" height="20vh" bgColor="green.400" margin="5px">
      <Flex align="center" justify="center" padding="60px">
        Last meal eaten
      </Flex>
    </Box>
  );
};

export default MealBox;
