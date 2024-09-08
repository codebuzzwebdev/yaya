import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import LogoPNG from "@assets/logo.png";

const Logo = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ cursor: "pointer" }}
      onClick={navigateToHome}
    >
      <img src={LogoPNG} alt="Yaya Middle East" width={32} height={32} />
      <Typography
        variant="h6"
        ml={1}
        display={{
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }}
      >
        Yaya Middle East
      </Typography>
    </Box>
  );
};

export default Logo;
