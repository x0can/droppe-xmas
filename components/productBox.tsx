/* eslint-disable no-shadow */
import { Box, Flex } from "@chakra-ui/layout";
import { ListItem, UnorderedList, Checkbox } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

const ProductBox = ({ items }) => {
  const [approved, setApproved] = useState(false);
  const allCarts = useStoreState((state: any) => state.allCarts);
  const [purchase, setF] = useState([]);
  const addApprovedCart = useStoreActions(
    (state: any) => state.addApprovedCart
  );
  const addDiscardedCart = useStoreActions(
    (state: any) => state.addDiscardedCart
  );

  const handleChange = (e) => {
    let newApproved;
    const arr = [];
    setApproved((state) => !state);

    if (approved) {
      newApproved = allCarts[e.target.value];
      newApproved.approved = false;
    } else {
      newApproved = allCarts[e.target.value];
      newApproved.approved = true;
    }
    arr.push(newApproved);
    setF(arr);
  };

  useEffect(() => {
    const approved = [];
    const rejected = [];
    if (purchase[0].approved) {
      approved.push(purchase[0]);
    } else {
      rejected.push(purchase[0]);
    }
    addApprovedCart(approved);
    addDiscardedCart(rejected);
  }, [addApprovedCart, addDiscardedCart, purchase]);

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
