import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  useTheme,
  Box,
  Typography,
  Drawer,
  IconButton,
  Button,
} from "@mui/material";

import Icon from "@components/Icon";
import Logo from "@components/Logo";

import UAESVG from "@assets/uae.svg";
import SASVG from "@assets/sa.svg";

import { headerItems } from "@utils";

const VITE_WP_URL = import.meta.env.VITE_WP_URL;

const LeftDrawer: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [subMenu, setSubMenu] = React.useState(-1);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleMenu = (_idx: number) => {
    setSubMenu(_idx);
  };

  const handleSubMenu = (url: string) => {
    if (url === "/") {
      setOpen(false);
      navigate("/");
    } else if (url !== "#") {
      window.location.href = `${VITE_WP_URL}${url}`;
    }
  };

  const DrawerList = (
    <Box width="100vw" p={3} role="presentation">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Logo />
        <IconButton onClick={toggleDrawer(false)}>
          <Icon name="close" />
        </IconButton>
      </Box>

      <Box mt={2}>
        {subMenu !== -1 ? (
          <Box display="flex" flexDirection="column">
            <Typography
              variant="caption"
              fontSize={10}
              onClick={() => setSubMenu(-1)}
              py={2}
              color="#161C2D"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              BACK
            </Typography>

            {headerItems[subMenu].items.map((item, _idx) => (
              <Typography
                key={`${item.title}_${_idx}`}
                variant="body1"
                fontSize={16}
                py={2}
                color="#161C2D"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
                onClick={() => handleSubMenu(item.url)}
              >
                {item.title}
              </Typography>
            ))}
          </Box>
        ) : (
          <Box display="flex" flexDirection="column">
            {headerItems.map((item, _idx) => (
              <Box
                key={`${item.title}_${_idx}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={1.5}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    color: theme.palette.primary.main,
                    "& .icon-hover": {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
                onClick={() =>
                  item.items.length > 0 ? handleMenu(_idx) : handleSubMenu("/")
                }
              >
                <Typography variant="body1" color="#161C2D" fontSize={16}>
                  {item.title}
                </Typography>
                {item.items.length > 0 && (
                  <Icon className="icon-hover" name="right" color="#161C2D" />
                )}
              </Box>
            ))}

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py={1.5}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={UAESVG} alt="Flag" width={36} height={24} />
                <Typography variant="body1" color="#161C2D" fontSize={16} ml={1}>
                  UAE
                </Typography>
              </Box>
              <Icon name="right" color="#161C2D" />
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py={1.5}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <img src={SASVG} alt="Flag" width={36} height={24} />
                <Typography variant="body1" color="#161C2D" fontSize={16} ml={1}>
                  SA
                </Typography>
              </Box>
              <Icon name="right" />
            </Box>
          </Box>
        )}
      </Box>
      <Box position="absolute" bottom={40} width="calc(100vw - 50px)">
        <Button variant="contained" fullWidth color="primary" size="large">
          Download
        </Button>
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <Icon name="menu" />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default LeftDrawer;
