import { FC, ReactElement, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

import Loader from "@components/Loader";
import Header from "@components/Header";

export interface MainLayoutProps {
  children: ReactElement;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Box position="fixed" width="100vw" zIndex={1000}>
        <Header handleNavigate={navigateToHome} />
      </Box>
      <Suspense fallback={<Loader />}>
        <Box pt="76px">{children}</Box>
      </Suspense>
    </>
  );
};

export default MainLayout;
