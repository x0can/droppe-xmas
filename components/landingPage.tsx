import { Flex, Box, Image } from "@chakra-ui/react";

const LandingPage = ({ children }) => {
  return (
    <Box height="100%" overflowY="auto">
      <Box height="10vh" width="100vw" bgColor="gray" color="white">
        <Flex align="center">
          <Box width="40%">
            <Flex justify="left" align="left" padding="20px">
              <Box padding="20px">Nav 1</Box>
              <Box padding="20px">Nav 2</Box>
            </Flex>
          </Box>
          <Box width="20%">Content</Box>
          <Box width="40%">
            <Flex justify="right" align="right" padding="20px">
              <Box padding="20px">Nav 3</Box>
              <Box padding="20px">Nav 4</Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box height="100vh">{children}</Box>
    </Box>
  );
};

export default LandingPage;
