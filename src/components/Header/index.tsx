import { FC } from "react";
import { useTheme, Box, Grid, Typography, Button } from "@mui/material";

import Logo from "@assets/logo.png";
import Flag from "@assets/flag.png";

export interface HeaderProps {
  handleNavigate: () => void;
}

const Header: FC<HeaderProps> = ({ handleNavigate }) => {
  const theme = useTheme();

  return (
    <Grid container px={6} py={2} position="fixed" zIndex={1000} bgcolor={theme.palette.grey[50]}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }} onClick={handleNavigate}>
            <img src={Logo} alt="Yaya Middle East" width={32} height={32} />
            <Typography variant="h5" ml={1} fontWeight="bold">
              Yaya Middle East
            </Typography>
          </Box>

          <Box display="flex" alignItems="center">
            {["Home", "About Us", "Services", "Resources", "Support"].map(
              (item, _idx) => (
                <Typography
                  key={`${item}_${_idx}`}
                  variant="body1"
                  mx={2}
                  sx={{
                    cursor: "pointer",
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                  color={theme.palette.secondary.main}
                >
                  {item}
                </Typography>
              )
            )}

            <Box
              display="flex"
              alignItems="center"
              mx={2}
              sx={{ cursor: "pointer" }}
            >
              <img src={Flag} alt="Flag" width={36} height={24} />
              <Typography
                variant="body1"
                ml={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                UAE
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ml: 2 }}
            >
              Download
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
