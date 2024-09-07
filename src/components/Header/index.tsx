import { FC } from "react";
import { useTheme, Grid, Box, Typography, Button } from "@mui/material";

import LeftDrawer from "@components/Header/LeftDrawer";
import HoverMenu from "@components/HoverMenu";
import Logo from "@components/Logo";
import Icon from "@components/Icon";

import FlagPNG from "@assets/flag.png";

import { headerItems } from "@utils";

const Header: FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        bgcolor={theme.palette.common.white}
        display={{
          xs: "none",
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block",
        }}
      >
        <Grid
          container
          spacing={1}
          px={{ xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }}
          py={2.5}
        >
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Logo />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {headerItems.map((item, _idx) => (
                <HoverMenu
                  key={`${item.title}_${_idx}`}
                  menu={item.title}
                  items={item.items}
                />
              ))}
              <Box display="flex" alignItems="center">
                <img src={FlagPNG} alt="Flag" width={36} height={24} />
                <Typography variant="body1" fontSize={16} ml={2}>
                  UAE
                </Typography>
                <Box ml={0.5}>
                  <Icon name="down" size={12} />
                </Box>
              </Box>
              <Button variant="contained" color="primary" size="large">
                DOWNLOAD
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        bgcolor={theme.palette.common.white}
        display={{
          xs: "block",
          sm: "block",
          md: "block",
          lg: "none",
          xl: "none",
        }}
      >
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
          <Logo />
          <LeftDrawer />
        </Box>
      </Box>
    </>
  );
};

export default Header;
