import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Loader from "@components/Loader";
import Banner from "@components/Banner";
import Footer from "@components/Footer";
import Card, { ItemProps } from "@components/Card";
import Filters from "@components/Filters";
import Sorting from "@components/Sorting";
import LeftDrawer from "@components/LeftDrawer";
import Pagination from "@components/Pagination";

import PlaceholderPNG from "@assets/placeholder.png";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

import { CityType, NationalityType, JobType, ExperienceType } from "@utils";

const BASE_URL = import.meta.env.VITE_IMAGE_URL;

const Home: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ItemProps[]>([]);
  const [isFilterLoading, setFilterLoading] = useState(true);
  const [cities, setCities] = useState<CityType[]>([]);
  const [nationalities, setNationalities] = useState<NationalityType[]>([]);
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  const fetchFilters = async () => {
    try {
      const formData = new FormData();
      formData.append("country", "United Arab Emirates");
      const [res1, res2, res3, res4]: any = await Promise.all([
        request(apis.GET_CITIES_API, {
          method: constants.POST,
          data: formData,
        }),
        request(apis.GET_NATIONALITIES_API, { method: constants.POST }),
        request(apis.GET_JOB_TYPES_API, { method: constants.POST }),
        request(apis.GET_EXPERIENCES_API, { method: constants.POST }),
      ]);

      const _cities: CityType[] = res1.data.data.map((ele: any) => ({
        id: ele.id,
        label: ele.city,
        count: ele.count,
        checked: false,
      }));

      const _nationalities: CityType[] = res2.data.data.map((ele: any) => ({
        id: ele.id,
        label: ele.nationality,
        count: ele.count,
        checked: false,
      }));

      const _jobTypes: JobType[] = res3.data.data.map((ele: any) => ({
        id: ele.id,
        label: ele.title,
        count: ele.count,
        checked: false,
      }));

      const _experiences: ExperienceType[] = res4.data.data.map((ele: any) => ({
        id: ele.id,
        label: `${ele.experienceOperator} ${ele.years} year(s)`,
        count: ele.count,
        checked: false,
      }));

      setCities(_cities);
      setNationalities(_nationalities);
      setJobTypes(_jobTypes);
      setExperiences(_experiences);
    } catch (error) {
      console.error("Error fetching filter data:", error);
    } finally {
      setFilterLoading(false);
    }
  };

  const fetchNannies = async () => {
    const res: any = await request(apis.GET_FILTERED_NANNIES_API, {
      method: constants.POST,
    });
    const _data: ItemProps[] = res.data.data.helpers.map((ele: any) => {
      return {
        id: ele?.id,
        firstName: ele?.firstName,
        lastName: ele?.lastName,
        position: ele?.position?.title || "NA",
        jobType: ele?.jobType?.title || "NA",
        experience:
          `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
          "NA",
        minSalary: `${ele?.minSalary.toLocaleString()}` || "NA",
        maxSalary: `${ele?.maxSalary.toLocaleString()}` || "NA",
        yayaPick: ele?.yayaPick,
        photo:
          ele.photos && ele.photos.length > 0 && ele.photos[0].imageUrl
            ? `${BASE_URL}/${ele.photos[0].imageUrl}`
            : PlaceholderPNG,
      };
    });
    setData(_data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNannies();
    fetchFilters();
  }, []);

  const fetchFilteredNannies = async ({
    nationalities,
    cities,
    jobTypes,
    experiences,
    minSalary,
    maxSalary,
  }: any) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("nationalities", JSON.stringify(nationalities));
    formData.append("city", JSON.stringify(cities));
    formData.append("positionType", JSON.stringify(jobTypes));
    formData.append("experiences", JSON.stringify(experiences));
    formData.append("minSalary", minSalary);
    formData.append("maxSalary", maxSalary);
    const res: any = await request(apis.GET_FILTERED_NANNIES_API, {
      method: constants.POST,
      data: formData,
    });
    const _data: ItemProps[] = res.data.data.helpers.map((ele: any) => {
      return {
        id: ele?.id,
        firstName: ele?.firstName,
        lastName: ele?.lastName,
        position: ele?.position?.title || "NA",
        jobType: ele?.jobType?.title || "NA",
        experience:
          `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
          "NA",
        minSalary: `${ele?.minSalary.toLocaleString()}` || "NA",
        maxSalary: `${ele?.maxSalary.toLocaleString()}` || "NA",
        yayaPick: ele?.yayaPick,
        photo:
          ele.photos && ele.photos.length > 0 && ele.photos[0].imageUrl
            ? `${BASE_URL}/${ele.photos[0].imageUrl}`
            : PlaceholderPNG,
      };
    });
    setData(_data);
    setLoading(false);
  };

  const callback = (filters: any) => {
    const _nationalities = filters.nationalities
      .filter((e: NationalityType) => e.checked)
      .map((e2: NationalityType) => e2.id);
    const _cities = filters.cities
      .filter((e: CityType) => e.checked)
      .map((e2: CityType) => e2.id);
    const _jobTypes = filters.jobTypes
      .filter((e: JobType) => e.checked)
      .map((e2: JobType) => e2.id);
    const _experiences = filters.experiences
      .filter((e: ExperienceType) => e.checked)
      .map((e2: ExperienceType) => e2.id);
    fetchFilteredNannies({
      nationalities: _nationalities,
      cities: _cities,
      jobTypes: _jobTypes,
      experiences: _experiences,
      minSalary: filters.minSalary,
      maxSalary: filters.maxSalary,
    });
  };

  const navigateToUser = (data: ItemProps) => {
    navigate(`/user/${data.id}`);
  };

  return (
    <>
      <Banner />

      <Grid container spacing={2} p={{ xs: 8, sm: 8, md: 4, lg: 4, xl: 4 }}>
        {/* TOP SECTION */}
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={1}
          xl={1}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          xl={3}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        />
        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
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
                  isLoading={isFilterLoading}
                  data={{ cities, nationalities, jobTypes, experiences }}
                  callback={callback}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={1}
          xl={1}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        />

        {/* CENTER SECTION */}
        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />

        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
        >
          <Filters
            isLoading={isFilterLoading}
            data={{ cities, nationalities, jobTypes, experiences }}
            callback={callback}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
          <Grid container spacing={2}>
            {!isLoading && data && data.length > 0 ? (
              data.map((item, _idx) => (
                <Grid
                  key={`${item.id}_${_idx}`}
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  lg={4}
                  xl={3}
                >
                  <Card data={item} handleNavigate={navigateToUser} />
                </Grid>
              ))
            ) : !isLoading && data && data.length === 0 ? (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography
                  variant="h6"
                  textAlign="center"
                  p={2}
                  color={theme.palette.grey[300]}
                >
                  No Results Found!
                </Typography>
              </Grid>
            ) : (
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Loader />
              </Grid>
            )}
          </Grid>

          <Grid
            container
            mt={12}
            display={{
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Pagination />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={1} xl={1} />
      </Grid>

      <Box
        display={{
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        }}
        mb={6}
      >
        <Pagination />
      </Box>

      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
