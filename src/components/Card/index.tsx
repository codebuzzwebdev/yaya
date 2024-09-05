import { FC } from "react";
import { useTheme, Box, Typography } from "@mui/material";

import BadgePNG from "@assets/icons/badge.png";
import VideoPNG from "@assets/icons/video.png";

import FlagPNG from "@assets/flag2.png";

import * as colors from "@themes/colors";

export interface ItemProps {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  jobType: string;
  experience: string;
  minSalary: string;
  maxSalary: string;
  yayaPick: number;
  videoUrl: string;
  photo: string;
  createdAt: number;
}
export interface CardProps {
  data: ItemProps;
  handleNavigate: (data: ItemProps) => void;
}

const Card: FC<CardProps> = ({ data, handleNavigate }) => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={3}
      sx={{
        border: `0.1px solid ${theme.palette.grey[200]}`,
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        cursor: "pointer",
        "&:hover": {
          border: `0.1px solid ${theme.palette.grey[300]}`,
          boxShadow:
            "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        },
      }}
      onClick={() => handleNavigate(data)}
    >
      <Box position="relative">
        <img
          src={data.photo}
          alt="Nannie"
          width="100%"
          height={220}
          style={{
            objectFit: "fill",
            cursor: "pointer",
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
          }}
        />
        <img
          src={VideoPNG}
          alt="Video"
          width={32}
          height={32}
          style={{
            display: data?.videoUrl ? "block" : "none",
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
            display: data.yayaPick === 1 ? "block" : "none",
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
            {data.firstName} {data.lastName}
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
            {data.position}
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
            {data.jobType}
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
            {data.experience}
          </Typography>
        </Box>
        <Box display="flex" mt={0.5}>
          <Typography
            variant="body1"
            fontSize={12}
            color={theme.palette.common.black}
          >
            AED{data.minSalary}-{data.maxSalary}
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
