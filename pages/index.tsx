import { Flex } from "@chakra-ui/layout";
import LandingPage from "../components/landingPage";
import MealBox from "../components/mealBox";

const Home = () => {
  return (
    <LandingPage>
      <Flex padding="20">
        <MealBox />
        <MealBox />
        <MealBox />
        <MealBox />
      </Flex>
    </LandingPage>
  );
};

export default Home;
