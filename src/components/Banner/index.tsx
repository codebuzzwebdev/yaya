import { FC } from "react";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import BannerPNG from "@assets/banner.png";
import GooglePNG from "@assets/google.png";
import ApplePNG from "@assets/apple.png";
const Banner: FC = () => {
  const theme = useTheme();

  return (
    <Grid container px={6} bgcolor={theme.palette.grey[100]}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
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
              maxWidth={320}
              my={2}
              color={theme.palette.secondary.main}
            >
              Download our app today to get started. Now completely free, no
              hidden costs.
            </Typography>

            <img
              src={GooglePNG}
              alt="Google"
              width={180}
              height={50}
              style={{
                objectFit: "cover",
                cursor: "pointer",
                marginRight: 8,
                borderRadius: 8,
              }}
            />

            <img
              src={ApplePNG}
              alt="Apple"
              width={180}
              height={50}
              style={{ objectFit: "cover", cursor: "pointer", borderRadius: 8 }}
            />
          </Box>

          <img
            src={BannerPNG}
            alt="Yaya Middle East"
            width={800}
            height={550}
            style={{ objectFit: "cover" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Banner;
