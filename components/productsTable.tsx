import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import { useEffect } from "react";

const ProductsTable = ({ products, setIsChecked }) => {
  useEffect(() => {
    const element = document.getElementById("productsTable");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
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
              <Button
                rounded="full"
                px={6}
                colorScheme="orange"
                bg="orange.400"
                _hover={{ bg: "orange.500" }}
                id="productsTable"
              >
                <Checkbox
                  onChange={(e) => setIsChecked(e.target.checked, product)}
                />
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductsTable;
