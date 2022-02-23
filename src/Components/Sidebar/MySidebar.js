import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// Others icons
import { SiKyocera } from "react-icons/si";
import { MdPersonAddAlt1 } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { IoCashOutline } from "react-icons/io5";
import { RiLuggageDepositLine } from "react-icons/ri";
import {
  BsBank2,
  BsFillBagCheckFill,
  BsFillDiagram2Fill,
  BsFillSignpostSplitFill,
} from "react-icons/bs";
// icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ReceiptIcon from "@material-ui/icons/Receipt";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import GetAppIcon from "@material-ui/icons/GetApp";
import EditIcon from "@material-ui/icons/Edit";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { VscRequestChanges } from "react-icons/vsc";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import HomeIcon from "@material-ui/icons/Home";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../../Image/logo.png";
import "./MySidebar.css";
import { Button } from "@material-ui/core";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Funds from "./Funds/Funds";
import AddAccount from "./Add-Account/AddAccount";
import PAMN from "./PAMN/PAMN";
import Reports from "./Reports/Reports";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // Top Bar 
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      position: "absolute",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#374250",
    color: "#A1A6AD",
    position: "relative",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MySidebar(props) {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);

  const toggleSwitch = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  const toggleSwitch2 = () => {
    toggle2 ? setToggle2(false) : setToggle2(true);
  };

  const toggleSwitch3 = () => {
    toggle3 ? setToggle3(false) : setToggle3(true);
  };

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sideMenuBar">
      <img src={logo} alt="" id="logo" />
      <div className={classes.toolbar} />
      <List style={{ backgroundColor: "#2D3947", padding: "20px 0 20px 10px" }}>
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Name: {"Your Name"}
        </Typography>
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Client Id: {"0000001"}
        </Typography>
        <br />
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Account No: {"0001"}
        </Typography>
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Balance: {"00"}
        </Typography>
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Equity: {"0"}
        </Typography>
        <Typography style={{ margin: "-10px 0 10px 15px", cursor: "auto" }}>
          Free Margin: {"0.0"}
        </Typography>
      </List>
      {/* Items 2 */}
      <List>
        <ListItem button>
          <Link className="sideNavLink" to="dashboard/">
            <HomeIcon /> <span className="nested"> Home </span>
          </Link>
        </ListItem>

        {/* with funds and sub menu */}
        <ListItem button onClick={toggleSwitch}>
          <div className="sideNavLink">
            <MonetizationOnIcon />
            <span className="nested">
              Funds <KeyboardArrowDownIcon />
            </span>
          </div>
        </ListItem>

        {/* Sub menu */}
        <div className={toggle ? "sideToggle" : "sideToggleNone"}>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/deposit">
              <RiLuggageDepositLine /> <span className="nested"> Deposit </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/withdrawal">
              <IoCashOutline /> <span className="nested"> Withdrawal </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/transferfunds">
              <BiTransfer /> <span className="nested"> Transfer Funds </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/mybanks">
              <BsBank2 /> <span className="nested"> My Banks </span>
            </Link>
          </ListItem>
        </div>

        {/* lIST 2 */}
        <ListItem button onClick={toggleSwitch2}>
          <div className="sideNavLink">
            <ControlPointIcon />
            <span className="nested">
              Add Account <KeyboardArrowDownIcon />
            </span>
          </div>
        </ListItem>

        {/* Sub menu 2 */}
        <div className={toggle2 ? "sideToggle2" : "sideToggleNone2"}>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/newliveaccount">
              <MdPersonAddAlt1 />{" "}
              <span className="nested"> New Live Account </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="newpammaccount/">
              <BsFillBagCheckFill />{" "}
              <span className="nested"> New PAMM Account </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/newdemoaccount">
              <BsFillDiagram2Fill />{" "}
              <span className="nested"> New Demo Account </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/accountcomparison">
              <BsFillSignpostSplitFill />{" "}
              <span className="nested"> Account Comparison </span>
            </Link>
          </ListItem>
        </div>

        {/* List 3 */}
        <ListItem button onClick={toggleSwitch3}>
          <div className="sideNavLink">
            <SiKyocera />
            <span className="nested">
              PAMN <KeyboardArrowDownIcon />
            </span>
          </div>
        </ListItem>

        {/* Sub menu 3 */}
        <div className={toggle3 ? "sideToggle3" : "sideToggleNone3"}>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/pammaccounts">
              <MdPersonAddAlt1 />{" "}
              <span className="nested"> PAMM Accounts </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/manager">
              <BsFillBagCheckFill />{" "}
              <span className="nested"> Manager </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/agent">
              <BsFillDiagram2Fill />{" "}
              <span className="nested"> Agent </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/howitworks">
              <BsFillSignpostSplitFill />{" "}
              <span className="nested"> How it Works </span>
            </Link>
          </ListItem>
        </div>

        <ListItem button>
          <Link className="sideNavLink" to="dashboard/reports">
            <EqualizerIcon /> <span className="nested">Reports </span>
          </Link>
        </ListItem>
        <ListItem button>
          <Link className="sideNavLink" to="dashboard/reports">
            <VscRequestChanges />{" "}
            <span className="nested">Request Free VPS</span>
          </Link>
        </ListItem>
      </List>
      {/* Items 3 */}
      <List
        style={{ backgroundColor: "#2D3947", margin: "0px", padding: "20px 0" }}
      >
        <List>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/editProfile">
              <EditIcon /> <span className="nested">Edit Profile</span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/downloads">
              <GetAppIcon /> <span className="nested"> Downloads</span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/tradingTools">
              <TrendingUpIcon /> <span className="nested"> Trading Tools </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/offersPromotions">
              <CardGiftcardIcon />
              <span className="nested"> Offers & Promotions</span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/news">
              <ReceiptIcon />
              <span className="nested"> News </span>
            </Link>
          </ListItem>
          <ListItem button>
            <Link className="sideNavLink" to="dashboard/logOut">
              <ExitToAppIcon />
              <span className="nested">Log Out </span>
            </Link>
          </ListItem>
        </List>
      </List>
      <hr />
      <div className="btnContainer">
        <Button variant="contained" color="primary">
          Blog
        </Button>
        <Button variant="contained" color="secondary">
          <NotificationsIcon /> Need Help
        </Button>
      </div>
    </div>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} color="secondary">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard/funds" element={<Funds />} />
            <Route path="dashboard/addAccount" element={<AddAccount />} />
            <Route path="dashboard/PAMN" element={<PAMN />} />
            <Route path="dashboard/reports" element={<Reports />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

MySidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MySidebar;
