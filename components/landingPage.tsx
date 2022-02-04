import { Container, Stack, Heading, Text, Button } from "@chakra-ui/react";
import OrderTable from "./orderTable";
import ProductsTable from "./productsTable";

const LandingPage = ({ orders, products, handleProducts, handleDelete }) => {
  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight="110%"
        >
          Click{" "}
          <Text as="span" color="orange.400">
            to view products
          </Text>
        </Heading>
        <OrderTable orders={orders} handleProducts={handleProducts} />
      </Stack>
      <Container style={{ marginTop: "-10rem" }}>
        <Stack
          textAlign="center"
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          {products.length !== 0 ? (
            <>
              <Heading
                fontWeight={400}
                // fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
                lineHeight="110%"
                id="productsTable"
              >
                Click{" "}
                <Text as="span" color="orange.400">
                  to delete products
                </Text>
              </Heading>
              <ProductsTable products={products} handleDelete={handleDelete} />
              <Button
                rounded="full"
                px={6}
                colorScheme="orange"
                bg="orange.400"
                _hover={{ bg: "orange.500" }}
                id="productsTable"
              >
                Buy
              </Button>
            </>
          ) : null}
        </Stack>
      </Container>
    </Container>
  );
};

export default LandingPage;
