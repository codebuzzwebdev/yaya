import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import Header from "@components/Header";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card from "@components/Card";
import Sorting from "@components/Sorting";

const Home: FC = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToUser = () => {
    navigate("/user");
  };

  return (
    <>
      <Header handleNavigate={navigateToHome} />
      <Banner />

      <Grid container spacing={2} px={6} py={6}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Nannies in UAE (241)
            </Typography>

            <Sorting />
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Grid container spacing={2}>
            {[...Array(30)].map((item, _idx) => (
              <Grid
                key={`${item}_${_idx}`}
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                xl={3}
              >
                <Card handleNavigate={navigateToUser} />
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
