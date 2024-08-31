import React, { FC } from "react";
import { useTheme, Box, Drawer, List, IconButton } from "@mui/material";

import Icon from "@components/Icon";
import Filters, { FilterLoadingProps } from "@components/Filters";

type Position = "left" | "right" | "top" | "bottom";
const position: Position = "left";

const LeftDrawer: FC<FilterLoadingProps> = (props) => {
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Position, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Position) => (
    <Box bgcolor={theme.palette.secondary.light} height="100vh" width="100%">
      <Box position="absolute" right={4} top={4}>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <Icon name="close" />
        </IconButton>
      </Box>

      <Box display="flex" flexDirection="column" mt={6}>
        <List
          sx={{
            background: theme.palette.secondary.light,
            height: "100vh",
            px: 2,
            pt: 4,
          }}
        >
          <Filters {...props} />
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {([position] as const).map((anchor, _idx) => (
        <Box key={`${anchor}_${_idx}`}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Icon name="filter" />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            sx={{
              zIndex: 1201,
            }}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Box>
      ))}
    </>
  );
};

export default LeftDrawer;
