import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Header from "@components/Header";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card from "@components/Card";
import Filters from "@components/Filters";
import Sorting from "@components/Sorting";
import LeftDrawer from "@components/LeftDrawer";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

import { CityType, NationalityType, JobType, ExperienceType } from "@utils";

const Home: FC = () => {
  const theme = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [cities, setCities] = useState<CityType[]>([]);
  const [nationalities, setNationalities] = useState<NationalityType[]>([]);
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const navigate = useNavigate();

  const fetchFilters = async () => {
    const res1: any = await request(apis.GET_COUNTRIES_API, {
      method: constants.POST,
    });
    const res2: any = await request(apis.GET_NATIONALITIES_API, {
      method: constants.POST,
    });
    const res3: any = await request(apis.GET_JOB_TYPES_API, {
      method: constants.POST,
    });
    const res4: any = await request(apis.GET_EXPERIENCES_API, {
      method: constants.POST,
    });
    const _cities: CityType[] = res1.data.data.map((ele: any) => {
      return {
        label: ele.country,
        count: ele.id,
        checked: false,
      };
    });
    const _nationalities: CityType[] = res2.data.data.map((ele: any) => {
      return {
        label: ele.nationality,
        count: ele.id,
        checked: false,
      };
    });
    const _jobTypes: JobType[] = res3.data.data.map((ele: any) => {
      return {
        label: ele.title,
        count: ele.id,
        checked: false,
      };
    });
    const _experiences: ExperienceType[] = res4.data.data.map((ele: any) => {
      return {
        label: `${ele.experienceOperator} ${ele.years} year(s)`,
        count: ele.id,
        checked: false,
      };
    });
    setCities(_cities);
    setNationalities(_nationalities);
    setJobTypes(_jobTypes);
    setExperiences(_experiences);
    setLoading(false);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

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
                  isLoading={isLoading}
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
        >
          <Filters
            isLoading={isLoading}
            data={{ cities, nationalities, jobTypes, experiences }}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Grid container spacing={2}>
            {[...Array(8)].map((item, _idx) => (
              <Grid
                key={`${item}_${_idx}`}
                item
                xs={12}
                sm={6}
                md={4}
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
