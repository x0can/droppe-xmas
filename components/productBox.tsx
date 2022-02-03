import {
  Heading,
  Box,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import ProductTable from "./productTable";

const ProductBox = ({ items }) => {
  return (
    <Flex py={6}>
      <Box
        maxW="270vw"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        padding="20px"
        margin="3px"
      >
        <Box p={6}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading fontSize="2sm" fontWeight={500} fontFamily="body">
              Child: {items.userId}
            </Heading>
            <Text color="gray.500">Products</Text>
            <ProductTable products={items.products} childId={items.userId} />
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductBox;
