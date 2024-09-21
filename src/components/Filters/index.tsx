import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { useTheme, Box, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import useDebounce from "@hooks/useDebounce";

import Loader from "@components/Loader";
import CheckItem from "@components/CheckItem";

import { CityType, NationalityType, JobType, ExperienceType } from "@utils";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: 16,
  border: `1px solid ${theme.palette.divider}`,
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  height: 300,
  overflowX: "hidden",
  overflowY: "scroll",
}));

export interface FilterProps {
  cities: CityType[];
  nationalities: NationalityType[];
  jobTypes: JobType[];
  experiences: ExperienceType[];
}

export interface AllFilterProps {
  data: FilterProps;
  callback: (e: any) => void;
}

export interface FilterLoadingProps {
  isLoading: boolean;
  data: FilterProps;
  callback: (e: any) => void;
}

export interface ExpandedType {
  city: string;
  nationality: string;
  jobType: string;
  salary: string;
  experience: string;
}

const initExpanded = {
  city: "false",
  nationality: "false",
  jobType: "false",
  salary: "false",
  experience: "false",
};

const AllFilter: React.FC<AllFilterProps> = ({ data, callback }) => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const nationality = searchParams.get("nationality");
  const jobType = searchParams.get("jobType");
  const city = searchParams.get("city");

  const [expanded, setExpanded] = React.useState<ExpandedType>(initExpanded);

  const [listCities, setListCities] = React.useState<CityType[]>(data.cities);
  const [listNationalities, setNationalities] = React.useState<
    NationalityType[]
  >(data.nationalities);
  const [listJobTypes, setJobTypes] = React.useState<JobType[]>(data.jobTypes);
  const [isChanged, setIsChanged] = React.useState<boolean>(false);
  const [minSalary, setMinSalary] = React.useState<string>("");
  const [maxSalary, setMaxSalary] = React.useState<string>("");
  const [listExperiences, setExperiences] = React.useState<ExperienceType[]>(
    data.experiences
  );

  React.useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }, [
    listCities,
    listNationalities,
    listJobTypes,
    listExperiences,
    minSalary,
    maxSalary,
  ]);

  React.useEffect(() => {
    if (typeof nationality === "string") {
      const newNationalities = Array.from(listNationalities);
      const updatedNationalities = newNationalities.map((e) => {
        return {
          ...e,
          checked: e.id === Number(nationality) ? true : false,
        };
      });
      setListCities(data.cities);
      setNationalities(updatedNationalities);
      setJobTypes(data.jobTypes);
      setExperiences(data.experiences);
      setExpanded({
        ...initExpanded,
        nationality: "panel2",
      });
    }

    if (typeof jobType === "string") {
      const newJobTypes = Array.from(listJobTypes);
      const updatedJobTypes = newJobTypes.map((e) => {
        return {
          ...e,
          checked: e.id === Number(jobType) ? true : false,
        };
      });
      setListCities(data.cities);
      setNationalities(data.nationalities);
      setJobTypes(updatedJobTypes);
      setExperiences(data.experiences);
      setExpanded({
        ...initExpanded,
        jobType: "panel3",
      });
    }

    if (typeof city === "string") {
      const newCities = Array.from(listCities);
      const updatedCities = newCities.map((e) => {
        return {
          ...e,
          checked: e.id === Number(city) ? true : false,
        };
      });
      setListCities(updatedCities);
      setNationalities(data.nationalities);
      setJobTypes(data.jobTypes);
      setExperiences(data.experiences);
      setExpanded({
        ...initExpanded,
        city: "panel1",
      });
    }
  }, [nationality, jobType, city]);

  useDebounce(() => {
    if (isChanged) {
      callback({
        cities: listCities,
        nationalities: listNationalities,
        jobTypes: listJobTypes,
        experiences: listExperiences,
        minSalary,
        maxSalary,
      });
    }
  }, [isChanged, minSalary, maxSalary]);

  React.useEffect(() => {
    callback({
      cities: listCities,
      nationalities: listNationalities,
      jobTypes: listJobTypes,
      experiences: listExperiences,
      minSalary,
      maxSalary,
    });
  }, [listCities, listNationalities, listJobTypes, listExperiences]);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent) => {
    switch (panel) {
      case "panel1":
        setExpanded({
          ...expanded,
          city: expanded.city === "panel1" ? "false" : panel,
        });
        break;

      case "panel2":
        setExpanded({
          ...expanded,
          nationality: expanded.nationality === "panel2" ? "false" : panel,
        });
        break;

      case "panel3":
        setExpanded({
          ...expanded,
          jobType: expanded.jobType === "panel3" ? "false" : panel,
        });
        break;

      case "panel4":
        setExpanded({
          ...expanded,
          salary: expanded.salary === "panel4" ? "false" : panel,
        });
        break;

      case "panel5":
        setExpanded({
          ...expanded,
          experience: expanded.experience === "panel5" ? "false" : panel,
        });
        break;

      default:
        break;
    }
  };

  const handleCheck = (_event: React.ChangeEvent<HTMLInputElement>) => {
    const newListCities = Array.from(listCities);
    const newNationalities = Array.from(listNationalities);
    const newJobTypes = Array.from(listJobTypes);
    const newExperiences = Array.from(listExperiences);

    const name = _event.target.name.split("_")[0];
    const _idx = Number(_event.target.name.split("_")[1]);

    switch (name) {
      case "city":
        newListCities[_idx].checked = _event.target.checked;
        setListCities(newListCities);
        setSearchParams({});
        break;

      case "nationality":
        newNationalities[_idx].checked = _event.target.checked;
        setNationalities(newNationalities);
        setSearchParams({});
        break;

      case "jobType":
        newJobTypes[_idx].checked = _event.target.checked;
        setJobTypes(newJobTypes);
        setSearchParams({});
        break;

      case "experience":
        newExperiences[_idx].checked = _event.target.checked;
        setExperiences(newExperiences);
        setSearchParams({});
        break;

      default:
        break;
    }
  };

  const handleMinChange = (e: any) => {
    setSearchParams({});
    setMinSalary(e.target.value);
    setIsChanged(true);
  };

  const handleMaxChange = (e: any) => {
    setSearchParams({});
    setMaxSalary(e.target.value);
    setIsChanged(true);
  };

  const handleClearAll = () => {
    const _c = data.cities.map((e) => {
      return { ...e, checked: false };
    });
    const _n = data.nationalities.map((e) => {
      return { ...e, checked: false };
    });
    const _j = data.jobTypes.map((e) => {
      return { ...e, checked: false };
    });
    const _e = data.experiences.map((e) => {
      return { ...e, checked: false };
    });
    setListCities(_c);
    setNationalities(_n);
    setJobTypes(_j);
    setExperiences(_e);
    setMinSalary("");
    setMaxSalary("");
    setIsChanged(true);
    setExpanded(initExpanded);
    setSearchParams({});
  };

  const checkClearAllVisibility = () => {
    const _c = listCities.find((e) => e.checked);
    const _n = listNationalities.find((e) => e.checked);
    const _j = listJobTypes.find((e) => e.checked);
    const _e = listExperiences.find((e) => e.checked);
    const salary = minSalary.length > 0 || minSalary.length > 0;
    if (_c || _n || _j || _e || salary) return true;
    return false;
  };

  const isVisible = checkClearAllVisibility();

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" pb={3}>
        <Typography variant="body1" fontWeight="bold">
          Filters
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          color={theme.palette.primary.main}
          sx={{
            display: isVisible ? "block" : "none",
            cursor: "pointer",
          }}
          onClick={handleClearAll}
        >
          Clear All
        </Typography>
      </Box>
      <Accordion
        expanded={expanded?.city === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="body1" fontWeight="bold">
            City
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {listCities.map((item, _idx) => (
            <CheckItem
              key={`${item.label}_${_idx}`}
              name={`city_${_idx}`}
              label={item.label}
              count={item.count}
              checked={item.checked}
              handleChange={handleCheck}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded?.nationality === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="body1" fontWeight="bold">
            Nationality
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {listNationalities.map((item, _idx) => (
            <CheckItem
              key={`${item.label}_${_idx}`}
              name={`nationality_${_idx}`}
              label={item.label}
              count={item.count}
              checked={item.checked}
              handleChange={handleCheck}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded?.jobType === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="body1" fontWeight="bold">
            Job Type
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {listJobTypes.map((item, _idx) => (
            <CheckItem
              key={`${item.label}_${_idx}`}
              name={`jobType_${_idx}`}
              label={item.label}
              count={item.count}
              checked={item.checked}
              handleChange={handleCheck}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded?.salary === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography variant="body1" fontWeight="bold">
            Salary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box display="flex" flexDirection="column">
            <TextField
              name="min"
              placeholder="Min:"
              value={minSalary}
              margin="normal"
              onChange={handleMinChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <TextField
              name="max"
              placeholder="Max:"
              value={maxSalary}
              margin="normal"
              onChange={handleMaxChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded?.experience === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography variant="body1" fontWeight="bold">
            Experience
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {listExperiences.map((item, _idx) => (
            <CheckItem
              key={`${item.label}_${_idx}`}
              name={`experience_${_idx}`}
              label={item.label}
              count={item.count}
              checked={item.checked}
              handleChange={handleCheck}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

const Filters: React.FC<FilterLoadingProps> = ({
  isLoading,
  data,
  callback,
}) => {
  if (isLoading) {
    return <Loader />;
  }
  return <AllFilter data={data} callback={callback} />;
};

export default Filters;
