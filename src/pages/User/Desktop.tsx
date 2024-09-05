import { FC } from "react";
import { useTheme, Grid, Box, Typography } from "@mui/material";

import { ItemProps } from "@pages/User";

import Loader from "@components/Loader";
import Icon from "@components/Icon";
import Snapshot from "@components/Snapshot";

import BadgePNG from "@assets/icons/white-badge.png";
import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";
import LinkPNG from "@assets/icons/link.png";
import MailPNG from "@assets/icons/mail.png";

import * as colors from "@themes/colors";

export interface DesktopProps {
  loading: boolean;
  data: ItemProps | null;
  handleApple: () => void;
  handleGoogle: () => void;
  handleCopy: () => void;
}

const Desktop: FC<DesktopProps> = ({
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
      px={{ xs: 2, sm: 2, md: 2, lg: 16, xl: 16 }}
      py={6}
    >
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Box display="flex">
          <img
            src={data?.photo}
            alt="Nannie"
            width={185}
            height={185}
            style={{
              objectFit: "cover",
              cursor: "pointer",
              borderRadius: 12,
            }}
          />

          <Box ml={3}>
            <Typography variant="body1" fontSize={18} fontWeight="bold">
              {data?.firstName} {data?.lastName}
            </Typography>

            <Typography
              variant="body1"
              fontSize={16}
              color={theme.palette.grey[600]}
              mt={1}
            >
              {data?.position}
            </Typography>

            <Box display="flex" flexWrap="wrap">
              <Box
                bgcolor={colors.theme.red}
                px={2}
                py={0.5}
                height={28}
                mr={1}
                mt={1}
                borderRadius={1}
                display={data?.isNew ? "block" : "none"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: theme.palette.error.dark,
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
                bgcolor={colors.theme.orange}
                px={2}
                py={0.5}
                height={28}
                mr={1}
                mt={1}
                borderRadius={1}
                display={data?.yayaPick === 1 ? "flex" : "none"}
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
                  width={16}
                  height={16}
                  style={{
                    objectFit: "cover",
                    cursor: "pointer",
                    marginRight: 2,
                    borderRadius: 8,
                  }}
                />
                <Typography
                  variant="body1"
                  fontSize={14}
                  color={theme.palette.common.white}
                >
                  Yaya Pick
                </Typography>
              </Box>
              <Box
                bgcolor={colors.theme.blue}
                px={2}
                py={0.5}
                height={28}
                mr={1}
                mt={1}
                borderRadius={1}
                sx={{
                  display: data?.videoUrl ? "block" : "none",
                  cursor: "pointer",
                  "&:hover": {
                    bgcolor: theme.palette.error.dark,
                  },
                }}
              >
                <Typography
                  variant="body1"
                  fontSize={14}
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
              height={56}
              borderRadius={1}
              mt={3}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  bgcolor: theme.palette.error.dark,
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography
                  variant="body1"
                  fontSize={16}
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
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Typography variant="body1" fontSize={18} fontWeight="bold" mt={2}>
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

        <Typography variant="body1" mt={2}>
          Registered on: {data?.registeredOn}
        </Typography>

        <Typography
          variant="body1"
          fontSize={20}
          color={theme.palette.grey[500]}
          mt={2}
        >
          Download our app today to get started. Now completely free, no hidden
          costs.
        </Typography>

        <Box display="flex" mt={2}>
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
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Snapshot loading={loading} data={data} />
      </Grid>
    </Grid>
  );
};

export default Desktop;
