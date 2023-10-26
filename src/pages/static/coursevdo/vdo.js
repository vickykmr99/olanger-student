// import React, { Component } from 'react';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import { Box } from '@mui/material';
// import { IconButton, Button, Slider } from '@mui/material';
// import { FastRewind } from '@mui/icons-material';
// import { FastForwardSharp } from '@mui/icons-material';
// import { PlayArrowSharp } from '@mui/icons-material';
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import ReactPlayer from 'react-player';
// import screenfull from 'screenfull';

// import { styled } from '@mui/material/styles';
// import { VolumeUp } from '@mui/icons-material';
// import { Fullscreen } from '@mui/icons-material';
// import Container from '@mui/material/Container';
// import './vdo.css';

// export default class vdo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             anchorEl1: null,
//             anchorEl2: null,
//             anchorEl3: null,
//             anchorEl4: null,
//             anchorEl5: null,
//             open1: false,
//             open2: false,
//             open3: false,
//             open4: false,
//             open5: false
//         };

//     }

//     handleMenuOpen1 = (event) => {
//         this.setState({
//             anchorEl1: event.currentTarget,
//             open1: true,
//             anchorEl2: null,
//             open2: false,
//             anchorEl3: null,
//             open3: false,
//             anchorEl4: null,
//             open4: false,
//             anchorEl5: null,
//             open5: false
//         });
//     };



//     handleMenuClose1 = () => {
//         this.setState({ anchorEl1: null, open1: false });
//     };

//     handleMenuOpen2 = (event) => {
//         this.setState({
//             anchorEl2: event.currentTarget,
//             open2: true,
//             anchorEl3: null,
//             open3: false,
//             anchorEl4: null,
//             open4: false,
//             anchorEl5: null,
//             open5: false
//         });
//     };

//     handleMenuClose2 = () => {
//         this.setState({ anchorEl2: null, open2: false });
//     };

//     handleMenuOpen3 = (event) => {
//         this.setState({
//             anchorEl3: event.currentTarget,
//             open3: true,
//             anchorEl4: null,
//             open4: false,
//             anchorEl5: null,
//             open5: false
//         });
//     };

//     handleMenuClose3 = () => {
//         this.setState({ anchorEl3: null, open3: false });
//     };

//     handleMenuOpen4 = (event) => {
//         this.setState({
//             anchorEl4: event.currentTarget,
//             open4: true,
//             anchorEl5: null,
//             open5: false
//         });
//     };

//     handleMenuClose4 = () => {
//         this.setState({ anchorEl4: null, open4: false });
//     };

//     handleMenuOpen5 = (event) => {
//         this.setState({ anchorEl5: event.currentTarget, open5: true });
//     };







//     handleMenuClose5 = () => {
//         this.setState({ anchorEl5: null, open5: false });
//     };
//     render() {
//         const { anchorEl1, anchorEl2, open1, open2 } = this.state;

//         const ControlIcons = () => {
//             const PrettoSlider = styled(Slider)({
//                 height: 5,
//                 "& .MuiSlider-track": {
//                     border: "none",
//                 },
//                 "& .MuiSlider-thumb": {
//                     height: 16,
//                     width: 16,
//                     backgroundColor: "#fff",
//                     border: "2px solid currentColor",
//                     "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
//                         boxShadow: "inherit",
//                     },
//                     "&:before": {
//                         display: "none",
//                     },
//                 },
//                 "& .MuiSlider-valueLabel": {
//                     lineHeight: 1.2,
//                     fontSize: 12,
//                     background: "unset",
//                     padding: 0,
//                     width: 32,
//                     height: 32,
//                     borderRadius: "50% 50% 50% 0",
//                     backgroundColor: "#52af77",
//                     transformOrigin: "bottom left",
//                     transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
//                     "&:before": { display: "none" },
//                     "&.MuiSlider-valueLabelOpen": {
//                         transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
//                     },
//                     "& > *": {
//                         transform: "rotate(45deg)",
//                     },
//                 },
//             });

//             return (
//                 <div>
//                     <div style={{ marginTop: "7%" }}>

//                         <Box sx={{
//                             marginLeft: "57em", backgroundColor: "#F8F8F8", position: "relative", width: "240px", left: " 24%",
//                             top: 47
//                         }}>
//                             <MenuList>
//                                 <MenuItem onClick={this.handleMenuOpen1}>

//                                     <ListItemText primary="1 .Number System" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </MenuList>

//                             <Menu
//                                 anchorEl={anchorEl1}
//                                 open={open1}
//                                 onClose={this.handleMenuClose1}
//                                 keepMounted
//                             >


//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="LCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>

//                                 <Menu
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={this.handleMenuClose2}
//                                     keepMounted
//                                 >
//                                     <MenuItem onClick={this.handleMenuClose2}>
//                                         <ListItemText primary="PDF 1" />
//                                         <ListItemIcon><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" /> </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="PDF 2" />
//                                         <ListItemIcon>
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" />
//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Extra Material" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(12).png?alt=media&token=73116635-fa20-4ca5-a905-b4009aea69c0' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Attempt Quiz" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20(1).png?alt=media&token=cb9513bd-f902-42d0-8937-84f7eb5073aa' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                 </Menu>

//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="HCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                         <Box sx={{
//                             marginLeft: "57em", backgroundColor: "#F8F8F8", position: "relative", width: "240px", left: " 24%",
//                             top: 47
//                         }}>
//                             <MenuList>
//                                 <MenuItem onClick={this.handleMenuOpen1}>

//                                     <ListItemText primary="2.Average" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </MenuList>

//                             <Menu
//                                 anchorEl={anchorEl1}
//                                 open={open1}
//                                 onClose={this.handleMenuClose1}
//                                 keepMounted
//                             >


//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="LCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>

//                                 <Menu
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={this.handleMenuClose2}
//                                     keepMounted
//                                 >
//                                     <MenuItem onClick={this.handleMenuClose2}>
//                                         <ListItemText primary="PDF 1" />
//                                         <ListItemIcon><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" /> </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="PDF 2" />
//                                         <ListItemIcon>
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" />
//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Extra Material" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(12).png?alt=media&token=73116635-fa20-4ca5-a905-b4009aea69c0' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Attempt Quiz" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20(1).png?alt=media&token=cb9513bd-f902-42d0-8937-84f7eb5073aa' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                 </Menu>

//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="HCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                         <Box sx={{
//                             marginLeft: "57em", backgroundColor: "#F8F8F8", position: "relative", width: "240px", left: " 24%",
//                             top: 47
//                         }}>
//                             <MenuList>
//                                 <MenuItem onClick={this.handleMenuOpen1}>

//                                     <ListItemText primary="3.Algebra" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </MenuList>

//                             <Menu
//                                 anchorEl={anchorEl1}
//                                 open={open1}
//                                 onClose={this.handleMenuClose1}
//                                 keepMounted
//                             >


//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="LCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>

//                                 <Menu
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={this.handleMenuClose2}
//                                     keepMounted
//                                 >
//                                     <MenuItem onClick={this.handleMenuClose2}>
//                                         <ListItemText primary="PDF 1" />
//                                         <ListItemIcon><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" /> </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="PDF 2" />
//                                         <ListItemIcon>
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" />
//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Extra Material" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(12).png?alt=media&token=73116635-fa20-4ca5-a905-b4009aea69c0' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Attempt Quiz" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20(1).png?alt=media&token=cb9513bd-f902-42d0-8937-84f7eb5073aa' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                 </Menu>

//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="HCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                         <Box sx={{
//                             marginLeft: "57em", backgroundColor: "#F8F8F8", position: "relative", width: "240px", left: " 24%",
//                             top: 47
//                         }}>
//                             <MenuList>
//                                 <MenuItem onClick={this.handleMenuOpen1}>

//                                     <ListItemText primary="4 .LCM & GCF" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </MenuList>

//                             <Menu
//                                 anchorEl={anchorEl1}
//                                 open={open1}
//                                 onClose={this.handleMenuClose1}
//                                 keepMounted
//                             >


//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="LCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>

//                                 <Menu
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={this.handleMenuClose2}
//                                     keepMounted
//                                 >
//                                     <MenuItem onClick={this.handleMenuClose2}>
//                                         <ListItemText primary="PDF 1" />
//                                         <ListItemIcon><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" /> </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="PDF 2" />
//                                         <ListItemIcon>
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" />
//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Extra Material" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(12).png?alt=media&token=73116635-fa20-4ca5-a905-b4009aea69c0' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Attempt Quiz" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20(1).png?alt=media&token=cb9513bd-f902-42d0-8937-84f7eb5073aa' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                 </Menu>

//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="HCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>
//                         <Box sx={{
//                             marginLeft: "57em", backgroundColor: "#F8F8F8", position: "relative", width: "240px", left: " 24%",
//                             top: 47
//                         }}>
//                             <MenuList>
//                                 <MenuItem onClick={this.handleMenuOpen1}>

//                                     <ListItemText primary="5 .Percentage & Application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </MenuList>

//                             <Menu
//                                 anchorEl={anchorEl1}
//                                 open={open1}
//                                 onClose={this.handleMenuClose1}
//                                 keepMounted
//                             >


//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="LCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>

//                                 <Menu
//                                     anchorEl={anchorEl2}
//                                     open={open2}
//                                     onClose={this.handleMenuClose2}
//                                     keepMounted
//                                 >
//                                     <MenuItem onClick={this.handleMenuClose2}>
//                                         <ListItemText primary="PDF 1" />
//                                         <ListItemIcon><img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" /> </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="PDF 2" />
//                                         <ListItemIcon>
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(11).png?alt=media&token=cb4a18ed-af10-4764-ad32-2d07b247cf89' alt="image" />
//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Extra Material" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Vector%20(12).png?alt=media&token=73116635-fa20-4ca5-a905-b4009aea69c0' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                     <MenuItem onClick={this.handleMenuClose2}>

//                                         <ListItemText primary="Attempt Quiz" />
//                                         <ListItemIcon >
//                                             <img src='https://firebasestorage.googleapis.com/v0/b/olanger-2f470.appspot.com/o/Group%20(1).png?alt=media&token=cb9513bd-f902-42d0-8937-84f7eb5073aa' alt="image" />

//                                         </ListItemIcon>
//                                     </MenuItem>

//                                 </Menu>

//                                 <MenuItem onClick={this.handleMenuOpen2}>

//                                     <ListItemText primary="HCF & it’s application" />
//                                     <ListItemIcon>
//                                         <ExpandMoreIcon />
//                                     </ListItemIcon>
//                                 </MenuItem>
//                             </Menu>
//                         </Box>

//                     </div>
//                     <div>
//                         <Typography style={{
//                             Lineheight: " 27px", marginLeft: "220px", marginTop: "4em", width: "359px", fontWeight: "bold",
//                             height: "27px"
//                         }}>
//                             Number System  - LCF & it’s application
//                         </Typography>
//                         <Box style={{ color: "#4A4958", width: "65em", paddingLeft: "15em", marginTop: "-1em" }}>
//                             <Typography style={{ color: "#4A4958", marginTop: "1.5em", width: "63em", paddingLeft: "-1em" }}>
//                                 Number System Questions: Number system questions are an important topic of quantitative aptitude that is asked in most of the competitive exams like SSC CGL, SSC CHSL, SBI PO, IBPS PO, Clerk, and Railways, etc.
//                             </Typography>
//                             <Typography style={{ color: "#4A4958", marginTop: "1.5em", width: "60em", paddingLeft: "-1em" }}>The number system is a vital mathematical concept that forms the basis of many other mathematical concepts. It includes various types of numbers, and students preparing for SSC exams must have a solid grasp of their properties and operations. They should be able to perform arithmetic operations on different types of numbers, understand mathematical rules and formulas, and solve problems related to the number system. A strong foundation in the number system will enable students to solve complex mathematical problems with ease and succeed in their SSC exams.</Typography>
//                             <Typography style={{ color: "#4A4958", marginTop: "1em", width: "65em", paddingLeft: "-1em" }}>
//                                 Enjoy Learning!
//                             </Typography>
//                         </Box>


//                     </div>
//                     <div className='vdobox'>

//                         <header className='header__section'>
//                             <p className='header__text'>Build a Video Player - Tutorial</p>
//                         </header>
//                         <Container maxWidth="md">
//                             <div className='playerDiv'>

//                                 <ReactPlayer width={'100%'} height='100%' url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" />
//                                 <ReactPlayer width={'100%'} height='100%'
//                                     url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" playing={true} muted={true} controls={true} />

//                                 <ControlIcons />
//                             </div>
//                         </Container>
//                         <div className="controls__div">
//                             <Grid container direction='row' alignItems='center' justifyContent='center'>
//                                 <IconButton className='controls__icons' aria-label='reqind'>
//                                     <FastRewind fontSize='large' style={{ color: 'white' }} />
//                                 </IconButton>

//                                 <IconButton className='controls__icons' aria-label='reqind'>
//                                     <PlayArrowSharp fontSize='large' style={{ color: 'white' }} />
//                                 </IconButton>

//                                 <IconButton className='controls__icons' aria-label='reqind'>
//                                     <FastForwardSharp fontSize='large' style={{ color: 'white' }} />
//                                 </IconButton>
//                                 <Grid container direction='row' alignItems='center' justifyContent='space-between' style={{ padding: 16 }}>
//                                     <Grid item>
//                                         <Typography variant='h5' style={{ color: 'white' }}>Tears Of Steel</Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid
//                                 container
//                                 direction="row"
//                                 alignItems="center"
//                                 justifyContent="space-between"
//                                 style={{ padding: 16 }}
//                             >
//                                 <Grid item>
//                                     <Typography variant="h5" style={{ color: "white" }}>
//                                         Tears Of Steel
//                                     </Typography>
//                                 </Grid>

//                                 <Grid item xs={12}>
//                                     <PrettoSlider min={0} max={100} defaultValue={20} />
//                                     <Grid container direction="row" justifyContent="space-between">
//                                         <Typography variant="h7" style={{ color: "white" }}>
//                                             00:26
//                                         </Typography>
//                                         <Typography variant="h7" style={{ color: "white" }}>
//                                             12:30
//                                         </Typography>
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Grid container alignItems="center" direction="row">
//                                     <IconButton className="controls__icons" aria-label="reqind">
//                                         <PlayArrowSharp fontSize="large" style={{ color: "white" }} />
//                                     </IconButton>

//                                     <IconButton className="controls__icons" aria-label="reqind">
//                                         <VolumeUp fontSize="large" style={{ color: "white" }} />
//                                     </IconButton>

//                                     <Typography style={{ color: "#fff", paddingTop: "5px" }}>40</Typography>
//                                     <Slider min={0} max={100} defaultValue={100} className="volume__slider" />
//                                 </Grid>
//                             </Grid>
//                             <Grid item>
//                                 <Button variant="text" className="bottom__icons">
//                                     <Typography>1X</Typography>
//                                 </Button>

//                                 <IconButton className="bottom__icons">
//                                     <Fullscreen fontSize="large" />
//                                 </IconButton>
//                             </Grid>
//                         </div>
//                     </div>
//                 </div>

//             );
//         }
//     }
// }