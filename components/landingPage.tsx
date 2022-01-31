import { Box, Flex } from "@chakra-ui/react";
import MealLayout from "./mealLayout";
import Navbar from "./navBar";

const LandingPage = ({ children }) => {
  return (
    <Flex top="0">
      <Navbar />
      <Box overflowY="auto">
        <Box
          overflow="hidden"
          bgColor="gray.300"
          backgroundImage="url(/temple.svg)"
          height="60vh"
          padding="30px"
          width="100vw"
        >
          <MealLayout />
        </Box>
        {children}
      </Box>
    </Flex>
  );
};

export default LandingPage;
