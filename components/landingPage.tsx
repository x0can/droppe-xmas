import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import OrderTable from "./orderTable";
import ProductsTable from "./productsTable";

const LandingPage = ({ orders, products, handleProducts }) => {
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
          Click table{" "}
          <Text as="span" color="orange.400">
            to view products
          </Text>
        </Heading>
        <OrderTable orders={orders} handleProducts={handleProducts} />
      </Stack>
      <Container>
        <Stack
          textAlign="center"
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          {products ? <ProductsTable products={products} /> : null}
        </Stack>
      </Container>
    </Container>
  );
};

export default LandingPage;
