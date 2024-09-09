import { FC, useEffect, useState } from "react";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import BannerPNG from "@assets/banner.png";
import BannerSquarePNG from "@assets/banner-square.png";
import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;

const Banner: FC = () => {
  const theme = useTheme();

  const getImageSrc = () => {
    const width = window.innerWidth;
    if (width <= 1200) return BannerSquarePNG;
    return BannerPNG;
  };

  const [imageSrc, setImageSrc] = useState(getImageSrc());

  useEffect(() => {
    function handleResize() {
      setImageSrc(getImageSrc());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleApple = () => {
    window.open(APP_STORE_URL);
  };

  const handleGoogle = () => {
    window.open(PLAY_STORE_URL);
  };

  return (
    <Grid
      container
      px={{ xs: 1, sm: 1, md: 2, lg: "70px" }}
      py={{ xs: 2, sm: 2, md: 4, lg: 0 }}
      pr={{ lg: 0 }}
      bgcolor={theme.palette.secondary.light}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
        >
          <Box
            textAlign={{
              xs: "center",
              sm: "center",
              md: "center",
              lg: "left",
              xl: "left",
            }}
            mt={{ xs: 3, sm: 3, md: 3, lg: 0, xl: 0 }}
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
              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.grey[700]}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                Discover
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.grey[700]}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                Hundreds of
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.primary.main}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                Nannies in UAE
              </Typography>
              <Typography
                variant="body1"
                mt={2}
                fontSize={20}
                color={theme.palette.grey[600]}
              >
                Download our app today to get started. Now
              </Typography>
              <Typography
                variant="body1"
                mb={2}
                fontSize={20}
                color={theme.palette.grey[600]}
              >
                completely free, no hidden costs.
              </Typography>
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
              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.grey[700]}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                Search through
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.grey[700]}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                hundreds of
              </Typography>

              <Typography
                variant="h2"
                fontWeight="bold"
                color={theme.palette.primary.main}
                fontSize={{ xs: 36, sm: 36, md: 64, lg: 64, xl: 64 }}
              >
                Nannies in UAE
              </Typography>
              <Typography
                variant="body1"
                my={2}
                fontSize={20}
                color={theme.palette.grey[600]}
              >
                Download our app today to get started. Now completely free, no
                hidden costs.
              </Typography>
            </Box>

            <Box
              display="flex"
              flexDirection={{
                xs: "column-reverse",
                sm: "column-reverse",
                md: "column-reverse",
                lg: "row",
              }}
              justifyContent={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
              alignItems={{
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              }}
            >
              <img
                src={GooglePNG}
                alt="Google"
                width={180}
                height={50}
                className="store-images"
                onClick={handleGoogle}
              />

              <img
                src={ApplePNG}
                alt="Apple"
                width={180}
                height={50}
                className="store-images"
                onClick={handleApple}
              />
            </Box>
          </Box>

          <Box
            width={{ xs: 290, sm: 290, md: 600, lg: 800, xl: 800 }}
            height={{ xs: 220, sm: 220, md: 475, lg: 550, xl: 550 }}
          >
            <img
              src={imageSrc}
              alt="Yaya Middle East"
              width="100%"
              height="100%"
              style={{ objectFit: "cover", borderRadius: 8 }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
