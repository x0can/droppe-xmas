import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { formatDate } from "../lib/formatter";

const AbandonedTable = ({ orders }) => {
  return (
    <Table variant="styled" backgroundColor="orange.300" width="81.5vw">
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
                bg: "orange.500",
              },
            }}
            key={order.id}
          >
            <Td>{i + 1}</Td>
            <Td>{order.userId}</Td>
            <Td>{formatDate(new Date(order.date))}</Td>
            <Td>{order.products.length}</Td>
            <Td>YES</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default AbandonedTable;
