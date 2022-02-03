import { Fragment } from "react";
import ProductBox from "./productBox";

const ProductLayout = ({ carts }) => {
  return (
    <>
      {carts.map((items) => (
        <Fragment key={items.id || items.userId}>
          <ProductBox items={items} />
        </Fragment>
      ))}
    </>
  );
};

export default ProductLayout;
