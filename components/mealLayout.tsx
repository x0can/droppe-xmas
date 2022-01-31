import { Flex } from "@chakra-ui/layout";
import MealBox from "./mealBox";

const MealLayout = () => {
  return (
    <Flex padding="20">
      <MealBox />
      <MealBox />
    </Flex>
  );
};

export default MealLayout;
