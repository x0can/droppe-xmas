import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Link,
  Box,
  IconButton,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";

const ProductsTable = ({ products, handleDelete }) => {
  useEffect(() => {
    const element = document.getElementById("productsTable");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
    <>
      <Box position="fixed" top="15px" right={["16px", "84px"]} zIndex={1}>
        <Link href="#/checkout">
          <Text>
            <IconButton
              colorScheme="white"
              size="lg"
              aria-label="checkout"
              icon={<FaCartArrowDown fontSize="50px" color="green" />}
            />
            <Badge colorScheme="orange">{products.length}</Badge>
          </Text>
        </Link>
      </Box>
      <Table
        boxShadow="2xl"
        variant="styled"
        backgroundColor="gray.100"
        rounded="md"
      >
        <Thead
          borderBottom="1px solid"
          borderColor="rgba(255,255,255,0.2)"
          id="orderTable"
        >
          <Tr>
            <Th>#</Th>
            <Th>PRODUCTS</Th>
            <Th>QUANTITY</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {products?.map((product, i) => (
            <Tr
              onClick={() => handleDelete(product)}
              cursor="pointer"
              sx={{
                transition: "all .3s",
                "&:hover": {
                  bg: "green.900",
                },
              }}
              key={product.productId}
            >
              <Td>{i + 1}</Td>
              <Td>{product.productId}</Td>
              <Td>{product.quantity}</Td>
              <Td>
                <Checkbox isChecked />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ProductsTable;
