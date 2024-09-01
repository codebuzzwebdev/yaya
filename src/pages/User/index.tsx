import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import Desktop from "@pages/User/Desktop";
import Mobile from "@pages/User/Mobile";

import PlaceholderPNG from "@assets/placeholder.png";

import * as constants from "@store/constants";
import * as apis from "@store/apis";
import request from "@store/request";

const BASE_URL = import.meta.env.VITE_IMAGE_URL;

export interface ItemProps {
  photo: string;
  firstName: string;
  lastName: string;
  position: string;
  yayaPick: number;
  nationality: string;
  minSalary: string;
  maxSalary: string;
  jobType: string;
  experience: string;
  jobLocation: string;
}

const User: FC = () => {
  const { id } = useParams();

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<ItemProps | null>(null);

  const fetchNannie = async (id: string) => {
    const formData = new FormData();
    formData.append("id", id);
    const res: any = await request(apis.GET_NANNIE_BY_ID_API, {
      method: constants.POST,
      data: formData,
    });
    const ele: any = res.data.data.helpers[0];
    const _data = {
      photo:
        ele.photos && ele.photos.length > 0 && ele.photos[0].imageUrl
          ? `${BASE_URL}/${ele.photos[0].imageUrl}`
          : PlaceholderPNG,
      firstName: ele?.firstName,
      lastName: ele?.lastName,
      position: ele?.position?.title || "NA",
      yayaPick: ele?.yayaPick,
      nationality: ele?.nationality?.nationality || "NA",
      minSalary: `${ele?.minSalary.toLocaleString()}` || "NA",
      maxSalary: `${ele?.maxSalary.toLocaleString()}` || "NA",
      jobType: ele?.jobType?.title || "NA",
      experience:
        `${ele?.yearOfExperience?.experienceOperator} ${ele?.yearOfExperience?.years} year(s)` ||
        "NA",
      jobLocation: ele?.city?.city,
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
