import React, { FC } from "react";
import { useTheme, Box, Checkbox, Typography } from "@mui/material";

export interface CheckItemProps {
  name: string;
  label: string;
  count: number;
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckItem: FC<CheckItemProps> = ({
  name,
  label,
  count,
  checked,
  handleChange,
}) => {
  const theme = useTheme();

  return (
    <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
      <Checkbox name={name} checked={checked} onChange={handleChange} />
      <Box width="100%" display="flex" justifyContent="space-between">
        <Typography
          variant="body1"
          color={checked ? theme.palette.primary.main : theme.palette.grey[600]}
        >
          {label}
        </Typography>
        <Typography
          variant="body1"
          color={checked ? theme.palette.primary.main : theme.palette.grey[600]}
        >
          {count}
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckItem;
