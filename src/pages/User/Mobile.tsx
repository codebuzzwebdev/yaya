import { FC } from "react";
import { useTheme, Grid, Box, Typography } from "@mui/material";

import { ItemProps } from "@pages/User";

import Loader from "@components/Loader";
import Icon from "@components/Icon";
import Snapshot from "@components/Snapshot";

import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";
import LinkPNG from "@assets/icons/link.png";
import MailPNG from "@assets/icons/mail.png";

import * as colors from "@themes/colors";

export interface MobileProps {
  loading: boolean;
  data: ItemProps | null;
  handleApple: () => void;
  handleGoogle: () => void;
  handleCopy: () => void;
}

const Mobile: FC<MobileProps> = ({
  loading,
  data,
  handleApple,
  handleGoogle,
  handleCopy,
}) => {
  const theme = useTheme();

  if (loading) {
    return (
      <Grid
        container
        spacing={2}
        px={{ xs: 2, sm: 2, md: 2, lg: 16, xl: 16 }}
        py={6}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Loader />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={2}
      px={{ xs: 6, sm: 6, md: 4, lg: 6, xl: 6 }}
      py={6}
    >
      <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
        <Box display="flex" flexDirection="column">
          <Box textAlign="center">
            <Typography variant="body1" fontSize={24} fontWeight="bold">
              {data?.firstName} {data?.lastName}
            </Typography>

            <Typography
              variant="body1"
              fontSize={18}
              color={theme.palette.grey[600]}
              mt={1}
            >
              {data?.position}
            </Typography>

            <Box display="flex" justifyContent="center" mt={1}>
              <Box
                bgcolor={colors.theme.red}
                px={2}
                py={0.5}
                height={28}
                borderRadius={1}
                display={data?.isNew ? "block" : "none"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: theme.palette.primary.main,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={14}
                  color={theme.palette.common.white}
                >
                  New
                </Typography>
              </Box>
              <Box
                bgcolor={colors.theme.green}
                px={2}
                py={0.5}
                height={28}
                ml={1}
                borderRadius={1}
                display={data?.yayaPick === 1 ? "flex" : "none"}
                alignItems="center"
                sx={{
                  cursor: "pointer",
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={14}
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
              src={data?.photo}
              alt="Nannie"
              width="100%"
              height={350}
              style={{
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: 8,
              }}
            />
            <Box
              position="absolute"
              bgcolor={colors.theme.pink}
              px={2}
              py={0.5}
              borderRadius={1}
              bottom={8}
              left={8}
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body1"
                fontSize={10}
                color={theme.palette.common.white}
              >
                {data?.jobType}
              </Typography>
            </Box>
            <Box
              position="absolute"
              bgcolor={colors.theme.blue}
              px={2}
              py={0.5}
              borderRadius={1}
              bottom={8}
              right={8}
              sx={{
                display: data?.videoUrl ? "block" : "none",
                cursor: "pointer",
              }}
            >
              <Typography
                variant="body1"
                fontSize={10}
                color={theme.palette.common.white}
              >
                Video Greeting
              </Typography>
            </Box>
          </Box>
        </Box>

        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
          <Snapshot loading={loading} data={data} />

          <Typography variant="h6" fontWeight="bold" mt={2}>
            About Me
          </Typography>

          <Typography variant="body1" color={theme.palette.grey[600]} mt={2}>
            {data?.about}
          </Typography>

          <Typography variant="body1" fontSize={18} fontWeight="bold" mt={2}>
            Share this job:
          </Typography>

          <Box display="flex">
            <Box
              display="flex"
              alignItems="center"
              bgcolor={colors.theme.light_blue}
              p={1}
              borderRadius={1}
              width="fit-content"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: theme.palette.error.light,
                },
              }}
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
                onClick={handleCopy}
              >
                Copy Link
              </Typography>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              bgcolor={colors.theme.light_blue}
              p={1}
              borderRadius={1}
              width="fit-content"
              ml={1}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: theme.palette.error.light,
                },
              }}
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
          Registered on: {data?.registeredOn}
        </Typography>

        <Box
          bgcolor={theme.palette.primary.main}
          px={4}
          py={2}
          borderRadius={1}
          mt={1}
          display="flex"
          justifyContent="center"
          textAlign="center"
          sx={{
            cursor: "pointer",
          }}
        >
          <Box display="flex" alignItems="center">
            <Typography variant="h6" color={theme.palette.common.white} mr={1}>
              Connect Now
            </Typography>
            <Icon name="rightArrow" color={theme.palette.common.white} />
          </Box>
        </Box>

        <Typography
          variant="body1"
          fontSize={20}
          color={theme.palette.grey[500]}
          mt={2}
          textAlign="center"
        >
          Download our app today to get started. Now completely free, no hidden
          costs.
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
      </Grid>
    </Grid>
  );
};

export default Mobile;
