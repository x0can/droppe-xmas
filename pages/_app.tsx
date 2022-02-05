import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "easy-peasy";
import "reset-css";
import { store } from "../lib/store";
import { theme } from "../lib/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </ChakraProvider>
  );
};

export default MyApp;
