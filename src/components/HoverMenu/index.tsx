import * as React from "react";
import {
  useTheme,
  Box,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

import Icon from "@components/Icon";

import { HeaderItem } from "@utils";

const VITE_WP_URL = import.meta.env.VITE_WP_URL;

const currentOpenMenu = {
  menu: null as string | null,
  close: () => {},
};

export interface HoverMenuProps {
  menu: string;
  items: HeaderItem[];
}

const HoverMenu: React.FC<HoverMenuProps> = ({ menu, items }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    if (currentOpenMenu.menu && currentOpenMenu.menu !== menu) {
      currentOpenMenu.close();
    }
    if (items.length === 0) return;
    setOpen(true);
    currentOpenMenu.menu = menu;
    currentOpenMenu.close = () => setOpen(false);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
    currentOpenMenu.menu = null;
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      handleClose(event);
    } else if (event.key === "Escape") {
      handleClose(event);
    }
  }

  React.useEffect(() => {
    if (!open && currentOpenMenu.menu === menu) {
      anchorRef.current!.focus();
    }
  }, [open, menu]);

  const handleMenu = (url: string) => {
    if (url !== "#") {
      window.open(`${VITE_WP_URL}${url}`);
    }
  };

  return (
    <Box px={{ xs: 1, sm: 1, md: 1, lg: 1, xl: "15px" }}>
      <Box
        ref={anchorRef}
        id={`${menu}_composition-button`}
        aria-controls={open ? `${menu}_composition-button` : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={handleToggle}
        onMouseLeave={handleClose}
        color={theme.palette.common.black}
        display="flex"
        alignItems="center"
        sx={{
          cursor: "pointer",
          fontSize: 16,
          textTransform: "none",
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }}
      >
        <Typography variant="body1">{menu}</Typography>
        {items.length > 0 && (
          <Box ml={0.5}>
            <Icon name="down" size={12} />
          </Box>
        )}
      </Box>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        sx={{
          width: 250,
          pt: 2,
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                "&.MuiPaper-root": {
                  borderRadius: 0,
                  boxShadow:
                    "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
                  background: theme.palette.common.white,
                },
              }}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={false}
                  id={`${menu}_composition-button`}
                  aria-labelledby={`${menu}_composition-button`}
                  onKeyDown={handleListKeyDown}
                  sx={{
                    "&.MuiList-root": {
                      background: theme.palette.common.white,
                      py: 2,
                    },
                  }}
                >
                  {items.map((item: HeaderItem, _idx: number) => (
                    <MenuItem
                      key={`${item.title}_${_idx}`}
                      onClick={(event) => {
                        handleMenu(item.url);
                        handleClose(event);
                      }}
                      sx={{
                        py: 1,
                        color: theme.palette.grey[500],
                        cursor: "pointer",
                        background: theme.palette.common.white,
                        "&:hover": {
                          background: theme.palette.common.white,
                          color: theme.palette.primary.main,
                        },
                        "&.Mui-selected": {
                          background: theme.palette.common.white,
                          color: theme.palette.common.white,
                        },
                      }}
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default HoverMenu;
