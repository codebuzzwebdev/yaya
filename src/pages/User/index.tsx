import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Desktop from "@pages/User/Desktop";
import Mobile from "@pages/User/Mobile";

import PlaceholderPNG from "@assets/placeholder.png";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

import { formatDate, isNew } from "@utils";

const BASE_URL = import.meta.env.VITE_IMAGE_URL;

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
  minSalary: string;
  maxSalary: string;
  hourlyRate: string;
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
      photo:
        ele.photos && ele.photos.length > 0 && ele.photos[0].imageUrl
          ? `${BASE_URL}/${ele.photos[0].imageUrl}`
          : PlaceholderPNG,
      firstName: ele?.firstName,
      lastName: ele?.lastName,
      position: ele?.position?.title || "NA",
      yayaPick: ele?.yayaPick,
      videoUrl: ele?.videoUrl,
      about: ele?.about || "NA",
      registeredOn: formatDate(ele?.createdAt),
      age: ele?.age,
      nationality: ele?.nationality?.nationality || "NA",
      minSalary: `${ele?.minSalary.toLocaleString()}` || "NA",
      maxSalary: `${ele?.maxSalary.toLocaleString()}` || "NA",
      hourlyRate: ele?.hourlyRate,
      jobType: ele?.jobType?.title || "NA",
      experience:
        `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
        "NA",
      visa: ele?.visa || "NA",
      availableFrom: formatDate(ele?.startDate),
      city: ele?.city?.city,
      isNew: isNew(ele?.createdAt)
    };
    setData(_data);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      fetchNannie(id);
    }
  }, [id]);

  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <Desktop loading={isLoading} data={data} />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <Mobile loading={isLoading} data={data} />
      </Box>
    </>
  );
};

export default User;
