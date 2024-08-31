import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card from "@components/Card";
import Filters from "@components/Filters";
import Sorting from "@components/Sorting";
import LeftDrawer from "@components/LeftDrawer";

import { cities, nationalities, jobTypes, experiences } from "@utils";

const Home: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToUser = () => {
    navigate("/user");
  };

  return (
    <>
      <Banner />

      <Grid
        container
        spacing={2}
        px={{ xs: 4, sm: 4, md: 6, lg: 8, xl: 8 }}
        py={4}
      >
        <Grid
          display={{
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
          }}
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
        ></Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            justifyContent="space-between"
          >
            <Typography
              variant="body1"
              fontSize={{ xs: 16, sm: 16, md: 24, lg: 24, xl: 24 }}
              fontWeight="bold"
              color={theme.palette.grey[900]}
              mt={2}
            >
              Nannies in UAE (241)
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={{ xs: 2, sm: 2, md: 0, lg: 0, xl: 0 }}
            >
              <Sorting />

              <Box
                display={{
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                }}
              >
                <LeftDrawer
                  isLoading={false}
                  data={{ cities, nationalities, jobTypes, experiences }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={1}
          xl={1}
        ></Grid>

        <Grid
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
          item
          xs={12}
          sm={12}
          md={12}
          lg={3}
          xl={3}
          position="sticky"
          top="76px"
          height="fit-content"
          // sx={{ position: "sticky", top: "76px", height: "fit-content" }}
        >
          <Filters
            isLoading={false}
            data={{ cities, nationalities, jobTypes, experiences }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Grid container spacing={2}>
            {[...Array(80)].map((item, _idx) => (
              <Grid
                key={`${item}_${_idx}`}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                xl={3}
              >
                <Card
                  data={{ firstName: "Jane", lastName: "Doe" }}
                  handleNavigate={navigateToUser}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
};

export default Home;
