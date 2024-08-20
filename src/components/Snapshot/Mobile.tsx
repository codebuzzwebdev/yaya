import { useTheme, Box, Typography } from "@mui/material";

import MapPNG from "@assets/icons/map.png";
import TimerPNG from "@assets/icons/timer.png";
import FileSearchPNG from "@assets/icons/file-search.png";
import FileShieldPNG from "@assets/icons/file-shield.png";
import StarPNG from "@assets/icons/star.png";
import MapPinPNG from "@assets/icons/map-pin.png";

const Snapshot = () => {
  const theme = useTheme();

  return (
    <>
      <Typography variant="h6" fontWeight="bold" mt={2}>
        Snapshot
      </Typography>

      <Box
        borderRadius={4}
        border={`1px solid ${theme.palette.grey[200]}`}
        bgcolor={theme.palette.common.white}
        px={4}
        py={3}
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Age
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.primary.main}
          >
            36
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={MapPNG} alt="Nationality" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Nationality
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            Philippines
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Salary (AED)
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.primary.main}
          >
            AED 2000-4000
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            Monthly Salary
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={TimerPNG} alt="Map" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Job Type
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            Full time + Live out
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={FileSearchPNG} alt="Experience" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Experience
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            5-10 Years
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={FileShieldPNG} alt="Visa" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Visa
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={StarPNG} alt="Available From" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Available From
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            1st July
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
        justifyContent="space-around"
        alignItems="center"
        mt={2}
      >
        <Box textAlign="center">
          <img src={MapPinPNG} alt="Job location" width={32} height={32} />
          <Typography variant="body1" fontSize={18} fontWeight="bold">
            Job location
          </Typography>
          <Typography
            variant="body1"
            fontSize={18}
            color={theme.palette.grey[400]}
          >
            Dubai
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Snapshot;
