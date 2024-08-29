import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  Theme as MuiTheme,
  CssBaseline,
} from "@mui/material";
import {
  common,
  grey,
  info,
  warning,
  success,
  error,
  primary,
  secondary,
} from "@themes/colors";

type ThemeContextType = {
  toggleTheme: () => void;
  darkMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

const Theme: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: darkMode ? primary.dark : primary.light,
      secondary: darkMode ? secondary.dark : secondary.light,
      common,
      grey: darkMode ? grey.dark : grey.light,
      info,
      warning,
      success,
      error,
    },
  });

  const themeWithOverrides: MuiTheme = createTheme(theme, {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Roboto, Arial, sans-serif",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            backgroundColor: darkMode ? secondary.dark : secondary.light,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px;",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: 64,
            padding: "8px 8px 8px 2px",
            [theme.breakpoints.up("lg")]: {
              padding: "8px 32px 8px 24px",
            },
            "&.MuiPaper-root": {
              borderRadius: 0,
              boxShadow: "none",
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            background: darkMode ? primary.dark.main : primary.light.main,
            padding: 0,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            paddingLeft: "12px !important",
            paddingRight: "12px !important",
            paddingTop: "8px !important",
            paddingBottom: "8px !important",
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            marginRight: "8px !important",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            margin: "8px 16px",
            borderRadius: 8,
            width: 268,
          },
        },
      },
      MuiBackdrop: {
        styleOverrides: {
          root: {
            background: "transparent",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            "&.MuiButton-containedPrimary": {
              background: darkMode ? primary.dark.dark : primary.light.dark,
              color: common.white,
              boxShadow: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: `${error.dark} !important`,
                boxShadow: "none",
                color: common.white,
              },
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            background: darkMode ? primary.dark.main : primary.light.main,
            boxShadow: "none",
          },
          indicator: {
            background: "transparent",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            height: "36px",
            minHeight: "36px",
            margin: "8px",
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: "bold",
            boxShadow: "",
            "&.Mui-selected": {
              background: darkMode ? primary.dark.light : primary.light.light,
              color: darkMode ? common.white : common.black,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderRadius: "12px",
            borderColor: grey.light[400],
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            marginLeft: 4,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            "&.Mui-focused": {
              color: grey.light[400],
            },
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            overflow: "hidden",
            borderRadius: 0,
            boxShadow: "none",
            background: darkMode ? primary.dark.main : primary.light.main,
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              background: theme.palette.grey[500],
            },
            "&.Mui-selected:hover": {
              background: theme.palette.grey[400],
            },
            "&:hover": {
              background: theme.palette.grey[300],
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: common.black,
            borderRadius: 2,
            "&.Mui-checked": {
              color: primary.light.dark,
            },
            "& .MuiSvgIcon-root": {
              width: 20,
              height: 20,
            },
          },
        },
      },
    },
  });

  const contextValue = useMemo(
    () => ({
      toggleTheme,
      darkMode,
    }),
    [toggleTheme, darkMode]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={themeWithOverrides}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
