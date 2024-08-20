import React, { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Sorting:FC = () => {
  const [sort, setSort] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Sorting</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={sort}
        label="Sorting"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={0}>Recent</MenuItem>
        <MenuItem value={1}>Latest</MenuItem>
        <MenuItem value={2}>Old</MenuItem>
      </Select>
    </FormControl>
  );
}

export default Sorting;