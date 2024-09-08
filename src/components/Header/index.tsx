import { FC } from "react";
import { useTheme, Box, Button } from "@mui/material";

import LeftDrawer from "@components/Header/LeftDrawer";
import HoverMenu from "@components/HoverMenu";
import FlagMenu from "@components/FlagMenu";
import Logo from "@components/Logo";

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
          md: "block",
          lg: "block",
          xl: "block",
        }}
      >
        <Box
          px={{ xs: 2, sm: 2, md: "70px", lg: "70px", xl: "70px" }}
          py="10px"
          mt="0px"
          display="flex"
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
          justifyContent="space-between"
          alignItems="center"
          height="72px"
        >
          <Box>
            <Logo />
          </Box>

          <Box
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 2, md: 2, lg: 0, xl: 0 }}
          >
            {headerItems.map((item, _idx) => (
              <HoverMenu
                key={`${item.title}_${_idx}`}
                menu={item.title}
                items={item.items}
              />
            ))}
            <FlagMenu />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ml: 3, mr: 3 }}
            >
              DOWNLOAD
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor={theme.palette.common.white}
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Box
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo />
          <LeftDrawer />
        </Box>
      </Box>
    </>
  );
};

export default Header;
