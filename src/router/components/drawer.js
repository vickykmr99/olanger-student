import React from "react";
import clsx from 'clsx';
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import logo from '../../images/common/logo.png'
import MenuItem from '@mui/material/MenuItem';

// import View_user_profile_cont from "../../containers/user/user_view_profile_cont";
// import NotificationsCont from "../../containers/notifications/notificationCont";

import { Link} from "react-router-dom";
import LG_Cont from "../containers/Lg_Cont";
import {
  all_admin_option,
  // all_super_admin_option,
  all_corporate_options,
  // all_manager_options,

} from "../constant";
import { NavLink } from "react-router-dom";
import "../styles/drawer.css";

const drawerWidth = 220;
// const theme = createTheme();
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // backgroundColor: "#FF7000"
    background:"#fadde1"
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),

    backgroundColor:"#11101d",

  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:"#11101d",
    

    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    // backgroundColor: '#FF7000',
    backgroundColor:"#11101d",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  iconStyle: {
    position: "relative",
    left: 8,
    top: 3,
    fontSize: 18,
    marginRight: 5,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  grow: {
    flexGrow: 1,
  },
  Icon: {
    color:"white",
    position:"relative",
    left:"10px"
  },

  ListItem:{
    // border:"1px solid red",
    
    "&:hover" : {
      borderRadius:"3px",
      backgroundColor:"#ed5066"
    }
  }

  
 
}));

function MiniDrawer(props) {
  // const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function sideBar(type, open) {
    var side_top =
      <div>
        {/* {open ?
          <div style={{ backgroundColor:"#11101d", marginTop:-30 }}>
            <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img" >
              {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
            </Avatar>
            <Typography variant="subtitle1" className="profile-name" color="secondary">
              Hi! {localStorage.getItem("qubi7_name")}
            </Typography>
          </div>
          :
          <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" style={{position:"relative",left:"15px"}} >
            {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
          </Avatar>
        } */}
      </div>;
      // backgroundColor:'#FF7000'

    // if (type === "M") {
    //   return (
    //     <div style={{ marginTop: 10 }}>
    //       {side_top}
    //       {all_manager_options.map((option) => (
    //         <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "black" }}>
    //           <ListItem button key={option.name}>
    //             <ListItemIcon><Icon>{option.icon}</Icon></ListItemIcon>
    //             <ListItemText primary={option.name} />
    //           </ListItem>
    //         </Link>
    //       ))}
    //     </div>
    //   );
    if (type === "A") {
      return (
        <div style={{ marginTop: 10  }}>
          {side_top}
          {all_admin_option.map((option) => (
            <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
              <ListItem button key={option.name} className="drawer_text" >
              
                <ListItemIcon ><Icon  className="drawer_icon">{option.icon}</Icon></ListItemIcon>
                
                {option.name}
              </ListItem>
            </Link>
          ))}
        </div>
      );
    }
   
    else if (type === "SA") {
      return (
        <div style={{ marginTop: 10 }}>
          {side_top}
          {all_corporate_options.map((option) => (
            // <Link key={option.link} to={option.link} style={{ textDecoration: "none", color: "#fff" }}>
            <Link exact activeClassName="active" key={option.link} to={option.link} style={{textDecoration:"none", color:"#fff"}}>
              <ListItem button key={option.name} className = {classes.ListItem}>
                <ListItemIcon className={classes.Icon}><Icon>{option.icon}</Icon></ListItemIcon>
                <ListItemText className="listItemText" primary={option.name} />
              </ListItem>
              </Link>
            // </Link>
          ))}
        </div>
      );
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar

        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          {/* {props.type === "S" ? "" :
            <IconButton
              // color="inherit"
              style={{backgroundColor:'white'}}
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <Icon style={{ color: "black" }} >dehaze</Icon>
            </IconButton>
          } */}

          <Link to="/login">
            <img src={logo} alt="no_img" height="45" />
          </Link>
          {/* <span style={{ color: "red", marginLeft: 4 }}>alpha</span> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>


            {props.type === "S" &&
              <span>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} >
                  <Avatar alt={localStorage.getItem("name")} src={localStorage.getItem("profile_img")} className="drawer_img_closed" >
                    {localStorage.getItem("name") == null ? "" : localStorage.getItem("name").substring(0, 1).toUpperCase()}
                  </Avatar>
                  <Icon className="profile_down_icon">keyboard_arrow_down</Icon>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  // keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {/* <View_user_profile_cont /> */}
                </Menu>
                {/* <NotificationsCont /> */}
              </span>
            }
            <LG_Cont />

          </div>
        </Toolbar>
      </AppBar>

      {props.type === "S" ? "" :
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
          open={open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              <Icon style={{ color: "#fff" }} >keyboard_arrow_left</Icon>
            </IconButton>
          </div>
          <Divider style={{ backgroundColor:'#FF7000'}} />
          <List >
            {sideBar(props.type, open)}
          </List>
        </Drawer>
      }
    </div>
  );
}

export default MiniDrawer;

