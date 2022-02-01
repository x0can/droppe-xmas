/* eslint-disable dot-notation */
/* eslint-disable no-undef */
import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

// import MainButton from "./button";

const ProductBox = ({ items, handleSubmit }) => {
  return (
    <Center py={6}>
      <Box
        maxW="270px"
        w="full"
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        padding="60px"
        margin="3px"
      >
        <Box p={6}>
          <Stack spacing={0} align="center" mb={5}>
            <Heading fontSize="2sm" fontWeight={500} fontFamily="body">
              Child: {items.userId}
            </Heading>
            <Text color="gray.500">Products</Text>
            <Text fontWeight={600}>{items.products.length}</Text>
          </Stack>
        </Box>
        <Button
          w="full"
          onClick={() => handleSubmit(items)}
          mt={8}
          bg="green.900"
          color="white"
          rounded="md"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
            bg: "orange.900",
          }}
        >
          Approve
        </Button>
        {/* <MainButton text="APPROVE" handleSubmit={handleSubmit} item={items} /> */}
      </Box>
    </Center>
  );
};
// <Box width="20vw" height="38vh" bgColor="orange.300" margin="5px">
//   <Flex align="center" justify="center" padding="60px">
//     <UnorderedList>
//       <ListItem>child: {items.userId}</ListItem>
//       <ListItem>products: {items.products.length}</ListItem>
//     </UnorderedList>
//   </Flex>
//   <MainButton text="APPROVE" handleSubmit={handleSubmit} item={items} />
// </Box>

export default ProductBox;
