import { FC } from "react";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Icon from "@components/Icon";

import FooterPNG from "@assets/footer.png";

const Footer: FC = () => {
  const theme = useTheme();

  return (
    <Grid container px={6} py={12}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          px={6}
          borderRadius={6}
          bgcolor={theme.palette.primary.light}
          height={298}
        >
          <Box>
            <Box display="flex">
              <Typography
                variant="h4"
                fontWeight="bold"
                color={theme.palette.common.black}
              >
                Become a
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                mx={1}
                color={theme.palette.primary.main}
              >
                Nanny
              </Typography>
              <Typography
                variant="h4"
                fontWeight="bold"
                color={theme.palette.common.black}
              >
                on UAE’s
              </Typography>
            </Box>
            <Typography
              variant="h4"
              fontWeight="bold"
              color={theme.palette.common.black}
            >
              #1 Nanny App
            </Typography>

            <Box bgcolor={theme.palette.common.white} display="inline-block" px={4} py={1} borderRadius={2} mt={4}>
              <Box display="flex" alignItems="center">
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                mr={1}
              >
                Find out more
              </Typography>
              <Icon name="rightArrow" color={theme.palette.primary.main} />
              </Box>
            </Box>
          </Box>

          <img
            src={FooterPNG}
            alt="Footer"
            width={329}
            height={346}
            style={{ objectFit: "cover", marginBottom: 48 }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
