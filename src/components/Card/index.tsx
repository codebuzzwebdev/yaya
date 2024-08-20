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
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        cursor: "pointer",
      }}
      onClick={handleNavigate}
    >
      <Box position="relative">
        <img
          src={NanniePNG}
          alt="Nannie"
          width="100%"
          height={295}
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
            fontSize={20}
            fontWeight="bold"
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
          bgcolor={theme.palette.grey[200]}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color={theme.palette.common.black}
          >
            Nanny / Nurse
          </Typography>
        </Box>
        <Box
          bgcolor={colors.others.pink}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color={theme.palette.common.white}
          >
            Full Time + Live Out
          </Typography>
        </Box>
        <Box
          bgcolor={colors.others.blue}
          px={1}
          py={0.5}
          borderRadius={1}
          mt={0.5}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            color={theme.palette.common.white}
          >
            More than 10 years
          </Typography>
        </Box>
        <Box display="flex" mt={0.5}>
          <Typography variant="body1" color={theme.palette.common.black}>
            AED2,500-3,000
          </Typography>
          <Typography variant="body1" color={theme.palette.grey[400]}>
            /Mo
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
