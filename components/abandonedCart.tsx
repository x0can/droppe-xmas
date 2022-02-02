import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
  Text,
  Badge,
  Box,
} from "@chakra-ui/react";
import { formatDate } from "../lib/formatter";

const AbandonedTable = ({ orders, text, color, approved }) => {
  return (
    <Box justify="center" align="center">
      <Table>
        <Thead borderBottom="1px solid" borderColor="rgba(255,255,255,0.2)">
          <Center>
            <Text>
              <Badge color={color}>{text}</Badge>
            </Text>
          </Center>
        </Thead>
      </Table>
      <Table
        boxShadow="2xl"
        variant="styled"
        backgroundColor="gray.100"
        width="60vw"
        rounded="md"
      >
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
              <Td>{approved}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default AbandonedTable;
