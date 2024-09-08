import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

// import LogoPNG from "@assets/logo.png";
import Logo1 from "@assets/logo-1.svg";
import Logo2 from "@assets/logo-2.png";

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
      <Box
        display={{
          xs: "none",
          sm: "none",
          md: "block",
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
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <img src={Logo2} alt="Yaya Middle East" width={40} height={40} />
      </Box>
    </Box>
  );
};

export default Logo;
