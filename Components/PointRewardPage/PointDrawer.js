import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import rewardimage from "../../Media/images/rewardFrame.png";
import Image from "next/image";
import styles from "./PointRewardPage.module.css";
const drawerBleeding = 56;

const Root = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // width: "300px",

  height: "100%",

  backgroundColor:
    theme.palette.mode === "light"
      ? grey[100]
      : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

const PointDrawer = (props) => {
  const { window, open, toggleDrawer, setOpen } = props;

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline
        sx={{
          "& .MuiBox-root   ": {
            borderRadius: "20px 20px 0 0",
            // border: "10px solid #378B95",
          },
          "&  .css-151dxxb  ": {
            borderRadius: "20px 20px 0 0",
            // border: "10px solid #378B95",
          },
        }}
      />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />

      <SwipeableDrawer
        className={styles.drawer}
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}

        // sx={{ border: "20px solid #2e3e5c;", borderRadius: "20px 20px 0 0" }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderRadius: 32,

            visibility: "visible",
            right: 0,
            left: 0,
          }}
        ></StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,

            height: "100%",
            overflow: "auto",
          }}
        >
          <div className="flex flex-col items-center justify-center text-center gap-y-3 ">
            <div className={`${styles.drawercurve}  `}></div>
            <p className="text-2xl mt-5 font-medium ">???????????????????????? ?????????????????? ?????????</p>
            <div className=" w-40">
              <Image src={rewardimage} alt="rewardimage" />
            </div>

            <p className="text-sm font-medium">
              ????????????????????? ?????????????????? ???????????? ???????????? ??????????????? ?????????????????? ???????????? ?????????????????? ?????????????????? ????????? ????????????
              ?????????????????? ??????????????? ????????????
            </p>
          </div>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
};

export default PointDrawer;
