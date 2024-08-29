import { colors } from "@mui/material";

export const common = colors.common;

export const theme = {
  light_orange: "#FADFE8",
  orange: "#FF8570",
  pink: "#EEB0D3",
  blue: "#A89CE3",
  red: "#F2395B",
};

export const grey = {
  light: {
    50: colors.grey[50],
    100: colors.grey[100],
    200: colors.grey[200],
    300: colors.grey[300],
    400: colors.grey[400],
    500: colors.grey[500],
    600: colors.grey[600],
    700: colors.grey[700],
    800: colors.grey[800],
    900: colors.grey[900],
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
  main: colors.blue[200],
  dark: colors.blue[600],
};

export const warning = {
  light: colors.orange[50],
  main: colors.orange[200],
  dark: colors.orange[600],
};

export const success = {
  light: colors.green[50],
  main: colors.green[200],
  dark: colors.green[600],
};

export const error = {
  light: colors.red[50],
  main: colors.red[200],
  dark: colors.red[600],
};

export const primary = {
  light: {
    light: theme.light_orange,
    main: colors.grey[50],
    dark: theme.orange,
  },
  dark: {
    light: theme.light_orange,
    main: colors.common.black,
    dark: theme.orange,
  },
};

export const secondary = {
  light: {
    light: theme.light_orange,
    main: colors.common.white,
    dark: theme.orange,
  },
  dark: {
    light: theme.light_orange,
    main: colors.grey[900],
    dark: theme.orange,
  },
};
