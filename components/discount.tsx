import { Text, Badge } from "@chakra-ui/react";

const DiscountBox = ({ text }) => {
  return (
    <Text
      top="15px"
      right={["16px", "84px"]}
      zIndex={1}
      rounded="md"
      boxShadow="2xl"
      width="20%"
      cursor="pointer"
      margin="15px"
    >
      <Badge as="del" color="orange.800">
        {text}
      </Badge>
    </Text>
  );
};

export default DiscountBox;
