import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";

const ProductTable = ({ products, childId }) => {
  const handleSubmit = (obj) => {
    console.log(obj);
  };

  return (
    <Table
      boxShadow="2xl"
      variant="styled"
      backgroundColor="gray.300"
      width="60vw"
      rounded="md"
      padding="20px"
    >
      <Thead
        borderBottom="1px solid"
        borderColor="rgba(255,255,255,0.2)"
        id="orderTable"
      >
        <Tr>
          <Th>#</Th>
          <Th>PRODUCT</Th>
          <Th>QUANTITY</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {products?.map((product, i) => (
          <Tr
            sx={{
              transition: "all .3s",
              "&:hover": {
                bg: "gray.500",
              },
            }}
            key={product.productId}
          >
            <Td>{i + 1}</Td>
            <Td>{product.productId}</Td>
            <Td>{product.quantity}</Td>
            <Td>
              <Button
                mt={0}
                bg="green.900"
                color="white"
                rounded="md"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                  bg: "orange.900",
                }}
                onClick={() => handleSubmit(product)}
              >
                Add to order
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
