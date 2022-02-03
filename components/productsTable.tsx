import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const ProductsTable = ({ products, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalCloseButton />
      <ModalContent>
        <ModalBody backgroundColor="gray.400" rounded="md" alignItems="center">
          <Table
            boxShadow="2xl"
            variant="styled"
            backgroundColor="gray.400"
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
              {products?.map((product, i) => (
                <Tr
                  sx={{
                    transition: "all .3s",
                    "&:hover": {
                      bg: "green.200",
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
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ProductsTable;
