import { FC } from "react";
import { useTheme, Box, Typography } from "@mui/material";

import BadgePNG from "@assets/icons/badge.png";
import VideoPNG from "@assets/icons/video.png";

import NanniePNG from "@assets/nannie.png";
import FlagPNG from "@assets/flag2.png";

import * as colors from "@themes/colors";
export interface CardProps {
  handleNavigate: () => void;
}

const Card: FC<CardProps> = ({ handleNavigate }) => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={3}
      sx={{
        border: `0.1px solid ${theme.palette.grey[200]}`,
        boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        cursor: "pointer",
        "&:hover": {
          border: `0.1px solid ${theme.palette.grey[300]}`,
          boxShadow: "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        },
      }}
      onClick={handleNavigate}
    >
      <Box position="relative">
        <img
          src={NanniePNG}
          alt="Nannie"
          width="100%"
          height={220}
          style={{
            objectFit: "cover",
            cursor: "pointer",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
        <img
          src={VideoPNG}
          alt="Video"
          width={32}
          height={32}
          style={{
            objectFit: "cover",
            cursor: "pointer",
            position: "absolute",
            bottom: 16,
            left: 8,
          }}
        />
        <img
          src={BadgePNG}
          alt="Badge"
          width={32}
          height={32}
          style={{
            objectFit: "cover",
            cursor: "pointer",
            position: "absolute",
            bottom: 16,
            right: 8,
          }}
        />
      </Box>
      <Box px={1} pt={1} pb={2}>
        <Box
          borderRadius={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.common.black}
          >
            Jane
          </Typography>
          <img
            src={FlagPNG}
            alt="Flag"
            width={32}
            height={16}
            style={{
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </Box>
        <Box
          bgcolor={theme.palette.grey[400]}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.common.black}
          >
            Nanny / Nurse
          </Typography>
        </Box>
        <Box
          bgcolor={colors.theme.pink}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.common.white}
          >
            Full Time + Live Out
          </Typography>
        </Box>
        <Box
          bgcolor={colors.theme.blue}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.common.white}
          >
            More than 10 years
          </Typography>
        </Box>
        <Box display="flex" mt={0.5}>
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.common.black}
          >
            AED2,500-3,000
          </Typography>
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.grey[300]}
          >
            /Mo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
