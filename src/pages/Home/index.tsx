import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, Box, Grid, Typography } from "@mui/material";

import Loader from "@components/Loader";
import Banner from "@components/Banner";
import Bottom from "@components/Bottom";
import Card, { ItemProps } from "@components/Card";
import Filters from "@components/Filters";
import Sorting from "@components/Sorting";
import LeftDrawer from "@components/LeftDrawer";
import Pagination from "@components/Pagination";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

import { getPhoto, getSalary } from "@utils";

import {
  CityType,
  NationalityType,
  JobType,
  ExperienceType,
  PaginationType,
  FiltersType,
} from "@utils";

const init = {
  page: 1,
  perPage: 30,
  totalPages: 0,
  totalRecords: 0,
};

const initFilters = {
  c: [],
  n: [],
  j: [],
  e: [],
  min: "0",
  max: "0",
};

const Home: FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [isLoading, setLoading] = useState(true);
  const [pagination, setPagination] = useState<PaginationType>(init);
  const [data, setData] = useState<ItemProps[]>([]);
  const [isFilterLoading, setFilterLoading] = useState(true);
  const [cities, setCities] = useState<CityType[]>([]);
  const [nationalities, setNationalities] = useState<NationalityType[]>([]);
  const [jobTypes, setJobTypes] = useState<JobType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [filters, setFilters] = useState<FiltersType>(initFilters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagination.page]);

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
    setLoading(true);
    const { c, n, j, e, min, max } = filters;
    const formData = new FormData();
    formData.append("page", JSON.stringify(pagination.page));
    formData.append("perPage", JSON.stringify(pagination.perPage));
    if (c?.length > 0) formData.append("cities", JSON.stringify(c));
    if (n?.length > 0) formData.append("nationalities", JSON.stringify(n));
    if (j?.length > 0) formData.append("jobTypes", JSON.stringify(j));
    if (e?.length > 0) formData.append("experiences", JSON.stringify(e));
    if (min !== "0" && min !== "") formData.append("minSalary", min);
    if (max !== "0" && max !== "") formData.append("maxSalary", max);
    const res: any = await request(apis.GET_FILTERED_NANNIES_API, {
      method: constants.POST,
      data: formData,
    });
    const result = res.data.data;
    const _data: ItemProps[] = result.helpers.map((ele: any) => {
      return {
        id: ele?.id,
        firstName: ele?.firstName,
        lastName: ele?.lastName,
        position: ele?.position?.title || "NA",
        jobType: ele?.jobType?.title || "NA",
        experience:
          `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
          "NA",
        salary: getSalary(ele),
        yayaPick: ele?.yayaPick,
        videoUrl: ele?.videoUrl,
        photo: getPhoto(ele?.photos),
        createdAt: ele?.createdAt,
        countryCode: ele?.nationality?.countryCode,
      };
    });
    setData(_data);
    setPagination({
      ...pagination,
      totalPages: result.totalPages,
      totalRecords: result.totalRecords,
    });
    setLoading(false);
  };

  useEffect(() => {
    fetchFilters();
  }, []);

  useEffect(() => {
    fetchNannies();
  }, [pagination.page, filters]);

  const callback = (callbackFilters: any) => {
    const _cities = callbackFilters.cities
      .filter((e: CityType) => e.checked)
      .map((e2: CityType) => e2.id);
    const _nationalities = callbackFilters.nationalities
      .filter((e: NationalityType) => e.checked)
      .map((e2: NationalityType) => e2.id);
    const _jobTypes = callbackFilters.jobTypes
      .filter((e: JobType) => e.checked)
      .map((e2: JobType) => e2.id);
    const _experiences = callbackFilters.experiences
      .filter((e: ExperienceType) => e.checked)
      .map((e2: ExperienceType) => e2.id);
    setFilters({
      c: _cities,
      n: _nationalities,
      j: _jobTypes,
      e: _experiences,
      min: callbackFilters.minSalary,
      max: callbackFilters.maxSalary,
    });
  };

  const sorting = (val: string) => {
    setLoading(true);
    if (val === "Old") {
      const oldData = data.sort((a, b) => a.createdAt - b.createdAt);
      setData(oldData);
    } else {
      const latestData = data.sort((a, b) => b.createdAt - a.createdAt);
      setData(latestData);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const onPagination = (page: number) => {
    setLoading(true);
    setPagination({ ...pagination, page });
  };

  const navigateToUser = (data: ItemProps) => {
    navigate(`/user/${data.id}`);
  };

  return (
    <>
      <Banner />

      <Grid spacing={4} container px="70px" py={8}>
        {/* Top Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
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
              Nannies in UAE ({pagination.totalRecords})
            </Typography>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mt={{ xs: 2, sm: 2, md: 0, lg: 0, xl: 0 }}
            >
              <Sorting callback={sorting} />

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

        {/* Center Section */}
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={4}
          xl={4}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          }}
          position="sticky"
          top="70px"
          height="fit-content"
        >
          <Filters
            isLoading={isFilterLoading}
            data={{ cities, nationalities, jobTypes, experiences }}
            callback={callback}
          />
        </Grid>

        {!isLoading && data && data.length > 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Box display="flex" justifyContent={{xs: "center", sm: "initial", md: "initial", lg: "initial", xl: "initial" }} flexWrap="wrap">
              {data.map((item, _idx) => (
                <Card
                  key={`${item.id}_${_idx}`}
                  data={item}
                  handleNavigate={navigateToUser}
                />
              ))}
            </Box>
          </Grid>
        ) : !isLoading && data && data.length === 0 ? (
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
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
          <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
            <Loader />
          </Grid>
        )}

        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}></Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Box mt={{ xs: 3, sm: 3, md: 3, lg: 6, xl: 6 }}>
            <Pagination count={pagination.totalPages} onChange={onPagination} />
          </Box>
        </Grid>
      </Grid>
      <Bottom />
    </>
  );
};

export default Home;
