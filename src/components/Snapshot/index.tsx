import { FC } from "react";
import { Box } from "@mui/material";

import Desktop from "@components/Snapshot/Desktop";
import Mobile from "@components/Snapshot/Mobile";

const Snapshot: FC = () => {
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

export default Snapshot;
