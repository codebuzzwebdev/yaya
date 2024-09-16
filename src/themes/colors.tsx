import { colors } from "@mui/material";

export const theme = {
  primary: "#FCFDFF",
  secondary: "#FBFBFC",
  territory: "#FEF5F8",
  main: "#FF8570",
  orange: "#F87997",
  pink: "#EEB0D3",
  light_blue: "#E7F0FA",
  blue: "#A89CE3",
  red: "#F2395B",
  green: "#74B0B6",
};

export const primary = {
  light: {
    light: theme.primary,
    main: theme.main,
    dark: theme.main,
  },
  dark: {
    light: theme.primary,
    main: theme.main,
    dark: theme.main,
  },
};

export const secondary = {
  light: {
    light: theme.secondary,
    main: theme.territory,
    dark: theme.main,
  },
  dark: {
    light: theme.secondary,
    main: theme.territory,
    dark: theme.main,
  },
};

export const common = colors.common;

export const grey = {
  light: {
    50: colors.grey[50],
    100: colors.grey[100],
    200: colors.grey[200],
    300: "#AAA6B9",
    400: "#F5F4F6",
    500: "#667085",
    600: "#161622",
    700: "#1D1E3C",
    800: "#151B28",
    900: "#1D2026",
  },
  dark: {
    50: colors.grey[900],
    100: colors.grey[800],
    200: colors.grey[700],
    300: colors.grey[600],
    400: colors.grey[500],
    500: colors.grey[400],
    600: colors.grey[300],
    700: colors.grey[200],
    800: colors.grey[100],
    900: colors.grey[50],
  },
};

export const info = {
  light: colors.blue[50],
  main: colors.blue[600],
  dark: colors.blue[800],
};

export const warning = {
  light: colors.orange[50],
  main: colors.orange[600],
  dark: colors.orange[800],
};

export const success = {
  light: colors.green[50],
  main: colors.green[600],
  dark: colors.green[800],
};

export const error = {
  light: colors.red[50],
  main: colors.red[600],
  dark: colors.red[800],
};

export const others = {
  twitter: colors.blue[600],
  instagram: colors.red[600],
  facebook: colors.blue[600],
  email: colors.blue[600],
  linkedin: colors.blue[600],
  github: colors.common.black,
  x: colors.common.black,
};
