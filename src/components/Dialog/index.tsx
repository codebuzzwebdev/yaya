import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Dialog as MuiDialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import { ItemProps } from "@pages/User";

import GooglePNG from "@assets/google.svg";
import ApplePNG from "@assets/apple.svg";

const BootstrapDialog = styled(MuiDialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiPaper-root": {
    borderRadius: 24
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogProps {
  open: boolean;
  data: ItemProps | null;
  handleClose: () => void;
  handleApple: () => void;
  handleGoogle: () => void;
}

const Dialog: React.FC<DialogProps> = ({
  open,
  data,
  handleClose,
  handleApple,
  handleGoogle,
}) => {
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ mt: 7 }}>
          <Typography
            gutterBottom
            textAlign="center"
            variant="body1"
            fontWeight="bold"
          >
            Connect with {data?.firstName} {data?.lastName}
          </Typography>

          <Box display="flex" justifyContent="center" my={4}>
            <img
              src={data?.photo}
              alt="Nannie"
              width={185}
              height={185}
              style={{
                objectFit: "cover",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
          </Box>

          <Typography gutterBottom textAlign="center">
            To contact {data?.firstName} {data?.lastName}, please download our
            app and create your family profile. Register today to unlock access
            to direct communication with our helpers and find the perfect match
            for your household!
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            my={4}
          >
            <img
              src={GooglePNG}
              alt="Google"
              width={180}
              height={50}
              className="store-images"
              onClick={handleGoogle}
            />

            <img
              src={ApplePNG}
              alt="Apple"
              width={180}
              height={50}
              className="store-images"
              onClick={handleApple}
            />
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Dialog;
