import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const ViewOrder = ({ approved }) => {
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
        </Tr>
      </Thead>
      <Tbody>
        {approved?.map((product, i) => (
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
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ViewOrder;
