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
import LinkPNG from "@assets/icons/link.png";
import MailPNG from "@assets/icons/mail.png";

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
          <Box display="flex" flexDirection="column">
            <Box textAlign="center">
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

              <Box display="flex" justifyContent="center" mt={1}>
                <Box
                  bgcolor={colors.theme.red}
                  px={2}
                  py={1}
                  borderRadius={1}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: theme.palette.error.dark,
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    color={theme.palette.common.white}
                  >
                    New
                  </Typography>
                </Box>
                <Box
                  bgcolor={colors.theme.pink}
                  px={2}
                  py={1}
                  ml={1}
                  borderRadius={1}
                  display="flex"
                  alignItems="center"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      bgcolor: theme.palette.error.dark,
                    },
                  }}
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
              </Box>
            </Box>

            <Box
              position="relative"
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <img
                src={NanniePNG}
                alt="Nannie"
                width="100%"
                height={400}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 32,
                }}
              />
              <Box
                position="absolute"
                bgcolor={colors.theme.pink}
                px={2}
                py={0.5}
                borderRadius={1}
                bottom={16}
                left={16}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: theme.palette.error.dark,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color={theme.palette.common.white}
                >
                  Full Time
                </Typography>
              </Box>
              <Box
                position="absolute"
                bgcolor={colors.theme.blue}
                px={2}
                py={0.5}
                borderRadius={1}
                bottom={16}
                right={16}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: theme.palette.error.dark,
                  },
                }}
              >
                <Typography
                  variant="caption"
                  color={theme.palette.common.white}
                >
                  Video Greeting
                </Typography>
              </Box>
            </Box>
          </Box>

          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Snapshot />

            <Typography variant="h6" fontWeight="bold" mt={2}>
              About Me
            </Typography>

            <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
              Velstar is a Shopify Plus agency, and we partner with brands to
              help them grow, we also do the same with our people!
            </Typography>

            <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
              Here at Velstar, we don't just make websites, we create
              exceptional digital experiences that consumers love. Our team of
              designers, developers, strategists, and creators work together to
              push brands to the next level. From Platform Migration, User
              Experience & User Interface Design, to Digital Marketing, we have
              a proven track record in delivering outstanding eCommerce
              solutions and driving sales for our clients.
            </Typography>

            <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
              The role will involve translating project specifications into
              clean, test-driven, easily maintainable code. You will work with
              the Project and Development teams as well as with the Technical
              Director, adhering closely to project plans and delivering work
              that meets functional & non-functional requirements. You will have
              the opportunity to create new, innovative, secure and scalable
              features for our clients on the Shopify platform
            </Typography>

            <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
              Want to work with us? You're in good company!
            </Typography>

            <Typography variant="h6" fontWeight="bold" mt={2}>
              Share this job:
            </Typography>

            <Box display="flex">
              <Box
                display="flex"
                alignItems="center"
                bgcolor={theme.palette.grey[200]}
                p={1}
                borderRadius={1}
                width="fit-content"
              >
                <img
                  src={LinkPNG}
                  alt="link"
                  width={24}
                  height={24}
                  style={{
                    objectFit: "cover",
                    marginRight: 8,
                  }}
                />
                <Typography
                  variant="body1"
                  color={theme.palette.primary.dark}
                  mr={1}
                >
                  Copy Link
                </Typography>
              </Box>

              <Box
                display="flex"
                alignItems="center"
                bgcolor={theme.palette.grey[200]}
                p={1}
                borderRadius={1}
                ml={1}
              >
                <img
                  src={MailPNG}
                  alt="mail"
                  width={24}
                  height={24}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Typography variant="body1" mt={2}>
            Registered on: 15th June 2024
          </Typography>

          <Box
            bgcolor={theme.palette.primary.dark}
            px={4}
            py={2}
            borderRadius={1}
            mt={1}
            display="flex"
            justifyContent="center"
            textAlign="center"
            sx={{
              cursor: "pointer",
              "&:hover": {
                bgcolor: theme.palette.error.dark,
              },
            }}
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

          <Typography
            variant="body1"
            textAlign="center"
            color={theme.palette.grey[600]}
            mt={2}
          >
            Download our app today to get started. Now completely free, no
            hidden costs.
          </Typography>

          <Box
            display="flex"
            flexDirection="column-reverse"
            justifyContent="center"
            alignItems="center"
            mt={2}
          >
            <img
              src={GooglePNG}
              alt="Google"
              width={180}
              height={50}
              className="store-images"
            />

            <img
              src={ApplePNG}
              alt="Apple"
              width={180}
              height={50}
              className="store-images"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default User;
