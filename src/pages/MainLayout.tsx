import { FC, ReactElement, Suspense } from "react";
import { Box } from "@mui/material";

import Loader from "@components/Loader";
import Header from "@components/Header";
import Footer from "@components/Footer";

export interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Box position="fixed" width="100vw" zIndex={1000}>
        <Header />
      </Box>
      <Suspense fallback={<Loader />}>
        <Box pt="76px">{children}</Box>
      </Suspense>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default MainLayout;
