import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductsTable from "./productsTable";
import { formatDate } from "../lib/formatter";
import DeleteButton from "./deleteButton";

const OrderTable = ({ orders, handleDelete }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [products, setProducts] = useState();
  const handleOpen = (productsItems) => {
    setProducts(productsItems);
    onOpen();
  };

  useEffect(() => {
    const element = document.getElementById("orderTable");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  });

  return (
    <>
      <ProductsTable onClose={onClose} products={products} isOpen={isOpen} />
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
              cursor="pointer"
              sx={{
                transition: "all .3s",
                "&:hover": {
                  bg: "green.900",
                },
              }}
              key={order.id}
            >
              <Td onClick={() => handleOpen(order.products)}>{i + 1}</Td>
              <Td onClick={() => handleOpen(order.products)}>{order.userId}</Td>
              <Td onClick={() => handleOpen(order.products)}>
                {formatDate(new Date(order.date))}
              </Td>
              <Td onClick={() => handleOpen(order.products)}>
                {order.products.length}
              </Td>
              <Td onClick={() => handleOpen(order.products)}>Yes</Td>
              <Td cursor="pointer">
                <DeleteButton handleDelete={handleDelete} item={order} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default OrderTable;
