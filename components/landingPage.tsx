import Orderprocess from "./orderProcess";

const LandingPage = ({
  orders,
  products,
  handleProducts,
  setIsChecked,
  approved,
  handleViewOrder,
}) => {
  return (
    <Orderprocess
      orders={orders}
      products={products}
      handleProducts={handleProducts}
      setIsChecked={setIsChecked}
      approved={approved}
      handleViewOrder={handleViewOrder}
    />
  );
};

export default LandingPage;
