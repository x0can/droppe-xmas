import { Box, Flex } from "@chakra-ui/layout";
import { ListItem, UnorderedList, Button } from "@chakra-ui/react";

const ProductBox = ({ items }) => {
  return (
    <Box width="20vw" height="38vh" bgColor="gray.100" margin="5px">
      <Flex align="center" justify="center" padding="60px">
        <UnorderedList>
          <ListItem>child: {items.userId}</ListItem>
          <ListItem>products: {items.products.length}</ListItem>
        </UnorderedList>
      </Flex>
      <Flex align="center" justify="center" padding="10px" margin="2px">
        <Button colorScheme="blue">Approve</Button>
        <Button colorScheme="red">Discard</Button>
      </Flex>
    </Box>
  );
};

export default ProductBox;
