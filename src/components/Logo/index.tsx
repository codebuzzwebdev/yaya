import { FC } from "react";
import { Box } from "@mui/material";

// import LogoPNG from "@assets/logo.png";
import Logo1 from "@assets/logo-1.svg";
import Logo2 from "@assets/logo-2.png";

const VITE_WP_URL = import.meta.env.VITE_WP_URL;

export interface LogoProps {
  isFull?: boolean;
}

const Logo: FC<LogoProps> = ({ isFull }) => {
  const navigateToHome = () => {
    window.location.href = VITE_WP_URL;
  };

  if (isFull) {
    return (
      <Box
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={navigateToHome}
      >
        <img src={Logo1} alt="Yaya Middle East" />
      </Box>
    );
  } else {
    return (
      <Box
        display="flex"
        alignItems="center"
        sx={{ cursor: "pointer" }}
        onClick={navigateToHome}
      >
        <Box
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <img src={Logo1} alt="Yaya Middle East" />
        </Box>

        <Box
          display={{
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
            xl: "none",
          }}
        >
          <img src={Logo2} alt="Yaya Middle East" width={40} height={40} />
        </Box>
      </Box>
    );
  }
};

export default Logo;
