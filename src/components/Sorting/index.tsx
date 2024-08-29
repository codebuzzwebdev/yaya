import React, { FC } from "react";
import {
  Box,
  Typography,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const Sorting: FC = () => {
  const [sort, setSort] = React.useState("Latest");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="body1" fontWeight="bold">Sort by</Typography>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sort}
          label=""
          onChange={handleChange}
        >
          <MenuItem value="Recent">Recent</MenuItem>
          <MenuItem value="Latest">Latest</MenuItem>
          <MenuItem value="Old">Old</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sorting;
