import { FC } from "react";
import { Box } from "@mui/material";

import { ItemProps } from "@pages/User";

import Desktop from "@components/Snapshot/Desktop";
import Mobile from "@components/Snapshot/Mobile";

export interface SnapshotProps {
  loading: boolean;
  data: ItemProps | null;
}

const Snapshot: FC<SnapshotProps> = ({ loading, data }) => {
  return (
    <>
      <Box display={{ xs: "none", sm: "block" }}>
        <Desktop loading={loading} data={data} />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <Mobile loading={loading} data={data} />
      </Box>
    </>
  );
};

export default Snapshot;
