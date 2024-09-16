import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Desktop from "@pages/User/Desktop";
import Mobile from "@pages/User/Mobile";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

import { formatDate, isNew, getPhoto, getSalary } from "@utils";

const APP_STORE_URL = import.meta.env.VITE_APP_STORE_URL;
const PLAY_STORE_URL = import.meta.env.VITE_PLAY_STORE_URL;

export interface SalaryType {
  price: string;
  duration: string;
  short: string;
}

export interface ItemProps {
  photo: string;
  firstName: string;
  lastName: string;
  position: string;
  yayaPick: number;
  videoUrl: string;
  about: string;
  registeredOn: string;
  age: number;
  nationality: string;
  salary: SalaryType;
  jobType: string;
  experience: string;
  visa: string;
  availableFrom: string;
  city: string;
  isNew: boolean;
}

const User: FC = () => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<ItemProps | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchNannie = async (id: string) => {
    const formData = new FormData();
    formData.append("id", id);
    const res: any = await request(apis.GET_NANNIE_BY_ID_API, {
      method: constants.POST,
      data: formData,
    });
    const ele: any = res.data.data;
    const _data = {
      photo: getPhoto(ele?.photos),
      firstName: ele?.firstName,
      lastName: ele?.lastName,
      position: ele?.position?.title || "NA",
      yayaPick: ele?.yayaPick,
      videoUrl: ele?.videoUrl,
      about: ele?.about || "NA",
      registeredOn: formatDate(ele?.createdAt),
      age: ele?.age,
      nationality: ele?.nationality?.nationality || "NA",
      salary: getSalary(ele),
      jobType: ele?.jobType?.title || "NA",
      experience:
        `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
        "NA",
      visa: ele?.visa || "NA",
      availableFrom: formatDate(ele?.startDate),
      city: ele?.city?.city,
      isNew: isNew(ele?.createdAt),
    };
    setData(_data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchNannie(id);
    }
  }, [id]);

  const handleApple = () => {
    window.open(APP_STORE_URL);
  };

  const handleGoogle = () => {
    window.open(PLAY_STORE_URL);
  };

  const handleCopy = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("URL copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <Desktop
          loading={isLoading}
          data={data}
          handleApple={handleApple}
          handleGoogle={handleGoogle}
          handleCopy={handleCopy}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <Mobile
          loading={isLoading}
          data={data}
          handleApple={handleApple}
          handleGoogle={handleGoogle}
          handleCopy={handleCopy}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
};

export default User;
