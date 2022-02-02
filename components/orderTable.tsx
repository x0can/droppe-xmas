import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { useEffect } from "react";
import { formatDate } from "../lib/formatter";
import DeleteButton from "./deleteButton";

const OrderTable = ({ orders, handleDelete }) => {
  useEffect(() => {
    const element = document.getElementById("orderTable");
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
          <Th>APPROVED</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {orders?.map((order, i) => (
          <Tr
            sx={{
              transition: "all .3s",
              "&:hover": {
                bg: "gray.500",
              },
            }}
            key={order.id}
          >
            <Td>{i + 1}</Td>
            <Td>{order.userId}</Td>
            <Td>{formatDate(new Date(order.date))}</Td>
            <Td>{order.products.length}</Td>
            <Td>YES</Td>
            <Td cursor="pointer">
              <DeleteButton handleDelete={handleDelete} item={order} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default OrderTable;
