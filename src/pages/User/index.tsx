import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Grid, Box, Typography } from "@mui/material";

import Header from "@components/Header";
import Icon from "@components/Icon";
import Snapshot from "@components/Snapshot";

import BadgePNG from "@assets/icons/white-badge.png";
import NanniePNG from "@assets/nannie.png";
import GooglePNG from "@assets/google.png";
import ApplePNG from "@assets/apple.png";

import * as colors from "@themes/colors";

const User: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      <Header handleNavigate={navigateToHome} />

      <Grid container spacing={2} px={6} py={6}>
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <Box display="flex">
            <img
              src={NanniePNG}
              alt="Nannie"
              width={185}
              height={185}
              style={{
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: 16,
              }}
            />

            <Box ml={3}>
              <Typography variant="body1" fontWeight="bold">
                Jane Doe
              </Typography>

              <Typography
                variant="body1"
                color={theme.palette.grey[600]}
                mt={1}
              >
                Nanny / Nurse
              </Typography>

              <Box display="flex" mt={1}>
                <Box bgcolor={colors.others.red} px={2} py={1} borderRadius={1}>
                  <Typography
                    variant="body1"
                    color={theme.palette.common.white}
                  >
                    New
                  </Typography>
                </Box>
                <Box
                  bgcolor={colors.others.pink}
                  px={2}
                  py={1}
                  ml={1}
                  borderRadius={1}
                  display="flex"
                  alignItems="center"
                >
                  <img
                    src={BadgePNG}
                    alt="Badge"
                    width={20}
                    height={20}
                    style={{
                      objectFit: "cover",
                      cursor: "pointer",
                      marginRight: 2,
                      borderRadius: 8,
                    }}
                  />
                  <Typography
                    variant="body1"
                    color={theme.palette.common.white}
                  >
                    Yaya Pick
                  </Typography>
                </Box>
                <Box
                  bgcolor={colors.others.blue}
                  px={2}
                  py={1}
                  ml={1}
                  borderRadius={1}
                >
                  <Typography
                    variant="body1"
                    color={theme.palette.common.white}
                  >
                    Video Greeting
                  </Typography>
                </Box>
              </Box>

              <Box
                bgcolor={theme.palette.primary.main}
                display="inline-block"
                px={4}
                py={2}
                borderRadius={1}
                mt={1}
              >
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h6"
                    color={theme.palette.common.white}
                    mr={1}
                  >
                    Connect Now
                  </Typography>
                  <Icon name="rightArrow" color={theme.palette.common.white} />
                </Box>
              </Box>
            </Box>
          </Box>

          <Typography variant="h6" fontWeight="bold" mt={2}>
            About Me
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            Velstar is a Shopify Plus agency, and we partner with brands to help
            them grow, we also do the same with our people!
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            Here at Velstar, we don't just make websites, we create exceptional
            digital experiences that consumers love. Our team of designers,
            developers, strategists, and creators work together to push brands
            to the next level. From Platform Migration, User Experience & User
            Interface Design, to Digital Marketing, we have a proven track
            record in delivering outstanding eCommerce solutions and driving
            sales for our clients.
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            The role will involve translating project specifications into clean,
            test-driven, easily maintainable code. You will work with the
            Project and Development teams as well as with the Technical
            Director, adhering closely to project plans and delivering work that
            meets functional & non-functional requirements. You will have the
            opportunity to create new, innovative, secure and scalable features
            for our clients on the Shopify platform
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            Want to work with us? You're in good company!
          </Typography>

          <Typography variant="h6" fontWeight="bold" mt={2}>
            Share this job:
          </Typography>

          <Typography variant="body1" mt={2}>
            Registered on: 15th June 2024
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            Download our app today to get started. Now completely free, no
            hidden costs.
          </Typography>

          <Box display="flex" mt={2}>
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
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Snapshot />
        </Grid>
      </Grid>
    </>
  );
};

export default User;
