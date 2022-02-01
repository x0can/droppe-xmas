import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { formatDate } from "../lib/formatter";

const OrderTable = ({ orders }) => {
  return (
    <Table variant="unstyled" backgroundColor="orange.300">
      <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
        <Tr>
          <Th>#</Th>
          <Th>CHILD</Th>
          <Th>DATE</Th>
          <Th>PRODUCTS</Th>
          <Th>APPROVED</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders?.map((order, i) => (
          <Tr
            sx={{
              transition: "all .3s",
              "&:hover": {
                bg: "rgba(255,255,255,0.1)",
              },
            }}
            key={order.id}
            cursor="pointer"
          >
            <Td>{i + 1}</Td>
            <Td>{order.userId}</Td>
            <Td>{formatDate(new Date(order.date))}</Td>
            <Td>{order.products.length}</Td>
            <Td>{order.approved ? "Yes" : "No"}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default OrderTable;
