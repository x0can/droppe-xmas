import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { formatDate } from "../lib/formatter";

const OrderTable = ({ orders, handleProducts }) => {
  return (
    <>
      {/* <ProductsTable onClose={onClose} products={products} isOpen={isOpen} /> */}
      <Table
        boxShadow="2xl"
        variant="styled"
        backgroundColor="gray.100"
        width="60vw"
        rounded="md"
      >
        <Thead
          borderBottom="1px solid"
          borderColor="rgba(255,255,255,0.2)"
          id="orderTable"
        >
          <Tr>
            <Th>#</Th>
            <Th>CHILD</Th>
            <Th>DATE</Th>
            <Th>PRODUCTS</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order, i) => (
            <Tr
              cursor="pointer"
              sx={{
                transition: "all .3s",
                "&:hover": {
                  bg: "green.900",
                },
              }}
              key={order.id}
              onClick={() => handleProducts(order, order.products)}
            >
              <Td>{i + 1}</Td>
              <Td>{order.userId}</Td>
              <Td>{formatDate(new Date(order.date))}</Td>
              <Td>{order.products.length}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default OrderTable;
