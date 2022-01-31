import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";

const theme = extendTheme({
  colors: {
    green: {
      100: "#F0F4C3",
      200: "#E6EE9C",
      300: "#DCE775",
      400: "#D4E157",
      500: "#CDDC39",
      600: "#C0CA33",
      700: "#AFB42B",
      800: "#9E9D24",
      900: "#827717",
    },
    orange: {
      100: "#FFE0B2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
