/* eslint-disable func-names */
/* eslint-disable no-shadow */
import { Box, Flex } from "@chakra-ui/layout";
import { ListItem, UnorderedList, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductBox = ({ items }) => {
  const [approved, setApproved] = useState(false);
  const allCarts = useStoreState((state: any) => state.allCarts);
  const [purchase, setPurchase] = useState([]);
  const addPurchaseAction = useStoreActions(
    (state: any) => state.addPurchaseAction
  );

  useEffect(() => {
    addPurchaseAction(purchase);
  }, [addPurchaseAction, purchase]);

  const handleChange = (e) => {
    setApproved((state) => !state);
    let obj;

    if (approved) {
      obj = { ...allCarts[e.target.value] };
      obj.approved = false;
    } else {
      obj = { ...allCarts[e.target.value] };
      obj.approved = true;
    }
    return setPurchase((data) => [...data, { obj }]);
  };

  return (
    <Box width="20vw" height="38vh" bgColor="gray.100" margin="5px">
      <Flex align="center" justify="center" padding="60px">
        <UnorderedList>
          <ListItem>child: {items.userId}</ListItem>
          <ListItem>products: {items.products.length}</ListItem>
        </UnorderedList>
      </Flex>
      <Flex align="center" justify="center" padding="10px" margin="2px">
        <Checkbox onChange={handleChange} isChecked={approved} value={items.id}>
          Approve
        </Checkbox>
      </Flex>
    </Box>
  );
};

export default ProductBox;
