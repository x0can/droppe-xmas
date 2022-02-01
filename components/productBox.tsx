/* eslint-disable dot-notation */
/* eslint-disable no-undef */
import { Box, Flex } from "@chakra-ui/layout";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import MainButton from "./button";

const ProductBox = ({ items, approved, handleSubmit }) => {
  return (
    <Box width="20vw" height="38vh" bgColor="gray.100" margin="5px">
      <Flex align="center" justify="center" padding="60px">
        <UnorderedList>
          <ListItem>child: {items.userId}</ListItem>
          <ListItem>products: {items.products.length}</ListItem>
        </UnorderedList>
      </Flex>
      {approved?.id === items.id ? (
        ""
      ) : (
        <MainButton text="APPROVE" handleSubmit={handleSubmit} item={items} />
      )}
    </Box>
  );
};

export default ProductBox;
