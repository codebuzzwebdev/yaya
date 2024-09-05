import React, { FC } from "react";
import {
  useTheme,
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export interface SortingProps {
  callback: (e: string) => void;
}

const Sorting: FC<SortingProps> = ({ callback }) => {
  const theme = useTheme();

  const [sort, setSort] = React.useState("Latest");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
    callback(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography
        variant="body1"
        fontSize={{ xs: 14, sm: 14, md: 20, lg: 20, xl: 20 }}
        color={theme.palette.grey[900]}
      >
        Sort by
      </Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label=""
          onChange={handleChange}
        >
          <MenuItem value="Latest">Latest</MenuItem>
          <MenuItem value="Old">Old</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sorting;
