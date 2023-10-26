import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
  Dialog,
  Card,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CloseIcon from '@mui/icons-material/Close';
import InputBase from "@mui/material/InputBase";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../images/navbar/logo_olanger.png"
import About from "../../images/navbar/about.svg"
import Aboutclr from "../../images/navbar/aboutclr.svg"
import x from "../../images/navbar/home.svg"
import Homeclr from "../../images/navbar/homeclr.svg"
import Test from "../../images/navbar/test.svg"
import Testclr from "../../images/navbar/testclr.svg"
import Prev from "../../images/navbar/pdf.svg"
import Prevclr from "../../images/navbar/pdfclr.svg"
import Course from "../../images/navbar/course.svg"
import Courseclr from "../../images/navbar/courseclr.svg"
import Mobile from "../../images/navbar/mobile-phone-icon.svg"
import User from "../../images/navbar/lucide_user.svg"
import Bell from "../../images/navbar/lucide_bell.svg"
import Person from "../../images/navbar/default-profile-picture-male-icon.svg"
import Google from "../../images/navbar/pngegg (5) 1.svg"
import Facebook from "../../images/navbar/580b57fcd9996e24bc43c52a 1.svg"
import Otp from "../../images/navbar/otp-icon 1.svg"
import { HashLink } from 'react-router-hash-link';
// import LoaderCon from "../../common/loader/containers/loader_cont";
import Snackbar from "../../common/snackbar/components/snackbar";
import GoogleLogin from 'react-google-login';
import Eclipse from "../../images/eclipse.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
// import "../../../../pages/static/Coupon/Components/Examysfirst.css"
import examyshomeimage from "../../images/examys-home-68.png"
// import Button from '@mui/material/Button';
import Brightness1SharpIcon from '@mui/icons-material/Brightness1Sharp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import inspire from "../../images/inspire.png";
// import refer from "../../images/refer.png";
// import passpro from "../../images/pass pro.png";
import aigpt from "../../images/aigpt.png";
import tick from "../../images/tick.png";
import passpro from "../../images/passpro.png";
import ImageListItem from '@mui/material/ImageListItem';
import { Container, StepConnector, Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import nomatch from "../../images/nomatch.png";
import ola from "../../images/ola.png";
import CardActions from '@mui/material/CardActions';

export default class homenavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      examlist: false,
      examysfirstmodal: false,
      referandearn: false,
      anchorEl: null,
      isSticky: false,
      modalVisible: false,
      modalVisible1: false,
      selectedLink: "",
      selected: "home",// store the selected link in the state
      otp: "", // OTP value
      countdown: 60, // Countdown timer value in seconds
      timerId: null, // Timer ID for clearing the timer
      login_id: "",
      student_name: "",
      otpVerified: false,
      msg: "",
      isLoggedIn: false,
      userID: '',
      name: '',
      email: '',
      picture: '',
    };


  }
  responseGoogle(googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();

    console.log({ googleId });
    console.log({ accessToken: id_token });
  }

  responseFacebook = (response) => {
    console.log(response);
  };
  responseErrorFacebook = (error) => {
    console.log(error);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.startCountdown();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.state.timerId);

  }
  startCountdown = () => {
    const timerId = setInterval(() => {
      this.setState(prevState => ({ countdown: prevState.countdown - 1 }));
      if (this.state.countdown === 0) {
        clearInterval(this.state.timerId);
      }
    }, 1000);
    this.setState({ timerId });
  };

  resendOTP = () => {
    this.props.phone_login(this.state.login_id);
    this.setState({ countdown: 60 });
    this.startCountdown();
  };

  handleScroll = () => {
    if (window.pageYOffset > 0) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLinkClick = (link) => {
    this.setState({ selectedLink: link });
  };
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  }
  handleLinkClick = (link) => {
    this.setState({ selected: link }); // update the selected link in the state
  }
  nextPath(path) {
    this.props.history.push(path);
  }
  handleVerifyOTP = (enteredOTP) => {
    if (parseInt(enteredOTP) === this.props.common.otp) {
      this.setState({ otpVerified: true });

    }
  };

  render() {

    const data = [
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC Exams' },
      { id: 2, url: 'https://s3-alpha-sig.figma.com/img/d0b0/537d/2431d75237a42c715b43948f5f5d9728?Expires=1695600000&Signature=KUxjITmS6YAkRcQ1139Ufp~Z37SRml6HTeo2mFOtKko5bPgCZYXaiADtXqHnWc5gvHCyAfE3Kljg6zaqBoKzlL4ZvHa1kSfZwyxAE5cOCZ6T4J5OukqbRzJw6aMdMyOTdfh6yJWLbBWfhWrDG-q8HHoT1lN3roi9TKVWJ70A37UTAzLIlQAbXK0bAFPdCMwVBWuYI1eMNH9vqpK3g7fBSvXWMKf8BYqTLBVaykHKmjfOgG~ukBofofGunJorgtLnQ3uIimcFuaTbxNP8DBejbfIoK4yL7J5xwxNGToEcDQLqWGErf4E~yltVKO4ap01~NGFMhXueK8oleI3fkjN1gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'Railway Exams' },
      { id: 3, url: 'https://s3-alpha-sig.figma.com/img/0b69/26e5/049a33251cd8f107bb633528fdcd9d27?Expires=1695600000&Signature=hrg2F1-QoiHCvCksaydjAU5-tGEhzn04vRHRZwacV8zcLa5uHj2GR-64tLv50lIPZTt0K7vuBp5L3BNkS1y25sQnWY1FfylOidZRwTx-CpBEhn2ysKDxTDC3gdy0Z3aj75ZfeLHTwQsivRbT8ZwJcXxb2UTuvVz~pJFRSaLQOk4kQbZy3funPJ-R3D9Q3es0AAzMUBfvMttBz7zF-yu-CBW9sIwehhx1y~3GNKSDQm6K389SHnvlk3tEDBvtmX~DcHG4f7buKoSV~VSMEevbGjFVu5y4ztsy5EAmxqxioJ4BtkQW9reFK2J2weAW0igW6zWUJ1X6WmWOfulB6CZR7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'Banking Exams' },
      { id: 4, url: 'https://s3-alpha-sig.figma.com/img/17d3/0f82/60acf138c47e960632d8ae89ae16ba11?Expires=1695600000&Signature=fM0DIgD5ADiN9hk3JBwNFWp5ywBDYSjO2v-IbPpnIXu452xcjz5gmo3Bq9s~QEDsLmacGL8nVgqUvigBMfNG4StDKmyLSwVb6dQcXfLfvy6ZSKXbVGY6n0MWSieixL4IfT4RJ1FbZPC3eaLn30LDIyCh8s-Nnod8wVhDA6imub0AK7LFVo2Ac~nlqha7HZ3hXKUFCAUgG56U-Po2CGsUz1bFR5ETsYj0LgY3vgrt8q8d9yOR1L~RiiyoRBQEWpwh737kCtg9~BTKD3znkr8DxyxUfkj4xWKwVpzUAUNxM2Y3iGbd-Oeel-iCVhGPHDwdXbbNQ0sGCQBAWlfF5DX7eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'Teaching Exams' },
      { id: 5, url: 'https://s3-alpha-sig.figma.com/img/52a5/1629/b8ec692509f151b91d163ecbdcf165d0?Expires=1695600000&Signature=GaPce-DgGTUdRLIPNma0TuSzSmd9ZSHsCmJAkvPwwPXB-DaVBB8MfxgreKDGlUjnG1zFA3n6uB~XDEDOYRhTGrnTniBARqZO6avWG0jRsPP1SIo~RT6eIGr-cmeKwiZpqqRF2a9McMEXaeLDxwRQ9MwTIPPt04-thWtQ89u8G5HmDEIhK~l2GFnbFeLN~wI8ycmf4odo180PLfz1whZZUW8fyDVMxY-Wj8PUR2AZBvlDI8FL2aoX7zgSNegn1fjqZieWcYUjghr0jqq6HQsuN2dk-UXx3EJm8ElWZ7DtsWb1~CDR6IDSWIVf5T5zwpdpglwVZgr6wgQckbowYiLtlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'Defence Exams' },
      { id: 6, url: 'https://s3-alpha-sig.figma.com/img/f899/8cb3/6e062fb36cf475e91e1ec28219434bf1?Expires=1695600000&Signature=ohX9ExuuCgz5NyT2EghRp9qYHQRoMpAtDJqd4t3JgbbVHrfg8pgZGXCLef2GnO5ehdcUyeWXH~IFg42oYqDP1n1~lpVTQPC-sTMbFHp3dcLHNDwCrYvdPqOhJ3EPgC5uOWrZAd2seInzxfW3dJoXyL0GjvAYZHoMROKKp2HQyF8L785ESRUCUv4Dy8kqDcrVy6KHvhZix7~X4WCUxibub9jrxMPJsOyCRAISky2SfnI7aJtXt1oXIByHg~NBRKmAyk3bECozx8~4-huJ0VeuM~mIchRpytO94j1iWr~cgAuwuGd0tV9AMDYy23BvBQnML~bPfSxwFO6nsVz1Ye4JWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'State Govt Exams' },
      { id: 7, url: 'https://s3-alpha-sig.figma.com/img/f835/4f0e/a69aa72611802027dfb9757f6d771a9c?Expires=1695600000&Signature=RGaQcYzBoUc0NmlXhDzbYjl-t8YUUQPbRWomcK-F7jfjr6AG5U41zJRfFg1BJBGkW3BPjLA7~JljKn1-afqz0o~iJadlE3zSGae-utzuL7rAEsx2N6ncd~43aw0BHdZDqNFmZ7LeGDeFso58y2vLn864Ul5e-9UNuagSrShyBaKsmtEtTPy2iL4pUG5phyrZTJ9G6S9Yf05onUm8uYGJkGkStGyUXYsBeFe0YvwwL91JDZTeL2F34Tu-B7kat5NaHebNe2Ol360Draqs7qe-~lsmXvVv8rGHA15dzs-obpSDpaFxziX4t8AR81NNEl3yo3yKAKAuua9qhL44B7pWCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'DRDO Exams' },
      { id: 8, url: 'https://s3-alpha-sig.figma.com/img/b24b/6147/856da81ffe73fcc94e756191b6847e9c?Expires=1695600000&Signature=l1lRR3EPzkD2hBsrKigiqNF5JmGBmZ8vhQxJz6MYce5YsBsSku2GPab2Ju4esLsgjv5tymW3ne1nQKLfkc8woZ1vZ0w5IaWthhagoJa~x5iFk6MdkFs6-FhaUmw4FYZZeMP7R9ceXHvG4UZDqGjh5sW~-NuA1~LxpZP6IVHo5q7CkG90Mi~qPsjV~zWno5URQbEoXFP0Qw4QqsVm9uoO0PLXDqzRtU4fTTQrh-ycJi7nhpzwxP~DBitDak-9BLb3o6l9ojSIjqJdJnthp70fw5cOuuGQM4BAnLNbSJ-Ty42ni-W-QsKzMRA966MTFrv5zp1brTesfnJZlbyKhcXGWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'EPFO Exams' },
    ]

    const menu = [
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC MTS' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC GD Constable' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC CHSL' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC CGL' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC JHT' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC JE CE' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC CPO' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC Stenographer' },
      { id: 1, url: 'https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', con: 'SSC Selection Post' }
    ]







    const { selected, modalVisible, modalVisible1 } = this.state;
    const { anchorEl, ticky } = this.state;
    const { countdown } = this.state;
    const {
      close_snack_bar,
      snackbar
    } = this.props;
    const open = Boolean(anchorEl);


    const Search = styled("div")(({ theme }) => ({
      position: "relative",

      borderRadius: "4px",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "100%",
      },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: "inherit",
      "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
          width: "70ch",
        },
      },
    }));

    let googleContent;

    if (this.state.isLoggedIn) {
      googleContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          <p>Email: {this.state.email}</p>
        </div>
      );
    } else {
      googleContent = (
        <GoogleLogin
          clientId="<your-client-id>"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
    return (
    
      <AppBar position="fixed" style={{ backgroundColor: "white", }}>
        <Toolbar style={{marginTop:"10px"}}>

         
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="main-navbar-logo1" src={Eclipse} alt="Loading..." /></Link>
           
            <Paper
              component="form"
              style={{ display: "flex", width:"280px", height: "37px", marginLeft: "8%", border: "1px solid rgba(142, 141, 151, 0.50)", backgroundColor: "none " }}
            >
              <IconButton
                type="button"
                style={{ p: "150px", whiteSpace: "nowrap", color: "var(--nuetrals-nuetrals-n-300, #72717D)" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                style={{ ml: 5, flex: 1, fontSize: "15px", whiteSpace: "nowrap", color: "var(--nuetrals-nuetrals-n-300, #72717D)", fontFamily: "Poppins" }}
                placeholder="search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
         
              <Typography

                onClick={() => {
                  this.setState({
                    examlist: true,
                  });
                }}
                variant="text" style={{ cursor: "pointer", color: "#72717D", display: ":flex", flexDirection: "row", whiteSpace: "nowrap",
                 borderRight: "2px solid gray",  height: "20px",width:"100px",marginLeft:"1%"  }} className="button-index">Exam List
                <KeyboardArrowDownIcon />


              </Typography>
              <Typography variant="text"
                onClick={() => {
                  this.setState({
                    referandearn: true,
                  });
                }}

                style={{ color: "#72717D",borderRight: "2px solid gray",  height: "20px",width:"110px",marginLeft:"5px",  cursor: "pointer", whiteSpace: "nowrap" }} className="button-index">Refer & Earn</Typography>


              <Typography

                onClick={() => {
                  this.setState({
                    examysfirstmodal: true,
                  });
                }}
                variant="text" style={{ cursor: "pointer", color: "#72717D", width: "120px",  whiteSpace: "nowrap",borderRight: "2px solid gray",  height: "20px",width:"110px",marginLeft:"5px",   }} className="button-index">ExamysFirst</Typography>

              <Link to="/coupon" style={{ textDecoration: "none",  }}>
                <Typography variant="text" style={{ color: "#72717D", width: "70px", whiteSpace: "nowrap",borderRight: "2px solid gray",paddingRight:"5px",  height: "20px",marginLeft:"5px",   }} className="button-index">Coupon</Typography>

              </Link>
              
             <Typography variant="text" style={{ color: "#72717D", width: "160px", whiteSpace: "nowrap", cursor: "pointer" ,marginLeft:"10px" }} className="button-index">Download App</Typography>

             
              
        
             
          
      
          
        </Toolbar>

        <Toolbar>
        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between",marginLeft:"15%",  marginRight: "15%", width: "73%",marginTop:"-3%" }}>
                  
                  
                    <center>
                    <img src={Course} height={20} width={20} /></center>
                    <Link to="/Coursedetails">
                    <Typography style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",fontWeight:400,whiteSpace: "nowrap",}}>Courses</Typography>
                 
                    </Link>
                  <Grid style={{marginLeft:"3%"}}>
                  <center>
                    <img src={Test} height={20} width={20} /></center>
                    <Typography  style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",fontWeight:400,whiteSpace: "nowrap",}}>Test Series</Typography></Grid>
                    <Grid style={{marginLeft:"3%"}}>
                  <center>
                    <img src={tick} height={20} width={20} /></center>
                    <Typography  style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",whiteSpace: "nowrap",fontWeight:400}}>Student's Special</Typography></Grid>
                    <Grid style={{marginLeft:"3%"}}>
                  <center>
                    <img src={passpro} height={20} width={20} /></center>
                    <Typography  style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",whiteSpace: "nowrap",fontWeight:400}}>Test Pass Pro +</Typography></Grid>
                    <Grid style={{marginLeft:"3%"}}>
                  <center>
                    <img src={aigpt} height={20} width={20} /></center>
                    <Typography  style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",whiteSpace: "nowrap",fontWeight:400}}>Examys ai GPT</Typography></Grid>
                    <Grid style={{marginLeft:"3%"}}>
                  <center>
                    <img src={inspire} height={20} width={20} /></center>
                    <Typography  style={{fontSize:"14px",color:"#72717D",fontFamily:"Poppins",whiteSpace: "nowrap",fontWeight:400}}>Examys Inspire</Typography></Grid>


                  <Button

                    color="inherit"
                    className="langbtn"
                    variant="outlined"
                    id="resources-button"
                    // aria-controls={open ? "resources-menu" : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    startIcon={<TranslateIcon />}
                    style={{ borderColor: "#3E30C2", backgroundColor: "#eeecfe",whiteSpace: "nowrap",width:"120px", height: "40px", marginLeft: "5%" }}
                  >
                    <select className="selectbutton" style={{ backgroundColor: "#EEECFE",width:"120px",whiteSpace: "nowrap", borderWidth: 0, textTransform: "capitalize", fontSize: 14, }}>
                      <option value="English">English</option>

                      <option value="Hindi">Hindi</option>
                    </select>



                  </Button>
                  <Button
                    onClick={() => this.setModalVisible(true)} sx={{ ml: 1 }} style={{ backgroundColor: "#3E30C2", height: "40px", color: "#fff", textTransform: "capitalize", fontSize: 12, fontWeight: 400, marginLeft: "1%", }}  >
                    Log in
                  </Button>
                </Grid>
                <Grid style={{paddingBottom:"10px"}}></Grid>
                </Toolbar>
      </AppBar>
  
   
    )
  }
}
