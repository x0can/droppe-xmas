import {
  Table,
  Thead,
  Flex,
  Center,
  Text,
  Badge,
  Box,
  Button,
} from "@chakra-ui/react";
import OrderTable from "./abandonedCart";
import OrderProcessing from "./orderProcessing";

const CheckoutStep = ({
  checkoutStep,
  allPurchases,
  nonPurchase,
  carts,
  handleSubmit,
  loading,
}) => {
  return (
    <Box>
      {checkoutStep ? (
        <Flex overflowY="auto" align="center" justify="center">
          <Box
            overflow="hidden"
            bgColor="gray.100"
            height="calc(70vh - 100px)"
            padding="30px"
            width="100vw"
            margin="130px 100px 10px "
            boxShadow="2xl"
          >
            <Center>
              {allPurchases.length === 0 ? (
                <Box justify="center" align="center">
                  <Table>
                    <Thead
                      borderBottom="1px solid"
                      borderColor="rgba(255,255,255,0.2)"
                    >
                      <Center>
                        <Text>
                          <Badge color="orange">No Approved Purchase</Badge>
                        </Text>
                      </Center>
                    </Thead>
                  </Table>
                </Box>
              ) : (
                <OrderTable
                  orders={allPurchases}
                  color="green"
                  text="This are all your Approved Orders"
                  approved="Yes"
                />
              )}
            </Center>
            <br />
            <br />
            <Center>
              {nonPurchase.length === 0 ? (
                <Box justify="center" align="center">
                  <Table>
                    <Thead
                      borderBottom="1px solid"
                      borderColor="rgba(255,255,255,0.2)"
                    >
                      <Center>
                        <Text>
                          <Badge color="orange">
                            All Orders Have Been Approved
                          </Badge>
                        </Text>
                      </Center>
                    </Thead>
                  </Table>
                </Box>
              ) : (
                <OrderTable
                  orders={nonPurchase}
                  color="red"
                  text="Rejected orders"
                  approved="No"
                />
              )}
            </Center>
            <Button onClick={handleSubmit} disabled={loading}>
              Checkout Step
            </Button>
          </Box>
        </Flex>
      ) : (
        <OrderProcessing carts={carts} />
      )}
    </Box>
  );
};

export default CheckoutStep;
