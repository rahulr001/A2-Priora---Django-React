import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";

import AdminNavBar from "../AdminNavBar/AdminNavBar.tsx";
import { Link } from "react-router-dom";
import "./AdminSideBar.css";
import Ripples from "react-ripples";
const drawerWidth = "8.5vw";

export default function ClippedDrawer() {
  return (
    <Box
      sx={{
        display: "flex",
        "& .css-ivnu1y-MuiPaper-root-MuiAppBar-root ": {
          boxShadow: "none",
        },
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <AdminNavBar />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            backgroundColor: "#d9d9d9",
            minWidth: "100px",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <div className="sidebar-container">
            <div className="sidebar-links">
              <ul>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 25,
                    overflow: "hidden",
                  }}
                >
                  <Ripples>
                    <Link to="/adminHome" className="links">
                      <li>Home</li>
                    </Link>
                  </Ripples>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 25,
                    overflow: "hidden",
                  }}
                >
                  <Ripples>
                    <Link to="/adminCourse" className="links">
                      <li>Courses</li>
                    </Link>
                  </Ripples>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 25,
                    overflow: "hidden",
                  }}
                >
                  <Ripples>
                    <Link to="/adminCertificate" className="links">
                      <li>Certificate</li>
                    </Link>
                  </Ripples>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 25,
                    overflow: "hidden",
                  }}
                >
                  <Ripples>
                    <Link to="/adminPayment" className="links">
                      <li>Payment</li>
                    </Link>
                  </Ripples>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    borderRadius: 25,
                    overflow: "hidden",
                  }}
                >
                  <Ripples>
                    <Link to="/adminParticipationDetails" className="links-p">
                      <li>Participation Details</li>
                    </Link>
                  </Ripples>
                </div>
              </ul>
            </div>
          </div>
        </Box>
      </Drawer>
    </Box>
  );
}
