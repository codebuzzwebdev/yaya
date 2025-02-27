import { FC } from "react";
import { SvgIconProps } from "@mui/material/SvgIcon";
import SpeedIcon from "@mui/icons-material/Speed";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YoutubeIcon from '@mui/icons-material/YouTube';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const iconMap = {
  speed: SpeedIcon,
  rightArrow: ArrowForwardIcon,
  menu: MenuIcon,
  filter: TuneIcon,
  close: CloseIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  down: ExpandMoreIcon,
  right: ChevronRightIcon
};

export type IconName = keyof typeof iconMap;

export interface IconProps extends Omit<SvgIconProps, "color"> {
  name: IconName;
  size?: number;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, color, size = 24, ...props }) => {
  const IconComponent = iconMap[name];
  return IconComponent ? (
    <IconComponent sx={{ color, fontSize: `${size}px` }} {...props} />
  ) : null;
};

export default Icon;
