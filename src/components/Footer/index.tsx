import { FC, useEffect, useState } from "react";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Icon from "@components/Icon";

import FooterPNG from "@assets/footer.png";

const Footer: FC = () => {
  const theme = useTheme();

  const handleResize = () => {
    const width = window.innerWidth;
    if (width <= 1200) {
      setMobile(true);
      return;
    }
    setMobile(false);
  };

  const [isMobile, setMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <Grid container px={2} py={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            px={6}
            py={6}
            borderRadius={6}
            bgcolor={theme.palette.primary.light}
          >
            <Box>
              <img
                src={FooterPNG}
                alt="Footer"
                width={329}
                height={346}
                style={{ objectFit: "cover", marginBottom: 48 }}
              />

              <Box display="flex" justifyContent="center" textAlign="center">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.common.black}
                >
                  Become a
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  mx={1}
                  color={theme.palette.primary.main}
                >
                  Nanny
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={theme.palette.common.black}
                >
                  on UAE’s
                </Typography>
              </Box>
              <Typography
                variant="h5"
                fontWeight="bold"
                color={theme.palette.common.black}
              >
                #1 Nanny App
              </Typography>

              <Box
                bgcolor={theme.palette.common.white}
                display="inline-block"
                px={4}
                py={1}
                borderRadius={2}
                mt={4}
              >
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
          </Box>
        </Grid>
      </Grid>
    );
  }

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

            <Box
              bgcolor={theme.palette.common.white}
              display="inline-block"
              px={4}
              py={1}
              borderRadius={2}
              mt={4}
            >
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
