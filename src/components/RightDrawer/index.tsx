import React, { FC } from "react";
import {
  useTheme,
  Box,
  Typography,
  Drawer,
  List,
  IconButton,
} from "@mui/material";

import Icon from "@components/Icon";

type Position = "left" | "right" | "top" | "bottom";
const position: Position = "right";
export interface RightDrawerProps {
  routes: string[];
  handleNavigate: () => void;
}

const RightDrawer: FC<RightDrawerProps> = ({ routes, handleNavigate }) => {
  const theme = useTheme();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = () => {
    setState({ top: false, left: false, bottom: false, right: false });
    handleNavigate();
  };

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
    <Box bgcolor={theme.palette.secondary.light} height="100vh" width={300}>
      <Box position="absolute" left={4} top={4}>
        <IconButton onClick={toggleDrawer(anchor, false)}>
          <Icon name="close" />
        </IconButton>
      </Box>

      <Box display="flex" flexDirection="column" mt={6}>
        <List
          sx={{ background: theme.palette.secondary.light, height: "100vh" }}
        >
          {routes.map((item, _idx) => (
            <Typography
              key={`${item}_${_idx}`}
              variant="body1"
              mx={2}
              my={2}
              sx={{
                cursor: "pointer",
                "&:hover": { color: theme.palette.primary.main },
              }}
              color={theme.palette.grey[500]}
              onClick={handleClick}
            >
              {item}
            </Typography>
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {([position] as const).map((anchor, _idx) => (
        <Box key={`${anchor}_${_idx}`}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <Icon name="menu" />
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

export default RightDrawer;
