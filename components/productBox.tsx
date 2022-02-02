import {
  Heading,
  Box,
  Center,
  Text,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

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
        padding="50px"
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
      </Box>
    </Center>
  );
};

export default ProductBox;
