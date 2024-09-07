import { FC } from "react";
import { useTheme, Grid, Box, IconButton, Typography } from "@mui/material";

import Icon from "@components/Icon";
import Logo from "@components/Logo";
import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";
import FlagPNG from "@assets/flag.png";

import { footerItems } from "@utils";

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;

const Footer: FC = () => {
  const theme = useTheme();

  const handleApple = () => {
    window.open(APP_STORE_URL);
  };

  const handleGoogle = () => {
    window.open(PLAY_STORE_URL);
  };

  return (
    <Grid
      container
      spacing={2}
      px={{ xs: 2, sm: 2, md: 4, lg: 12, xl: 12 }}
      py={5}
      bgcolor={theme.palette.secondary.light}
    >
      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
        <Logo />
        <Typography
          variant="body1"
          color={theme.palette.grey[500]}
          fontSize={14}
          mt={2}
          maxWidth="85%"
        >
          Yaya Middle East is the region’s first childcare mobile app,
          revolutionizing the way you find nannies and maids in the UAE. We’re
          committed to streamlining your search, eliminating agency fees, and
          providing a clear, direct, and transparent link to the largest
          database of qualified nannies and maids in the UAE. Discover the ideal
          nanny for your family in Dubai and Abu Dhabi with Yaya—the
          comprehensive 360 childcare app.
        </Typography>

        <Box mt={2} ml={-1}>
          <IconButton>
            <Icon name="facebook" color={theme.palette.common.black} />
          </IconButton>
          <IconButton>
            <Icon name="instagram" color={theme.palette.common.black} />
          </IconButton>
          <IconButton>
            <Icon name="youtube" color={theme.palette.common.black} />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
          <img src={FlagPNG} alt="Flag" width={36} height={24} />
          <Typography variant="body1" fontSize={16} ml={1}>
            UAE
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
        <Grid container spacing={2}>
          {footerItems.map((item, _idx) => (
            <Grid
              key={`${item.title}_${_idx}`}
              item
              xs={12}
              sm={12}
              md={12}
              lg={2.3}
              xl={2.3}
            >
              <Typography variant="body1" fontWeight="bold" fontSize={18}>
                {item.title}
              </Typography>
              {item.items.map((subItem, _idx2) => {
                if (subItem.id === 17) {
                  return (
                    <>
                      <img
                        src={ApplePNG}
                        alt="Apple"
                        width={180}
                        height={50}
                        className="store-images"
                        onClick={handleApple}
                      />
                    </>
                  );
                } else if (subItem.id === 18) {
                  return (
                    <>
                      <img
                        src={GooglePNG}
                        alt="Google"
                        width={180}
                        height={50}
                        className="store-images"
                        onClick={handleGoogle}
                      />
                    </>
                  );
                } else {
                  return (
                    <Typography
                      key={`${subItem.title}_${_idx}_${_idx2}`}
                      variant="body1"
                      color={theme.palette.grey[600]}
                      fontSize={14}
                      mt={2}
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {subItem.title}
                    </Typography>
                  );
                }
              })}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Typography
          variant="body1"
          color={theme.palette.grey[500]}
          textAlign="center"
        >
          © Copyright 2024 Yaya Middle East FZ-LLC. All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
