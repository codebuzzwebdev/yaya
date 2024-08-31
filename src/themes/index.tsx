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
  primary,
  secondary,
  common,
  grey,
  info,
  warning,
  success,
  error,
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
            fontFamily: "Inter, Arial, sans-serif",
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
              background: theme.palette.primary.main,
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            background: darkMode ? primary.dark.light : primary.light.light,
            padding: 0,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            // borderRadius: 8,
            paddingLeft: "12px !important",
            paddingRight: "12px !important",
            paddingTop: "10px !important",
            paddingBottom: "10px !important",
            "&:hover": {
              background: darkMode ? grey.dark[50] : grey.light[200],
            },
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
            // borderRadius: 8,
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
              background: darkMode ? primary.dark.main : primary.light.main,
              color: common.white,
              boxShadow: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: `${primary.light.dark} !important`,
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
            background: darkMode ? grey.dark[50] : grey.light[100],
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
            transition: "all 0.3s ease",
            "&.Mui-selected": {
              boxShadow:
                "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
              background: darkMode ? common.black : common.white,
              color: darkMode ? common.white : common.black,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            // borderRadius: "12px",
            borderColor: grey.light[200],
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
              background: primary.light.main,
              color: common.white
            },
            "&.Mui-selected:hover": {
              background: primary.light.main,
            },
            "&:hover": {
              background: grey.light[200]
            },
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: darkMode ? common.white : common.black,
            // borderRadius: 2,
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
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: darkMode
              ? `1px dashed ${grey.dark[100]}`
              : `1px dashed ${grey.light[200]}`,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: darkMode ? grey.dark[100] : grey.light[200],
              },
              "&:hover fieldset": {
                borderColor: darkMode ? common.white : common.black,
              },
              "&.Mui-focused fieldset": {
                borderColor: darkMode ? common.white : common.black,
              },
              "&.Mui-error fieldset": {
                borderColor: error.main,
              },
            },
            "& .MuiOutlinedInput-input": {
              borderColor: darkMode ? common.white : common.black,
              "&:-webkit-autofill": {
                // borderRadius: 12,
              },
            },
            "& .MuiInputLabel-root": {
              color: grey.light[600],
              "&.Mui-focused": {
                color: darkMode ? common.white : common.black,
              },
              "&.Mui-error": {
                color: error.main,
              },
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
