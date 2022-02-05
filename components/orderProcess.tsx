import {
  Container,
  Stack,
  Heading,
  Text,
  Box,
  Link,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";
import OrderTable from "./orderTable";
import ProductsTable from "./productsTable";

const Orderprocess = ({
  orders,
  products,
  handleProducts,
  setIsChecked,
  approved,
  handleViewOrder,
}) => {
  return (
    <>
      <Box position="fixed" top="20rem" right={["16px", "84px"]} zIndex={1}>
        <Link href="#/checkout" onClick={() => handleViewOrder(approved)}>
          <Text as="del">
            <IconButton
              colorScheme="white"
              size="lg"
              aria-label="checkout"
              icon={<FaCartArrowDown fontSize="50px" color="green" />}
            />
            <Badge colorScheme="orange">{approved.length}</Badge>
          </Text>
        </Link>
      </Box>
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
                Add{" "}
                <Text as="span" color="orange.400">
                  products
                </Text>
              </Heading>
              <ProductsTable products={products} setIsChecked={setIsChecked} />
            </>
          ) : null}
        </Stack>
      </Container>
    </>
  );
};

export default Orderprocess;
