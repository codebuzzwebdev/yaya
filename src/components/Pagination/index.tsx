import { Box, Pagination as MuiPagination } from "@mui/material";

const Pagination = () => {
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
          <MuiPagination size="large" count={10} color="primary" />
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
          <MuiPagination size="small" count={10} color="primary" />
        </Box>
      </Box>
    </>
  );
};

export default Pagination;
