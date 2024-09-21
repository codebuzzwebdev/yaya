import { FC } from "react";
import { Box, Pagination as MuiPagination } from "@mui/material";

export interface PaginationProps {
  page: number;
  count: number;
  onChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({  page, count, onChange }) => {
  const handleChange = (_e: any, page: number) => {
    onChange(page);
  };

  return (
    <>
      <Box
        display={{
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        }}
      >
        <Box display="flex" justifyContent="center">
          <MuiPagination
            size="large"
            page={page}
            count={count}
            color="primary"
            onChange={handleChange}
          />
        </Box>
      </Box>

      <Box
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
      >
        <Box display="flex" justifyContent="center">
          <MuiPagination
            size="small"
            page={page}
            count={count}
            color="primary"
            onChange={handleChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default Pagination;
