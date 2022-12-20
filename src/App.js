// import "./App.css";
import React, { Suspense } from "react";
import { lazy } from "@loadable/component";

import {
  Box,
  Center,
  Spinner,
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";

// custom fonts
import CustomFonts from "../src/Assets/Theme/custom-fonts";

// importing context
// import { ThemeContext } from "../src/context/ThemeContext";

function App() {
  const Home = lazy(() => import("./Pages/HomePage"));

  // custom theme and font
  const theme = extendTheme({
    fonts: {
      heading: `'Gentona', sans-serif`,
      body: `'Gentona Medium', sans-serif`,
    },
    // colors: {
    //   bodyBackground: "#E2E2E2",
    //   fontNormalText: "#323232",
    //   fontContrastColor: "#7a7b7a",
    //   specialText: "#47B053",
    // },
  });

  // preloader
  const renderLoader = () => (
    <>
      <Box>
        <Center w="100%" minH="100vh">
          <Spinner size="xl" mt="12" />
        </Center>
      </Box>
    </>
  );
  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomFonts />
        {/* <ThemeContext.Provider value={theme}> */}
        <Suspense fallback={renderLoader()}>
          <>
            <Home />
          </>
        </Suspense>
        {/* </ThemeContext.Provider> */}
      </ChakraProvider>
    </>
  );
}

export default App;
