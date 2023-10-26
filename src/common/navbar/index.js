import React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Button,
  Stack,
  Grid,
  IconButton,
  Dialog,
  Tooltip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import TranslateIcon from "@mui/icons-material/Translate";
import Logo from "../../images/navbar/logo_olanger.png";
import About from "../../images/navbar/about.svg";
import Aboutclr from "../../images/navbar/aboutclr.svg";
import x from "../../images/navbar/home.svg";
import Homeclr from "../../images/navbar/homeclr.svg";
import Test from "../../images/navbar/test.svg";
import Testclr from "../../images/navbar/testclr.svg";
import Prev from "../../images/navbar/pdf.svg";
import Prevclr from "../../images/navbar/pdfclr.svg";
import Course from "../../images/navbar/course.svg";
import Examyinspireclr from "../../images/navbar/Examyinspire.png";
import Examyaigptclr from "../../images/navbar/Examyaigpt.png";
import TestPro from "../../images/navbar/TestPro.png";
import Studentspecial from "../../images/navbar/Studentspecial.png"
import Courseclr from "../../images/navbar/courseclr.svg";
import Mobile from "../../images/navbar/mobile-phone-icon.svg";
import User from "../../images/navbar/lucide_user.svg";
import Bell from "../../images/navbar/lucide_bell.svg";
import Person from "../../images/navbar/default-profile-picture-male-icon.svg";
import Google from "../../images/navbar/pngegg (5) 1.svg";
import Facebook from "../../images/navbar/580b57fcd9996e24bc43c52a 1.svg";
import Otp from "../../images/navbar/otp-icon 1.svg";
import { HashLink } from "react-router-hash-link";
// import LoaderCon from "../../common/loader/containers/loader_cont";
import Snackbar from "../../common/snackbar/components/snackbar";
import GoogleLogin from "react-google-login";
import Eclipse from "../../images/eclipse.png";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
// import "../../../../pages/static/Coupon/Components/Examysfirst.css"
import examyshomeimage from "../../images/examys-home-68.png";
// import Button from '@mui/material/Button';
import Brightness1SharpIcon from "@mui/icons-material/Brightness1Sharp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import inspire from "../../images/inspire.png";
import aigpt from "../../images/aigpt.png";
import tick from "../../images/tick.png";
import passpro from "../../images/passpro.png";
import ImageListItem from "@mui/material/ImageListItem";
import { Container, StepConnector, Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import nomatch from "../../images/nomatch.png";
import ola from "../../images/ola.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AppleIcon from "@mui/icons-material/Apple";
import Playstore from "../../images/playstore.png";
import Playstoreimg from "../../images/GoogleP.png"
import Appstore from "../../images/AppStore.jpg"
import "../navbar/index.css";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();

    return <Component navigate={navigate} {...props} />;
  };

  return Wrapper;
};
class MuiNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      examlist: false,
      download: false,
      examysfirstmodal: false,
      referandearn: false,
      anchorEl: null,
      isSticky: false,
      modalVisible: false,
      modalVisible1: false,
      selectedLink: "",
      selected: "home", // store the selected link in the state
      otp: "", // OTP value
      countdown: 60, // Countdown timer value in seconds
      timerId: null, // Timer ID for clearing the timer
      login_id: "",
      student_name: "",
      otpVerified: false,
      msg: "",
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
      activeIndex: null,
      course: false,
      testSeries: false,
      studentSpecial: false,
      testPro: false,
      examys: false,
      examysInspire: false,
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
      this.setState((prevState) => ({ countdown: prevState.countdown - 1 }));
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
  };
  setModalVisible1 = (visible) => {
    this.setState({ modalVisible1: visible });
  };
  handleLinkClick = (link) => {
    this.setState({ selected: link }); // update the selected link in the state
  };
  nextPath(path) {
    this.props.history.push(path);
  }
  handleVerifyOTP = (enteredOTP) => {
    if (parseInt(enteredOTP) === this.props.common.otp) {
      this.setState({ otpVerified: true });
    }
  };

  // componentDidMount() {
  //      const btns = document.getElementsByClassName('header-item');

  //      for (let i = 0; i < btns.length; i++) {
  //        btns[i].addEventListener('click', () => {
  //          const current = document.getElementsByClassName('active');
  //          if (current.length > 0) {
  //            current[0].classList.remove('active');
  //          }

  //          btns[i].classList.add('active');

  //          this.setState({ activeIndex: i });
  //        });
  //      }
  //    }

  render() {
    const data = [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC Exams",
      },
      {
        id: 2,
        url: "https://s3-alpha-sig.figma.com/img/d0b0/537d/2431d75237a42c715b43948f5f5d9728?Expires=1695600000&Signature=KUxjITmS6YAkRcQ1139Ufp~Z37SRml6HTeo2mFOtKko5bPgCZYXaiADtXqHnWc5gvHCyAfE3Kljg6zaqBoKzlL4ZvHa1kSfZwyxAE5cOCZ6T4J5OukqbRzJw6aMdMyOTdfh6yJWLbBWfhWrDG-q8HHoT1lN3roi9TKVWJ70A37UTAzLIlQAbXK0bAFPdCMwVBWuYI1eMNH9vqpK3g7fBSvXWMKf8BYqTLBVaykHKmjfOgG~ukBofofGunJorgtLnQ3uIimcFuaTbxNP8DBejbfIoK4yL7J5xwxNGToEcDQLqWGErf4E~yltVKO4ap01~NGFMhXueK8oleI3fkjN1gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "Railway Exams",
      },
      {
        id: 3,
        url: "https://s3-alpha-sig.figma.com/img/0b69/26e5/049a33251cd8f107bb633528fdcd9d27?Expires=1695600000&Signature=hrg2F1-QoiHCvCksaydjAU5-tGEhzn04vRHRZwacV8zcLa5uHj2GR-64tLv50lIPZTt0K7vuBp5L3BNkS1y25sQnWY1FfylOidZRwTx-CpBEhn2ysKDxTDC3gdy0Z3aj75ZfeLHTwQsivRbT8ZwJcXxb2UTuvVz~pJFRSaLQOk4kQbZy3funPJ-R3D9Q3es0AAzMUBfvMttBz7zF-yu-CBW9sIwehhx1y~3GNKSDQm6K389SHnvlk3tEDBvtmX~DcHG4f7buKoSV~VSMEevbGjFVu5y4ztsy5EAmxqxioJ4BtkQW9reFK2J2weAW0igW6zWUJ1X6WmWOfulB6CZR7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "Banking Exams",
      },
      {
        id: 4,
        url: "https://s3-alpha-sig.figma.com/img/17d3/0f82/60acf138c47e960632d8ae89ae16ba11?Expires=1695600000&Signature=fM0DIgD5ADiN9hk3JBwNFWp5ywBDYSjO2v-IbPpnIXu452xcjz5gmo3Bq9s~QEDsLmacGL8nVgqUvigBMfNG4StDKmyLSwVb6dQcXfLfvy6ZSKXbVGY6n0MWSieixL4IfT4RJ1FbZPC3eaLn30LDIyCh8s-Nnod8wVhDA6imub0AK7LFVo2Ac~nlqha7HZ3hXKUFCAUgG56U-Po2CGsUz1bFR5ETsYj0LgY3vgrt8q8d9yOR1L~RiiyoRBQEWpwh737kCtg9~BTKD3znkr8DxyxUfkj4xWKwVpzUAUNxM2Y3iGbd-Oeel-iCVhGPHDwdXbbNQ0sGCQBAWlfF5DX7eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "Teaching Exams",
      },
      {
        id: 5,
        url: "https://s3-alpha-sig.figma.com/img/52a5/1629/b8ec692509f151b91d163ecbdcf165d0?Expires=1695600000&Signature=GaPce-DgGTUdRLIPNma0TuSzSmd9ZSHsCmJAkvPwwPXB-DaVBB8MfxgreKDGlUjnG1zFA3n6uB~XDEDOYRhTGrnTniBARqZO6avWG0jRsPP1SIo~RT6eIGr-cmeKwiZpqqRF2a9McMEXaeLDxwRQ9MwTIPPt04-thWtQ89u8G5HmDEIhK~l2GFnbFeLN~wI8ycmf4odo180PLfz1whZZUW8fyDVMxY-Wj8PUR2AZBvlDI8FL2aoX7zgSNegn1fjqZieWcYUjghr0jqq6HQsuN2dk-UXx3EJm8ElWZ7DtsWb1~CDR6IDSWIVf5T5zwpdpglwVZgr6wgQckbowYiLtlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "Defence Exams",
      },
      {
        id: 6,
        url: "https://s3-alpha-sig.figma.com/img/f899/8cb3/6e062fb36cf475e91e1ec28219434bf1?Expires=1695600000&Signature=ohX9ExuuCgz5NyT2EghRp9qYHQRoMpAtDJqd4t3JgbbVHrfg8pgZGXCLef2GnO5ehdcUyeWXH~IFg42oYqDP1n1~lpVTQPC-sTMbFHp3dcLHNDwCrYvdPqOhJ3EPgC5uOWrZAd2seInzxfW3dJoXyL0GjvAYZHoMROKKp2HQyF8L785ESRUCUv4Dy8kqDcrVy6KHvhZix7~X4WCUxibub9jrxMPJsOyCRAISky2SfnI7aJtXt1oXIByHg~NBRKmAyk3bECozx8~4-huJ0VeuM~mIchRpytO94j1iWr~cgAuwuGd0tV9AMDYy23BvBQnML~bPfSxwFO6nsVz1Ye4JWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "State Govt Exams",
      },
      {
        id: 7,
        url: "https://s3-alpha-sig.figma.com/img/f835/4f0e/a69aa72611802027dfb9757f6d771a9c?Expires=1695600000&Signature=RGaQcYzBoUc0NmlXhDzbYjl-t8YUUQPbRWomcK-F7jfjr6AG5U41zJRfFg1BJBGkW3BPjLA7~JljKn1-afqz0o~iJadlE3zSGae-utzuL7rAEsx2N6ncd~43aw0BHdZDqNFmZ7LeGDeFso58y2vLn864Ul5e-9UNuagSrShyBaKsmtEtTPy2iL4pUG5phyrZTJ9G6S9Yf05onUm8uYGJkGkStGyUXYsBeFe0YvwwL91JDZTeL2F34Tu-B7kat5NaHebNe2Ol360Draqs7qe-~lsmXvVv8rGHA15dzs-obpSDpaFxziX4t8AR81NNEl3yo3yKAKAuua9qhL44B7pWCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "DRDO Exams",
      },
      {
        id: 8,
        url: "https://s3-alpha-sig.figma.com/img/b24b/6147/856da81ffe73fcc94e756191b6847e9c?Expires=1695600000&Signature=l1lRR3EPzkD2hBsrKigiqNF5JmGBmZ8vhQxJz6MYce5YsBsSku2GPab2Ju4esLsgjv5tymW3ne1nQKLfkc8woZ1vZ0w5IaWthhagoJa~x5iFk6MdkFs6-FhaUmw4FYZZeMP7R9ceXHvG4UZDqGjh5sW~-NuA1~LxpZP6IVHo5q7CkG90Mi~qPsjV~zWno5URQbEoXFP0Qw4QqsVm9uoO0PLXDqzRtU4fTTQrh-ycJi7nhpzwxP~DBitDak-9BLb3o6l9ojSIjqJdJnthp70fw5cOuuGQM4BAnLNbSJ-Ty42ni-W-QsKzMRA966MTFrv5zp1brTesfnJZlbyKhcXGWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "EPFO Exams",
      },
    ];

    const menu = [
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC MTS",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC GD Constable",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC CHSL",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC CGL",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC JHT",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC JE CE",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC CPO",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC Stenographer",
      },
      {
        id: 1,
        url: "https://s3-alpha-sig.figma.com/img/0ce5/4988/6303a92c4b5922e095e85415dd968943?Expires=1695600000&Signature=gTSnogqNDwYTXd3Ba4UAkUHINqKjMcJew3nO49ESW0hA3InCPxniy3JHzfDDuOlalDdTae~QVG5kW2mTy2KCa26edmtmqhXIrRwZvEw6FhuXIgRPDTuncRR5tKGYo001tLwYcpyWkwJG0svqVXImlzK8re2BrWXPnTRCO6JFGxdhagJ-mZ93R-EA0q6zq1D0Jl4h5whFVKoGSEucc5Bd-Jy6V8nKsfbGwC8GYpoIznDPQ9iKbRO7oSFtTJDsHxrSFqpgrY1sFns0ByqVAQSxIW6lvFIpVDCd4LGYBcEnStjcLQyYVM2k6~sAhWlBzMITWeDSnsUoJAIFm-j8wzF4Wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        con: "SSC Selection Post",
      },
    ];

    const { selected, modalVisible, modalVisible1 } = this.state;
    const { anchorEl, ticky } = this.state;
    const { countdown } = this.state;
    const { close_snack_bar, snackbar } = this.props;
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
          cookiePolicy={"single_host_origin"}
        />
      );
    }

    return (
      <Grid>
        <AppBar position="fixed" style={{ backgroundColor: "white" }}>
          <Toolbar style={{ marginTop: "10px", height: "45px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                className="main-navbar-logo1"
                src={Eclipse}
                alt="Loading..."
              />
            </Link>

            <Paper
              component="form"
              style={{
                display: "flex",
                width: "280px",
                height: "37px",
                marginLeft: "15%",
                border: "1px solid rgba(142, 141, 151, 0.50)",
                backgroundColor: "none ",
              }}
            >
              <IconButton
                type="button"
                style={{
                  p: "150px",
                  whiteSpace: "nowrap",
                  color: "var(--nuetrals-nuetrals-n-300, #72717D)",
                }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
              <InputBase
                style={{
                  ml: 5,
                  flex: 1,
                  fontSize: "15px",
                  whiteSpace: "nowrap",
                  color: "var(--nuetrals-nuetrals-n-300, #72717D)",
                  fontFamily: "Poppins",
                }}
                placeholder="search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
            <Typography
              onMouseEnter={() => {
                this.setState({ examlist: true })
              }}
              // onMouseLeave={() => {
              //   if (this.state.examlist === true) {
              //     this.setState({ examlist: false })
              //   }
              // }}



              variant="text"
              style={{
                cursor: "pointer",
                color: "#72717D",
                display: ":flex",
                flexDirection: "row",
                whiteSpace: "nowrap",
                borderRight: "2px solid gray",
                height: "20px",
                width: "100px",
                marginLeft: "1%",
              }}
              className="button-index"
            >
              Exam List
              <KeyboardArrowDownIcon />
            </Typography>
            <Typography
              variant="text"
              onClick={() => {
                this.setState({
                  referandearn: true,
                });
              }}
              style={{
                color: "#72717D",
                borderRight: "2px solid gray",
                height: "20px",
                width: "110px",
                marginLeft: "5px",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              className="button-index"
            >
              Refer & Earn
            </Typography>

            <Typography
              onClick={() => {
                this.setState({
                  examysfirstmodal: true,
                });
              }}
              variant="text"
              style={{
                cursor: "pointer",
                color: "#72717D",
                width: "120px",
                whiteSpace: "nowrap",
                borderRight: "2px solid gray",
                height: "20px",
                width: "110px",
                marginLeft: "5px",
              }}
              className="button-index"
            >
              ExamysFirst
            </Typography>

            {/* <Link to="/coupon" style={{ textDecoration: "none", }}> */}
            <Typography
              variant="text"
              style={{
                cursor: "pointer",
                color: "#72717D",
                width: "70px",
                whiteSpace: "nowrap",
                borderRight: "2px solid gray",
                paddingRight: "5px",
                height: "20px",
                marginLeft: "5px",
              }}
              className="button-index"
              onClick={() => {
                this.props.navigate("/coupon");
              }}
            >
              Coupon
            </Typography>

            {/* </Link> */}

            <Typography
              onClick={() => {
                this.setState({
                  download: true,
                });
              }}
              variant="text"
              style={{
                color: "#72717D",
                width: "160px",
                whiteSpace: "nowrap",
                cursor: "pointer",
                marginLeft: "10px",
              }}
              className="button-index"
            >
              Download App
            </Typography>
          </Toolbar>

          <Toolbar style={{ height: "65px" }}>
            <Grid
              className="secod-nav-part"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: "15%",
                marginRight: "15%",
                width: "73%",
              }}
            >
              <Link
                to="/Coursedetails"
                style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: true,
                    studentSpecial: false,
                    testSeries: false,
                    testPro: false,
                    examys: false,
                    examysInspire: false,
                  });
                }}
              >
                <Grid
                //    onClick={}
                >
                  <center>
                    <img src={this.state.course ? Courseclr : Course} height={20} width={20} />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.course
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }
                  >
                    Courses
                  </Typography>
                </Grid>
              </Link>

              <Link to="/Testseries" style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: false,
                    studentSpecial: false,
                    testSeries: true,
                    testPro: false,
                    examys: false,
                    examysInspire: false,
                  });
                }}
              >
                <Grid style={{ marginLeft: "3%" }}>
                  <center>
                    <img src={this.state.testSeries ? Testclr : Test} height={20} width={20} />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.testSeries
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }

                  >
                    Test Series
                  </Typography>
                </Grid>
              </Link>

              <Link to="/studentspecial" style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: false,
                    studentSpecial: true,
                    testSeries: false,
                    testPro: false,
                    examys: false,
                    examysInspire: false,
                  });
                }}
              >
                <Grid className="second-tool-bar" style={{ marginLeft: "3%" }}>
                  <center>
                    <img src={this.state.studentSpecial ? Studentspecial : tick} height={20} width={20} />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.studentSpecial
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }
                  >
                    Student's Special
                  </Typography>
                </Grid>
              </Link>

              <Link to="/testpasspro" style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: false,
                    studentSpecial: false,
                    testSeries: false,
                    testPro: true,
                    examys: false,
                    examysInspire: false,
                  });
                }}
              >
                <Grid className="second-tool-bar" style={{ marginLeft: "3%" }}>
                  <center>
                    <img src={this.state.testPro ? TestPro : passpro} height={20} width={20} />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.testPro
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }
                  >
                    Test Pass Pro +
                  </Typography>
                </Grid>
              </Link>

              <Link to="/examysaiGpt" style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: false,
                    studentSpecial: false,
                    testSeries: false,
                    testPro: false,
                    examys: true,
                    examysInspire: false,
                  });
                }}
              >
                <Grid className="second-tool-bar" style={{ marginLeft: "3%" }}>
                  <center>
                    <img
                      src={this.state.examys ? Examyaigptclr : aigpt}
                      height={20}
                      width={20}
                      className="header-item"
                    />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.examys
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }
                  >
                    Examys ai GPT
                  </Typography>
                </Grid>
              </Link>

              <Link to="/Examysinspire" style={{ textDecoration: "none" }}
                onClick={() => {
                  this.setState({
                    course: false,
                    studentSpecial: false,
                    testSeries: false,
                    testPro: false,
                    examys: false,
                    examysInspire: true,
                  });
                }}
              >
                <Grid className="second-tool-bar" style={{ marginLeft: "3%" }}>
                  <center>
                    <img src={this.state.examysInspire ? Examyinspireclr : inspire} height={20} width={20} />
                  </center>
                  <Typography
                    className="header-item"
                    style={
                      this.state.examysInspire
                        ? {
                          fontSize: "14px",
                          color: "#6257CD",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                        : {
                          fontSize: "14px",
                          color: "#72717D",
                          fontFamily: "Poppins",
                          fontWeight: 400,
                          whiteSpace: "nowrap",
                        }
                    }
                  >
                    Examys Inspire
                  </Typography>
                </Grid>
              </Link>

              <Box
                className="login-eng"
                style={{ display: "flex", gap: "10px", marginLeft: "10%" }}
              >
                <Button
                  color="inherit"
                  className="langbtn"
                  variant="outlined"
                  id="resources-button"
                  size="medium "
                  // aria-controls={open ? "resources-menu" : undefined}
                  aria-haspopup="true"
                  // aria-expanded={open ? "true" : undefined}
                  startIcon={<TranslateIcon style={{ color: "#000" }} />}
                  style={{
                    borderColor: "#3E30C2",
                    whiteSpace: "nowrap",
                    width: "120px",
                    height: "40px",
                    borderRadius: 8,
                  }}
                >
                  <select
                    className="selectbutton"
                    style={{
                      width: "120px",
                      whiteSpace: "nowrap",
                      borderWidth: 0,
                      textTransform: "capitalize",
                      fontSize: 14,
                    }}
                  >
                    <option value="English">English</option>

                    <option value="Hindi">Hindi</option>
                  </select>
                </Button>
                <Button
                  onClick={() => this.setModalVisible(true)}
                  sx={{ ml: 1 }}
                  style={{
                    backgroundColor: "#3E30C2",
                    height: "40px",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: 12,
                    fontWeight: 400,
                    marginLeft: "1%",
                  }}
                >
                  Log in
                </Button>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>

        <Dialog
          open={modalVisible}
          onClose={!modalVisible}
        // className="modal2"
        // overlayClassName="Overlay"
        >
          <div
            className="modallogin"
            style={{ padding: "14px 142px 242px 142px" }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div style={{ marginTop: "50px" }}>
                <img src={ola} style={{ marginLeft: "75px" }} />
                <Typography
                  style={{
                    clear: "both",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: "bolder",
                    fontSize: 22,
                    marginLeft: "35px",
                    marginTop: "20px",
                  }}
                >
                  Get Started with Olanger!{" "}
                </Typography>
              </div>
              <IconButton
                style={{ height: 40, width: 40, marginLeft: 80 }}
                onClick={() => this.setModalVisible(!modalVisible)}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="cccc">
              <TextField
                id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{
                  width: "90%",
                  padding: "40px 20px 22px 12px",
                  marginLeft: "26px",
                }}
                placeholder="Please enter your mobile number or Email ID"
                onChange={(e) => {
                  this.setState({ login_id: e.target.value });
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={Mobile} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Button
                style={{
                  background: "#6C60E1",
                  width: "400px",
                  color: "#fff",
                  height: "40px",
                  fontWeight: "lighter",
                  marginLeft: "40px",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  this.props.phone_login(this.state.login_id);
                }}
              >
                Get OTP
              </Button>
              <TextField
                // id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{
                  width: "90%",
                  padding: "14px 14px 22px 12px",
                  marginLeft: "26px",
                }}
                placeholder="Please the enter the OTP"
                type="number"
                onChange={(e) => {
                  this.setState({ otp: e.target.value });
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img src={Otp} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Button
                style={{
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                  marginTop: "-20px",
                }}
                onClick={() => {
                  this.props.send_otp(this.state.login_id);
                }}
              >
                <Typography style={{ fontSize: 14, marginLeft: "36px" }}>
                  Resend OTP
                </Typography>
              </Button>
              <Button
                style={{
                  background: "#6C60E1",
                  width: "400px",
                  color: "#fff",
                  height: "40px",
                  fontWeight: "lighter",
                  marginLeft: "40px",
                  textTransform: "capitalize",
                  marginBottom: "10PX",
                }}
                onClick={() => {
                  this.props.verify_otp(this.state.login_id, this.state.otp);
                }}
              >
                Continue
              </Button>
            </div>

            {/* <div className="modal-button">
                            <Button onClick={() => this.setModalVisible(!modalVisible)} className="modal-button1 speaker_btn">close</Button>
                          </div> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30%",
              marginTop: "-5%",
              marginBottom: "10%",
            }}
          >
            <center style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                Don’t have an account?{" "}
              </Typography>
              <Button
                onClick={() => {
                  this.setModalVisible1(true);
                  this.setModalVisible(false);
                }}
                style={{
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                  marginTop: "-6px",
                }}
              >
                <Typography style={{ fontSize: 14, marginLeft: "10px" }}>
                  Sign Up
                </Typography>
              </Button>
            </center>
          </div>
        </Dialog>

        {/* //other dialouge */}
        <Dialog open={modalVisible1} onClose={!modalVisible1}>
          <div
            className="modallogin"
            style={{ padding: "14px 142px 242px 142px" }}
          >
            <div style={{ flexDirection: "row", display: "flex" }}>
              <div style={{ marginTop: "50px" }}>
                <img src={Logo} style={{ marginLeft: "75px" }} />
                <Typography
                  style={{
                    clear: "both",
                    display: "inline-block",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    fontWeight: "bolder",
                    fontSize: 22,
                    marginLeft: "35px",
                    marginTop: "20px",
                  }}
                >
                  Get Started with Olanger!{" "}
                </Typography>
              </div>
              <IconButton
                style={{ height: 40, width: 40, marginLeft: 100 }}
                onClick={() => this.setModalVisible1(!modalVisible1)}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="cccc">
              <TextField
                id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{ width: "90%", padding: "40px 20px 22px 12px" }}
                placeholder="Please enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img src={Person} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              // onChange={(e) => { this.setState({ student_name: e.target.value }) }}
              />
              <TextField
                id="input-with-icon-textfield"
                // label="TextField"
                size="small"
                style={{ width: "90%", padding: "10px 20px 22px 12px" }}
                placeholder="Please enter your mobile number or Email ID"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img src={Mobile} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                onChange={(e) => {
                  this.setState({ login_id: e.target.value });
                }}
              />
              <Button
                style={{
                  background: "#6C60E1",
                  width: "80%",
                  color: "#fff",
                  fontWeight: "lighter",
                  marginLeft: "40px",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  this.props.send_otp(this.state.login_id);
                }}
              >
                Get OTP
              </Button>
              <TextField
                size="small"
                style={{ width: "90%", padding: "14px 14px 22px 12px" }}
                placeholder="Please the enter the OTP"
                type="number"
                value={this.state.otp}
                onChange={(e) => {
                  this.setState({ otp: e.target.value });
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img src={Otp} height={24} width={24} />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  style={{
                    backgroundColor: "white",
                    textTransform: "capitalize",
                    textDecoration: "underline",
                    marginTop: "-20px",
                  }}
                  onClick={() => {
                    this.props.send_otp(this.state.login_id);
                  }}
                >
                  <Typography
                    style={{ fontSize: 14 }}
                    disabled={countdown !== 0}
                  >
                    Resend OTP
                  </Typography>
                </Button>
              </div>
              <Button
                style={{
                  background: "#6C60E1",
                  width: "80%",
                  color: "#fff",
                  fontWeight: "lighter",
                  marginLeft: "40px",
                  textTransform: "capitalize",
                  marginBottom: "4px",
                }}
                onClick={() => {
                  this.handleVerifyOTP(this.state.otp);
                  if (this.state.otpVerified) {
                    this.props.Createstudent(
                      this.state.student_name,
                      this.state.login_id
                    );
                  }
                }}
              >
                Continue
              </Button>
              <Typography style={{ fontSize: 14 }}>
                {this.state.otpVerified ? "Otp Verified" : ""}
              </Typography>
            </div>
          </div>
          <hr
            style={{
              height: "0px",
              width: "82%",
              border: "1px solid #888",
              marginLeft: "58px",
              marginTop: "-14px",
            }}
          ></hr>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "110px",
            }}
          >
            <Button
              style={{
                background: "#FBFFFF",
                width: "60%",
                color: "#fff",
                fontWeight: "lighter",
                marginLeft: "40px",
                textTransform: "capitalize",
                marginBottom: "10PX",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => this.props.googleLogin()}
            >
              <img src={Google} height={26} width={100} />
            </Button>
            <Button
              style={{
                background: "#3C5B9A",
                width: "60%",
                color: "#fff",
                fontWeight: "lighter",
                marginLeft: "40px",
                textTransform: "capitalize",
                marginBottom: "10PX",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
              onClick={() => this.props.facebookLogin()}
            >
              <img src={Facebook} height={26} width={100} />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30%",
              marginTop: "2%",
              marginBottom: "2%",
            }}
          >
            <center style={{ display: "flex", flexDirection: "row" }}>
              <Typography style={{ fontSize: 14 }}>
                Already have an account?{" "}
              </Typography>
              <Button
                onClick={() => {
                  this.setModalVisible1(false);
                  this.setModalVisible(true);
                }}
                style={{
                  backgroundColor: "white",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                  marginTop: "-6px",
                }}
              >
                <Typography style={{ fontSize: 14 }}>Log in </Typography>
              </Button>
            </center>
          </div>
        </Dialog>

        {/* .//eexamlist */}

        <Dialog
          // onMouseOver={()=>{
          //   this.setState({examlist:false})
          // }}
          onClose={()=>{
            this.setState({examlist:false})
          }}
          open={this.state.examlist}
          maxWidth="xl"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={
            {
              // backdropFilter: "blur(5px) sepia(5%)",
              // 👇 Another option to style Paper
              // "& .MuiDialog-paper": {
              //      borderRadius: "17.782px",
              // },
            }
          }
          style={{ marginTop: "-18%" }}
        >
          {/* <Grid style={{ minWidth: "1200px", }}>
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                                             <h4 style={{ marginLeft: "7%", marginTop: "5%" }}></h4>

                                             <CloseOutlinedIcon onClick={() => {
                                                  this.setState({ examlist: false })
                                             }} style={{ marginRight: "5%", marginTop: "4%", cursor: "pointer" }} />


                                        </div>




                                   </Grid> */}

          <Container sx={{ marginTop: "2%" }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid
                        spacing={2}
                        style={{
                          display: "block",
                          borderRadius: "4px",
                          maxHeight: "55vh",
                          overflowY: "scroll",
                          marginRight: "15px",
                        }}
                        item
                        xs={12}
                      >
                        {data.map((res) => (
                          <Grid
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box style={{ display: "flex" }}>
                              <Typography
                                mb={3}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  paddingLeft: "5px",
                                  paddingRight: "5px",
                                }}
                                key={res.id}
                              >
                                <img
                                  height={30}
                                  width={30}
                                  src={res.url}
                                  alt=""
                                />
                              </Typography>
                              <Typography
                                mb={3}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                key={res.id}
                              >
                                {res.con}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                mb={3}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  paddingLeft: "15px",
                                  paddingRight: "15px",
                                }}
                                key={res.id}
                              >
                                <NavigateNextIcon />
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={9}>
                  <Box sx={{ flexGrow: 1 }}>
                    <a
                      href="Examdetailnotification"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <Grid
                        container
                        spacing={2}
                        style={{
                          backgroundColor: "#F6F5FF",
                          paddingRight: "14px",
                          paddingBottom: "15px",
                        }}
                      >
                        {menu.map((res) => (
                          <Grid
                            item
                            xs={4}
                            style={{ marginBottom: "2%", gap: "7px" }}
                          >
                            <Grid
                              style={{
                                backgroundColor: "#FFFFFF",
                                borderRadius: "4px",
                                display: "flex",
                                flexShrink: "0",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                style={{ display: "flex", paddingLeft: "12px" }}
                              >
                                <Typography>
                                  <img
                                    height={30}
                                    width={30}
                                    src={res.url}
                                    alt=""
                                  />
                                </Typography>
                                <Typography
                                  style={{
                                    marginLeft: "12px",
                                    fontSize: "14px",
                                    whiteSpace: "nowrap",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                  key={res.id}
                                >
                                  {res.con}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  style={{
                                    paddingRight: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                  }}
                                  key={res.id}
                                >
                                  <NavigateNextIcon />
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Dialog>

        <Dialog
          open={this.state.examysfirstmodal}
          maxWidth="xl"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            // backdropFilter: "blur(5px) sepia(5%)",
            // 👇 Another option to style Paper
            "& .MuiDialog-paper": {
              borderRadius: "17.782px",
            },
          }}
        >
          <Grid style={{ minWidth: "900px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ marginLeft: "7%", marginTop: "5%" }}></h4>

              <CloseOutlinedIcon
                onClick={() => {
                  this.setState({ examysfirstmodal: false });
                }}
                style={{
                  marginRight: "5%",
                  marginTop: "4%",
                  cursor: "pointer",
                }}
              />
            </div>

            <Grid className="examysfirst-main">
              <Grid className="examysfirst-container">
                <Grid className="examys-home-image">
                  <img src={examyshomeimage} alt="examyshomeimage" />
                </Grid>
                <Grid style={{ marginTop: "50px" }}>
                  <Typography style={{}} className="examysfirst-heading1">
                    Get{" "}
                    <strong style={{ color: "#6257CD" }}>
                      examys first membership{" "}
                    </strong>
                    @ 49 with exclusive benifits
                  </Typography>
                </Grid>

                <Grid className="examysfirst-middle-content">
                  <Typography
                    className="examysfirst-heading"
                    style={{ marginTop: "20px", marginLeft: "20px" }}
                  >
                    What you get?
                  </Typography>

                  {/* <Grid className="examysfirst--mid-cont">
                            <Grid><Typography className="examysfiirst-icon"><Brightness1SharpIcon /></Typography></Grid>

                            <Grid>
                                <Typography>
                                    20% off on course for 3 years
                                </Typography>
                                <Typography>
                                    10% off on test series for 3 years
                                </Typography>
                            </Grid>
                        </Grid> */}
                  <Grid
                    className="mid-secr"
                    style={{ marginTop: "20px", lineHeight: 2 }}
                  >
                    <Grid>
                      <Typography className="examysfiirst-icon">
                        <Brightness1SharpIcon
                          style={{ fontSize: "15px", marginRight: "6px" }}
                        />
                      </Typography>
                    </Grid>

                    <Grid>
                      <Typography>20% off on course for 3 years</Typography>
                      <Typography>
                        10% off on test series for 3 years
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid>
                  <Typography
                    style={{ marginLeft: "10px", fontFamily: "Poppins" }}
                    className="examysfirst-heading"
                  >
                    Note:
                  </Typography>
                  <Typography style={{ marginLeft: "10px" }}>
                    To be eligible for examysfirst,at first, one has buy a
                    course or test pass. Then pay &#8377;49 more for membership.
                  </Typography>
                </Grid>
                <center>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "30px",
                      width: "354px",
                      height: "52px",
                    }}
                    className="examysfirst-btn"
                  >
                    Join examys first @&#8377;49
                  </Button>
                </center>

                <Grid className="examysfirst-or">
                  <center>
                    <Typography className="examysfirst-orr">OR</Typography>
                  </center>
                </Grid>

                <Typography
                  class="examysfirst--2"
                  style={{ color: "#4A4958", marginLeft: "26%" }}
                >
                  You can get examys first for free by referring <br />
                  to your friends.
                </Typography>

                <Typography
                  className="examysfirst--3"
                  style={{
                    marginLeft: "26%",
                    alignSelf: "center",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <Typography> Refer & get instant benifits and </Typography>
                  {/* <Button variant="contained"
                                                                 size='small'
                                                                 sx={{ width: '50px' }}
                                                                 className="examysfirst-super-btn">free</Button> */}
                  <Typography>
                    Be an examys first with exclusive benifits
                  </Typography>
                </Typography>

                {/* <sup className="examysfirst-super-btn">free</sup> */}

                <Grid style={{ padding: "3%" }}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Dialog>

        {/* referandearn */}

        <Dialog
          open={this.state.referandearn}
          maxWidth="xl"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={
            {
              // backdropFilter: "blur(5px) sepia(5%)",
              // 👇 Another option to style Paper
              // "& .MuiDialog-paper": {
              //      borderRadius: "17.782px",
              // },
            }
          }
        >
          <Grid style={{ minWidth: "1300px", overflowY: "hidden" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ marginLeft: "7%", marginTop: "5%" }}></h4>

              <CloseOutlinedIcon
                onClick={() => {
                  this.setState({ referandearn: false });
                }}
                style={{
                  marginRight: "5%",
                  marginTop: "1%",
                  cursor: "pointer",
                }}
              />
            </div>
            <Box
              sx={{
                display: "grid",
                gridAutoFlow: "column",
                // padding: " 40px 88px",
                alignitems: "center",
                gap: "32px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "32px",
                }}
              >
                <ImageListItem
                  sx={{
                    width: "400px",
                    height: "292.74px",
                    borderRadius: "10px",
                  }}
                >
                  <img src={nomatch} srcSet={``} alt="img" loading="lazy" />
                </ImageListItem>
                <Typography
                  style={{
                    fontSize: 16,
                    fontWeight: 400,
                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  You have no referral code. To avail, you have to purchase any
                  product.
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    display: "flex",
                    padding: "16px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "500px",
                    height: "32px",
                    gap: "16px",
                    borderRadius: "8px 8px 0px 0px",
                    background: "#FFF",
                    boxShadow: "0px -4px 4px 0px rgba(0, 0, 0, 0.25)",
                  }}
                  spacing={2}
                >
                  <Button
                    sx={{
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#3E30C2",
                      },
                      textTransform: "none",
                      display: "flex",
                      gap: "10px",
                      color: "white",
                      textAlign: "center",
                      borderRadius: "4px",
                      background: "#3E30C2",
                      boxShadow: "0px -4px 8px 0px rgba(0, 0, 0, 0.25)",
                      height: "34px",
                      width: "200px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="24px"
                      height="24px"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#fff"
                        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                      ></path>
                      <path
                        fill="#fff"
                        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                      ></path>
                      <path
                        fill="#cfd8dc"
                        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                      ></path>
                      <path
                        fill="#40c351"
                        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                      ></path>
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Refer by whatsapp
                  </Button>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "white",
                      display: "flex",
                      textAlign: "center",
                      gap: "10px",
                      borderRadius: "4px",
                      "&:hover": {
                        //you want this to be the same as the backgroundColor above
                        backgroundColor: "#3E30C2",
                      },
                      textTransform: "lowercase",
                      background: "#3E30C2",
                      boxShadow: "0px -4px 8px 0px rgba(0, 0, 0, 0.25)",
                      height: "34px",
                      width: "200px",
                      fontFamily: "Poppins",
                      fontSize: "14px",
                    }}
                  >
                    {" "}
                    <i>
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="0.643555"
                          width="24"
                          height="24"
                          rx="12"
                          fill="#141226"
                        />
                        <path
                          d="M16.5 9.64355C17.7426 9.64355 18.75 8.6362 18.75 7.39355C18.75 6.15091 17.7426 5.14355 16.5 5.14355C15.2574 5.14355 14.25 6.15091 14.25 7.39355C14.25 8.6362 15.2574 9.64355 16.5 9.64355Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.5 14.8936C8.74264 14.8936 9.75 13.8862 9.75 12.6436C9.75 11.4009 8.74264 10.3936 7.5 10.3936C6.25736 10.3936 5.25 11.4009 5.25 12.6436C5.25 13.8862 6.25736 14.8936 7.5 14.8936Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 20.1436C17.7426 20.1436 18.75 19.1362 18.75 17.8936C18.75 16.6509 17.7426 15.6436 16.5 15.6436C15.2574 15.6436 14.25 16.6509 14.25 17.8936C14.25 19.1362 15.2574 20.1436 16.5 20.1436Z"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.44141 13.7754L14.5639 16.7604M14.5564 8.52539L9.44141 11.5104"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </i>{" "}
                    Share Referral Code
                  </Button>
                </Stack>
              </Box>

              <Box>
                <Stack spacing={2}>
                  <Typography
                    sx={{
                      width: "648px",

                      color: "#141226",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "22px",
                      marginTop: "5px",
                    }}
                  >
                    Refer & get instant benefits and be an examys first with
                    exclusive benefits
                  </Typography>
                  <Typography
                    sx={{
                      width: "608px",
                      color: "#141226",
                      fontFamily: "Poppins",
                      fontSize: "16px",
                      fontStyle: "normal",
                      fontWeight: "600",
                      lineHeight: "22px",
                    }}
                  >
                    How it works?
                  </Typography>
                </Stack>

                <Box sx={{ maxWidth: 600 }}>
                  <Stepper
                    connector={
                      <StepConnector
                        style={{
                          display: "none",
                        }}
                      />
                    }
                    orientation="vertical"
                  >
                    <Step>
                      <span
                        style={{
                          content: "",

                          position: "absolute",
                          borderRight: "3px dotted rgb(13, 122, 91)",
                          width: "16.5px",
                          top: " 12.5em",
                          height: "22.5em",
                        }}
                      ></span>
                      <StepLabel
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        icon={
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              fill="#EAFFFB"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M12 12C10.8954 12 10 12.8954 10 14V22C10 23.1046 10.8954 24 12 24H24C25.1046 24 26 23.1046 26 22V16C26 14.8954 25.1046 14 24 14H19L17 12H12ZM19 17C19 16.4477 18.5523 16 18 16C17.4477 16 17 16.4477 17 17V18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H17V21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21V20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H19V17Z"
                              fill="#0D7A5B"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              stroke="#97F8E4"
                            />
                          </svg>
                        }
                        key="1"
                      >
                        <Typography
                          sx={{
                            color: "#141226",

                            /* Body/B2 - Med */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                          }}
                        >
                          Buy any product on examys
                        </Typography>
                        <Typography
                          sx={{
                            color: " #4A4958",

                            /* Body/B2 - Reg */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "21px" /* 150% */,
                          }}
                        >
                          After purchasing, referral code will be available to
                          you.
                        </Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        icon={
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              fill="#EAFFFB"
                            />
                            <path
                              d="M23 16C24.6569 16 26 14.6569 26 13C26 11.3431 24.6569 10 23 10C21.3431 10 20 11.3431 20 13C20 13.1255 20.0077 13.2492 20.0227 13.3706L15.0826 15.8406C14.543 15.3201 13.8089 15 13 15C11.3431 15 10 16.3431 10 18C10 19.6569 11.3431 21 13 21C13.8089 21 14.5431 20.6798 15.0826 20.1593L20.0227 22.6293C20.0077 22.7508 20 22.8745 20 23C20 24.6569 21.3431 26 23 26C24.6569 26 26 24.6569 26 23C26 21.3431 24.6569 20 23 20C22.1911 20 21.457 20.3201 20.9174 20.8406L15.9773 18.3706C15.9923 18.2492 16 18.1255 16 18C16 17.8745 15.9923 17.7508 15.9773 17.6293L20.9174 15.1593C21.4569 15.6798 22.1911 16 23 16Z"
                              fill="#0D7A5B"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              stroke="#97F8E4"
                            />
                          </svg>
                        }
                        key="1"
                      >
                        <Typography
                          sx={{
                            color: "#141226",

                            /* Body/B2 - Med */
                            fontFamily: "Poppins",
                            fontSize: "16px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                          }}
                        >
                          Invite friends
                        </Typography>
                        <Typography
                          sx={{
                            color: " #4A4958",

                            /* Body/B2 - Reg */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "21px",
                          }}
                        >
                          Share the referral code with your friends.
                        </Typography>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        icon={
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              fill="#EAFFFB"
                            />
                            <path
                              d="M21 14C21 15.6569 19.6569 17 18 17C16.3431 17 15 15.6569 15 14C15 12.3431 16.3431 11 18 11C19.6569 11 21 12.3431 21 14Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M26 16C26 17.1046 25.1046 18 24 18C22.8954 18 22 17.1046 22 16C22 14.8954 22.8954 14 24 14C25.1046 14 26 14.8954 26 16Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M22 23C22 20.7909 20.2091 19 18 19C15.7909 19 14 20.7909 14 23V26H22V23Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14C13.1046 14 14 14.8954 14 16Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M24 26V23C24 21.9459 23.7282 20.9552 23.2507 20.0943C23.4902 20.0327 23.7413 20 24 20C25.6569 20 27 21.3431 27 23V26H24Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M12.7493 20.0943C12.2718 20.9552 12 21.9459 12 23V26H9V23C9 21.3431 10.3431 20 12 20C12.2587 20 12.5098 20.0327 12.7493 20.0943Z"
                              fill="#0D7A5B"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              stroke="#97F8E4"
                            />
                          </svg>
                        }
                        key="1"
                      >
                        <Typography
                          sx={{
                            color: "#141226",

                            /* Body/B2 - Med */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                          }}
                        >
                          What your friends get?
                        </Typography>
                        <Typography
                          sx={{
                            color: " #4A4958",

                            /* Body/B2 - Reg */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "21px",
                          }}
                        >
                          Discount of ₹200 on course and ₹50 on Test Pass
                          instantly.
                        </Typography>
                      </StepLabel>
                    </Step>

                    <Step>
                      <StepLabel
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        icon={
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              fill="#EAFFFB"
                            />
                            <path
                              d="M18 17C19.6569 17 21 15.6569 21 14C21 12.3431 19.6569 11 18 11C16.3431 11 15 12.3431 15 14C15 15.6569 16.3431 17 18 17Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M11 26C11 22.134 14.134 19 18 19C21.866 19 25 22.134 25 26H11Z"
                              fill="#0D7A5B"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="35"
                              height="35"
                              rx="17.5"
                              stroke="#97F8E4"
                            />
                          </svg>
                        }
                        key="1"
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "flex-start",
                            padding: "8px",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "8px",
                            alignSelf: "stretch",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#141226",

                              /* Body/B2 - Med */
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "normal",
                            }}
                          >
                            What you get?
                          </Typography>
                          <Typography
                            sx={{
                              color: " #4A4958",

                              /* Body/B2 - Reg */
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "21px",
                            }}
                          >
                            When one of your friends buys any product using your
                            referral code:-
                          </Typography>
                          <Typography
                            sx={{
                              color: " #4A4958",

                              /* Body/B2 - Reg */
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "21px",
                            }}
                          >
                            <span
                              style={{
                                color: " #6257CD",
                                /* Body/B2 - Med */
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                fontSize: "16px",
                              }}
                            >
                              1st benefit:
                            </span>
                            If you have purchased the course, then you will get
                            test pass pro + for 6 months.
                          </Typography>
                          <Typography
                            sx={{
                              color: " #4A4958",

                              /* Body/B2 - Reg */
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "21px",
                            }}
                          >
                            If you have purchased the Test pass pro +, then you
                            will get access to examys ai for a particular course
                            of your choice for 6 months.
                          </Typography>
                          <Typography
                            sx={{
                              color: " #4A4958",

                              /* Body/B2 - Reg */
                              fontFamily: "Poppins",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: "400",
                              lineHeight: "21px" /* 150% */,
                            }}
                          >
                            <span
                              style={{
                                color: " #6257CD",
                                /* Body/B2 - Med */
                                fontFamily: "Poppins",
                                fontWeight: 500,
                                fontSize: "16px",
                              }}
                            >
                              2nd benefit:
                            </span>{" "}
                            You will be a member of examysFirst.
                          </Typography>
                          <Typography
                            sx={{
                              color: " #4A4958",

                              /* Body/B2 - Reg */
                              fontFamily: "Poppins",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "500",
                              lineHeight: "21px",
                            }}
                          >
                            Get 20% off on course and 10% off on test series for
                            3 years.
                          </Typography>
                        </Box>
                      </StepLabel>
                    </Step>
                    <Step>
                      <StepLabel
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                        icon={
                          <svg
                            width="36"
                            height="37"
                            viewBox="0 0 36 37"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.545898"
                              width="35"
                              height="35"
                              rx="17.5"
                              fill="#EAFFFB"
                            />
                            <path
                              d="M11 20.0459V23.0459C11 24.7028 14.134 26.0459 18 26.0459C21.866 26.0459 25 24.7028 25 23.0459V20.0459C25 21.7028 21.866 23.0459 18 23.0459C14.134 23.0459 11 21.7028 11 20.0459Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M11 15.0459V18.0459C11 19.7028 14.134 21.0459 18 21.0459C21.866 21.0459 25 19.7028 25 18.0459V15.0459C25 16.7028 21.866 18.0459 18 18.0459C14.134 18.0459 11 16.7028 11 15.0459Z"
                              fill="#0D7A5B"
                            />
                            <path
                              d="M25 13.0459C25 14.7028 21.866 16.0459 18 16.0459C14.134 16.0459 11 14.7028 11 13.0459C11 11.389 14.134 10.0459 18 10.0459C21.866 10.0459 25 11.389 25 13.0459Z"
                              fill="#0D7A5B"
                            />
                            <rect
                              x="0.5"
                              y="0.545898"
                              width="35"
                              height="35"
                              rx="17.5"
                              stroke="#97F8E4"
                            />
                          </svg>
                        }
                        key="1"
                      >
                        <Typography
                          sx={{
                            color: "#141226",

                            /* Body/B2 - Med */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                          }}
                        >
                          Refer more and get cashback instantly.
                        </Typography>
                        <Typography
                          sx={{
                            color: " #4A4958",

                            /* Body/B2 - Reg */
                            fontFamily: "Poppins",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "500",
                            lineHeight: "21px",
                          }}
                        >
                          Keep referring as many friends as you can and get
                          cashback of up to 10% for every purchase made by your
                          friends.
                        </Typography>
                      </StepLabel>
                    </Step>
                  </Stepper>
                </Box>
              </Box>
            </Box>

            <Grid  style={{ padding: "3%" }}></Grid>
          </Grid>
        </Dialog>

        {/* download dialog */}

        <Dialog
          open={this.state.download}
          maxWidth="xl"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
         
            left: "670px",
            top: "-120px",
            overflowX: "hidden",
            overflowY: "hidden",
          }}
        >
        <Grid style={{ margin:'3px'}} textAlign={"right"}>
        <CloseIcon className="closed"   onClick={() => {
          this.setState({
            download: false,
          });
        }} />
        </Grid>
          <Grid style={{ overflowX: "hidden",overflowY:"hidden" }}>
            <Box sx={{ height: "340px", width: "260px", paddingTop: "5%" }}>
              <Grid
                style={{
                  borderBottom: "3px solid purple",
                  paddingBottom: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  margin: "10px 26px",
                }}
              >
                <Typography style={{ color: "purple" }}>
                  <PhoneAndroidIcon />
                </Typography>
                <Typography style={{ color: "purple", fontSize: "20px" }}>
                  DownLoad App
                </Typography>
              </Grid>
              <Grid style={{ padding: "28px" }}>
                <Typography
                  style={{
                    fontSize: "21px",
                    padding: "6px 10px",
                    marginBottom: "13px",
                  }}
                  align="start"
                >
                  Download From
                </Typography>
                  <img style={{height:'59px', marginLeft:'3px'}} src={Playstoreimg}/>
                  <img style={{width:'199px', height:'57px', marginLeft:'4px', marginTop:'10px'}} src={Appstore}/>
              </Grid>
            </Box>
          </Grid>
        </Dialog>
      </Grid>
    );
  }
}

export default withRouter(MuiNavbar);
