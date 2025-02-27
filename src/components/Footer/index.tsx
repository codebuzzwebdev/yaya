import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Grid, Box, IconButton, Typography } from "@mui/material";

import Icon from "@components/Icon";
import Logo from "@components/Logo";
import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";
import UAESVG from "@assets/uae.svg";

import { footerItems } from "@utils";

const VITE_APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const VITE_PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;
const VITE_WP_URL = import.meta.env.VITE_WP_URL;
const VITE_FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL;
const VITE_INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL;
const VITE_YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL;

const Footer: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleMenu = (url: string) => {
    if (url !== "#" && !url.includes("?")) {
      window.location.href = `${VITE_WP_URL}${url}`;
    } else {
      navigate(url);
    }
  };

  const handleApple = () => {
    window.open(VITE_APP_STORE_URL);
  };

  const handleGoogle = () => {
    window.open(VITE_PLAY_STORE_URL);
  };

  const handleFacebook = () => {
    window.open(VITE_FACEBOOK_URL);
  };

  const handleInstagram = () => {
    window.open(VITE_INSTAGRAM_URL);
  };

  const handleYoutube = () => {
    window.open(VITE_YOUTUBE_URL);
  };

  return (
    <>
      <Grid
        container
        px={{ xs: 2, sm: 2, md: 4, lg: "90px", xl: "90px" }}
        pt="50px"
        bgcolor={theme.palette.secondary.light}
      >
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Logo isFull />
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
            database of qualified nannies and maids in the UAE. Discover the
            ideal nanny for your family in Dubai and Abu Dhabi with Yaya—the
            comprehensive 360 childcare app.
          </Typography>

          <Box mt={2} ml={-1}>
            <IconButton onClick={handleFacebook}>
              <Icon name="facebook" color={theme.palette.common.black} />
            </IconButton>
            <IconButton onClick={handleInstagram}>
              <Icon name="instagram" color={theme.palette.common.black} />
            </IconButton>
            <IconButton onClick={handleYoutube}>
              <Icon name="youtube" color={theme.palette.common.black} />
            </IconButton>
          </Box>

          <Box display="flex" alignItems="center" mt={2}>
            <img src={UAESVG} alt="Flag" width={36} height={24} />
            <Typography variant="body1" fontSize={16} ml={1}>
              UAE
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={8}
          xl={8}
          mt={{ xs: 3, sm: 3, md: 3, lg: 0, xl: 0 }}
        >
          <Grid container>
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
                      <Box key={`${subItem.title}_${_idx}_${_idx2}`}>
                        <img
                          src={ApplePNG}
                          alt="Apple"
                          width={180}
                          height={50}
                          className="store-images"
                          onClick={handleApple}
                        />
                      </Box>
                    );
                  } else if (subItem.id === 18) {
                    return (
                      <Box key={`${subItem.title}_${_idx}_${_idx2}`}>
                        <img
                          src={GooglePNG}
                          alt="Google"
                          width={180}
                          height={50}
                          className="store-images"
                          onClick={handleGoogle}
                        />
                      </Box>
                    );
                  } else {
                    return (
                      <Typography
                        key={`${subItem.title}_${_idx}_${_idx2}`}
                        variant="body1"
                        color={theme.palette.grey[600]}
                        fontSize={14}
                        my={3}
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                        onClick={() => handleMenu(subItem.url)}
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
      </Grid>
      <Typography
        variant="body1"
        color={theme.palette.grey[500]}
        textAlign="center"
        sx={{
          py: "40px",
          px: "8px",
        }}
      >
        © Copyright 2024 Yaya Middle East FZ-LLC. All rights reserved.
      </Typography>
    </>
  );
};

export default Footer;
