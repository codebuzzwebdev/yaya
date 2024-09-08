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

import UAESVG from "@assets/uae.svg";
import SASVG from "@assets/sa.svg";

const FlagMenu: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
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
    if (!open) {
      anchorRef.current?.focus();
    }
  }, [open]);

  return (
    <Box
      px={{ xs: 1, sm: 1, md: 1, lg: 1, xl: "15px" }}
      onMouseLeave={() => handleToggle(false)}
    >
      <Box
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-button" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onMouseEnter={() => handleToggle(true)}
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
        <Box display="flex" alignItems="center" px={1}>
          <img src={UAESVG} alt="Flag" width={36} height={24} />
          <Typography variant="body1" fontSize={16} ml={1}>
            UAE
          </Typography>
          <Box ml={0.5}>
            <Icon name="down" size={12} />
          </Box>
        </Box>
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
                  id="composition-button"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                  sx={{
                    "&.MuiList-root": {
                      background: theme.palette.common.white,
                      py: 2,
                    },
                  }}
                  onMouseEnter={() => handleToggle(true)}
                  onMouseLeave={() => handleToggle(true)}
                >
                  <MenuItem
                    onClick={handleClose}
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
                    <Box display="flex" alignItems="center" px={1}>
                      <img src={SASVG} alt="Flag" width={36} height={24} />
                      <Typography variant="body1" fontSize={16} ml={1}>
                        SA
                      </Typography>
                    </Box>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default FlagMenu;
