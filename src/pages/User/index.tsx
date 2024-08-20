import { FC } from "react";
import { Box } from "@mui/material";

import Desktop from "@pages/User/Desktop";
import Mobile from "@pages/User/Mobile";

const User: FC = () => {
  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <Desktop />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <Mobile />
      </Box>
    </>
  );
};

export default User;
