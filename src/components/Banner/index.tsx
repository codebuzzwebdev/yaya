import { FC, useEffect, useState } from "react";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import BannerPNG from "@assets/banner.png";
import BannerSquarePNG from "@assets/banner-square.png";
import GooglePNG from "@assets/google.png";
import ApplePNG from "@assets/apple.png";
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

  return (
    <Grid
      container
      px={{ xs: 2, sm: 2, md: 2, lg: 6 }}
      py={{ xs: 4, sm: 4, md: 4, lg: 0 }}
      bgcolor={theme.palette.grey[100]}
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
            textAlign={{ xs: "center", sm: "center", md: "center", lg: "left" }}
          >
            <Typography
              variant="h2"
              fontWeight="bold"
              color={theme.palette.common.black}
            >
              Discover
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              color={theme.palette.common.black}
            >
              Hundreds of
            </Typography>

            <Typography
              variant="h2"
              fontWeight="bold"
              color={theme.palette.primary.main}
            >
              Nannies in UAE
            </Typography>

            <Typography
              variant="body1"
              my={2}
              color={theme.palette.secondary.main}
            >
              Download our app today to get started. Now completely free, no
              hidden costs.
            </Typography>

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
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  marginRight: 8,
                  marginTop: 8,
                  borderRadius: 8,
                }}
              />

              <img
                src={ApplePNG}
                alt="Apple"
                width={180}
                height={50}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  marginTop: 8,
                  borderRadius: 8,
                }}
              />
            </Box>
          </Box>

          <Box
            width={{ xs: 400, sm: 400, md: 600, lg: 800 }}
            height={{ xs: 275, sm: 275, md: 475, lg: 550 }}
          >
            <img
              src={imageSrc}
              alt="Yaya Middle East"
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
