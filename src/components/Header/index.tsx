import { FC } from "react";
import {
  useTheme,
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";

import Icon from "@components/Icon";

import Logo from "@assets/logo.png";
import Flag from "@assets/flag.png";

export interface HeaderProps {
  handleNavigate: () => void;
}

const Header: FC<HeaderProps> = ({ handleNavigate }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      px={{ xs: 1, sm: 1, md: 1, lg: 6 }}
      py={2}
      bgcolor={theme.palette.primary.light}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            sx={{ cursor: "pointer" }}
            onClick={handleNavigate}
          >
            <img src={Logo} alt="Yaya Middle East" width={32} height={32} />
            <Typography
              variant="h6"
              ml={1}
              fontWeight="bold"
              display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
            >
              Yaya Middle East
            </Typography>
          </Box>

          <Box display={{ xs: "none", sm: "none", md: "none", lg: "block" }}>
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
                    color={theme.palette.grey[500]}
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
                    "&:hover": { color: theme.palette.primary.dark },
                  }}
                  color={theme.palette.grey[800]}
                >
                  UAE
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ ml: 2, fontSize: 16 }}
              >
                Download
              </Button>
            </Box>
          </Box>

          <Box display={{ xs: "block", sm: "block", md: "block", lg: "none" }}>
            <IconButton>
              <Icon name="menu" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
