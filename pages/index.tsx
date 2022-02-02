import { Table, Thead, Flex, Center, Text, Badge, Box } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import LandingPage from "../components/landingPage";
import OrderTable from "../components/abandonedCart";
import OrderProcessing from "../components/orderProcessing";

const Home = () => {
  const nonPurchase = useStoreState((state: any) => state.nonPurchase);
  const allPurchases = useStoreState((state: any) => state.allPurchases);
  const checkoutStep = useStoreState((state: any) => state.checkoutStep);

  return (
    <LandingPage>
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
          </Box>
        </Flex>
      ) : (
        <OrderProcessing />
      )}
    </LandingPage>
  );
};

export default Home;
