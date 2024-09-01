import { FC } from "react";
import { useTheme, Box, Typography, Divider } from "@mui/material";

import { ItemProps } from "@pages/User";

import Loader from "@components/Loader";

import MapPNG from "@assets/icons/map.png";
import TimerPNG from "@assets/icons/timer.png";
import FileSearchPNG from "@assets/icons/file-search.png";
import FileShieldPNG from "@assets/icons/file-shield.png";
import StarPNG from "@assets/icons/star.png";
import MapPinPNG from "@assets/icons/map-pin.png";

export interface DesktopProps {
  loading: boolean;
  data: ItemProps | null;
}

const Desktop: FC<DesktopProps> = ({ loading, data }) => {
  const theme = useTheme();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Typography variant="body1" fontSize={18} fontWeight="bold" mt={2}>
        Snapshot
      </Typography>

      <Box
        borderRadius={4}
        border={`1px solid ${theme.palette.grey[200]}`}
        bgcolor={theme.palette.common.white}
        px={4}
        py={3}
        display="flex"
        alignItems="center"
        mt={2}
      >
        <Box width="50%" textAlign="center">
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Age
          </Typography>
          <Typography
            variant="body1"
            fontSize={20}
            color={theme.palette.primary.main}
          >
            36
          </Typography>
        </Box>

        <Divider orientation="vertical" sx={{ height: 50 }} />

        <Box width="50%" textAlign="center">
          <img src={MapPNG} alt="Nationality" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Nationality
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            {data?.nationality}
          </Typography>
        </Box>
      </Box>

      <Box
        borderRadius={4}
        border={`1px solid ${theme.palette.grey[200]}`}
        bgcolor={theme.palette.common.white}
        px={4}
        py={3}
        display="flex"
        alignItems="center"
        mt={2}
      >
        <Box width="50%" textAlign="center">
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Salary (AED)
          </Typography>
          <Typography
            variant="body1"
            fontSize={20}
            color={theme.palette.primary.main}
          >
            AED {data?.minSalary}-{data?.maxSalary}
          </Typography>
          <Typography
            variant="body1"
            fontSize={14}
            color={theme.palette.grey[300]}
          >
            Monthly Salary
          </Typography>
        </Box>

        <Divider orientation="vertical" sx={{ height: 50 }} />

        <Box width="50%" textAlign="center">
          <img src={TimerPNG} alt="Map" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Job Type
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            {data?.jobType}
          </Typography>
        </Box>
      </Box>

      <Box
        borderRadius={4}
        border={`1px solid ${theme.palette.grey[200]}`}
        bgcolor={theme.palette.common.white}
        px={4}
        py={3}
        display="flex"
        alignItems="center"
        mt={2}
      >
        <Box width="50%" textAlign="center">
          <img src={FileSearchPNG} alt="Experience" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Experience
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            {data?.experience}
          </Typography>
        </Box>

        <Divider orientation="vertical" sx={{ height: 50 }} />

        <Box width="50%" textAlign="center">
          <img src={FileShieldPNG} alt="Visa" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Visa
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            Visa Required
          </Typography>
        </Box>
      </Box>

      <Box
        borderRadius={4}
        border={`1px solid ${theme.palette.grey[200]}`}
        bgcolor={theme.palette.common.white}
        px={4}
        py={3}
        display="flex"
        alignItems="center"
        mt={2}
      >
        <Box width="50%" textAlign="center">
          <img src={StarPNG} alt="Available From" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Available From
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            1st July
          </Typography>
        </Box>

        <Divider orientation="vertical" sx={{ height: 50 }} />

        <Box width="50%" textAlign="center">
          <img src={MapPinPNG} alt="Job location" width={32} height={32} />
          <Typography variant="body1" fontSize={16} fontWeight="bold">
            Job location
          </Typography>
          <Typography
            variant="body1"
            fontSize={16}
            color={theme.palette.grey[300]}
          >
            {data?.jobLocation}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Desktop;
