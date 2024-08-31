import * as React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import Loader from "@components/Loader";
import CheckItem from "@components/CheckItem";

import {
  CityType,
  nationalities,
  NationalityType,
  jobTypes,
  JobType,
  experiences,
  ExperienceType,
} from "@utils";

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

export interface AllFilterProps {
  cities: CityType[];
}

const AllFilters: React.FC<AllFilterProps> = ({ cities }) => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const [listCities, setListCities] = React.useState<CityType[]>(cities);
  const [listNationalities, setNationalities] =
    React.useState<NationalityType[]>(nationalities);
  const [listJobTypes, setJobTypes] = React.useState<JobType[]>(jobTypes);
  const [listExperiences, setExperiences] =
    React.useState<ExperienceType[]>(experiences);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
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
        break;

      case "nationality":
        newNationalities[_idx].checked = _event.target.checked;
        setNationalities(newNationalities);
        break;

      case "jobType":
        newJobTypes[_idx].checked = _event.target.checked;
        setJobTypes(newJobTypes);
        break;

      case "experience":
        newExperiences[_idx].checked = _event.target.checked;
        setExperiences(newExperiences);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
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
              key={`${item}_${_idx}`}
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
        expanded={expanded === "panel2"}
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
              key={`${item}_${_idx}`}
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
        expanded={expanded === "panel3"}
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
              key={`${item}_${_idx}`}
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
        expanded={expanded === "panel4"}
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
              value=""
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
            <TextField
              name="max"
              placeholder="Max:"
              value=""
              margin="normal"
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
        expanded={expanded === "panel5"}
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
              key={`${item}_${_idx}`}
              name={`experience_${_idx}`}
              label={item.label}
              count={item.count}
              checked={item.checked}
              handleChange={handleCheck}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export interface FilterProps {
  isLoading: boolean;
  cities: CityType[];
}

const Filters: React.FC<FilterProps> = ({ isLoading, ...props }) => {
  if (isLoading) {
    return <Loader />;
  }
  return <AllFilters {...props} />;
};

export default Filters;
