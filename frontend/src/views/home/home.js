import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid, Button, TextField, Typography, useTheme } from "@mui/material";
import swal from "sweetalert";
import clsx from "clsx";
import theme from "../../theme";
import BasicAlerts from "../Notification/notification";
import Header from "../../Header/header";
import GitHubIcon from "@mui/icons-material/GitHub";
import EastIcon from "@mui/icons-material/East";
import SideBar from "./sidebar";
import axios from "axios";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AllRoutes from "../../routes/routes";
const HomeComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  // const login = useSelector((state) => state.login);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 2,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 3,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
    {
      id: 4,
      title: "Title of the Content",
      description:
        "This document and possible translations of it may be copied and furnished to others, and derivative works that comment on orotherwise explain it or assist in its implementation may be prepared, copied, published, and distributed, in whole or in part,...read more",
    },
  ]);
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    console.log(posts);
    axios
      .get("http://localhost:8000/api/posts")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <>
      <div
        className={clsx({
          [classes.root]: true,
          [classes.shiftContent]: isDesktop,
        })}
      >
        {/* <Header onSidebarOpen={handleSidebarOpen} /> */}
        <SideBar
          onClose={handleSidebarClose}
          open={shouldOpenSidebar}
          variant={isDesktop ? "persistent" : "temporary"}
        />
        <main className={classes.content}>
          {/* {children} */}
          <AllRoutes />
        </main>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    "&&": {
      // paddingTop: 56,
      height: "100%",
      // [theme.breakpoints.up("sm")]: {
      //   paddingTop: 50,
      // },
      background:
        "radial-gradient(50% 50% at 50% 50%, #403A5F 0%, #211E2E 100%)",
      display: "flex",
      flexDirection: "row",
    },
  },
  shiftContent: {
    "&&": {
      paddingLeft: 175,
    },
  },
  content: {
    "&&": {
      height: "calc(100% - 58px)",
      overflowY: "auto",
      overflowX: "hidden",
    },
  },
}));

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <HomeComponent />
    </ThemeProvider>
  );
}
