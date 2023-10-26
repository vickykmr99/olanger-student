/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Controller from "../containers/controller_cont";
import Login from "../../auth/container/loginCont";
import SignUp from "../../auth/container/signupCont";
import Drawer_option_con from "../containers/drawer_cont";
import Landing from "../../pages/static/index";
import Navbar from "../../common/navbar/indexCont";
import Footer from "../../common/footer/index";
import PDF from "../../pages/static/CourseAdvantages/Component/PDF";
import SuperAdminLogin from "../../auth/container/superadminCont";
import Learningtoday from "../../common/footer/learning today";
import Coursedetails from "../../pages/static/Coursedetails/Container/coursedetailsCont";
import CombinedPackage from "../../pages/static/Coursedetails/Container/CombinepackageCont";
import Pdfhome from "../../pages/static/PriviousYearPdf/Component/pdfhome";
// import Focuspackhome from "../../pages/static/CourseAdvantages/Component/focuspackhome";
import Pdfdetails from "../../pages/static/PriviousYearPdf/Component/pdfdetails";
import Testseries from "../../pages/static/Testseries/Container/testseriesConst";
import Testseriesviewdetails from "../../pages/static/Testseries/Container/TestseriesviewdetailsCont";
import Focuspackage from "../../pages/static/Coursedetails/Component/focuspackage";
import Testsectionss from "../../pages/Instruction/Components/Testsection2";
import Faq from "../../pages/static/Coursedetails/Component/Faq";
import Indepthcourse from "../../pages/static/Coursedetails/Component/indeptcourse"
import Testseriescourse from "../../pages/static/Coursedetails/Component/testseriescourse";
import Prevyr from "../../pages/static/Coursedetails/Component/prevyr";
import Exams from "../../pages/static/Exams/exams";
import TrendQuestion from "../../pages/static/Coursedetails/Component/trendQuestion";
import Error from "../../404";
import Aboutus from "../../pages/static/Aboutus/Component/aboutus";
import Learningpath from "../../pages/static/CourseAdvantages/Component/learningpath";
import Vdo from "../../pages/static/coursevdo/vdo";
import Signuppdf from "../../pages/static/PYQP/signuppdf";
import Buynowpage from "../../pages/static/payment/buynowpage";
import Signuphome from "../../pages/static/CourseAdvantages/Component/signuphome";
import Paymentlastpage from "../../pages/static/payment/paymentlastpage";
// import Studentspecial from "../../pages/static/Student/Components/studentspecial";
import CourseViewDetails from "../../pages/static/Coursedetails/Container/CourseviewDetailsCont";
import Studentspecial from "../../pages/static/Student/Container/studentSpecialCont";
// import CourseViewDetails from "../../pages/static/Coursedetails/Component/CourseviewDetail";
// ------------------------TeamCourse page import --------------------
// import TeamCourse from "../../pages/static/Coursedetails/Component/TeamCourse"
import Viewdetails from "../../pages/static/Coursedetails/Container/viewdetailsCont";
import Coupon from "../../pages/static/Coupon/Components/coupon";
import Downloadapp from "../../pages/static/Downloadapp/downloadapp";




import Examysfirst from "../../pages/static/Coupon/Components/Examysfirst";
import Testpasspro from "../../pages/Testpasspro/Components/Testpasspro";
import ExamysaiGpt from "../../pages/ExamysaiGpt/Container/ExamysaiGPTCont";
import ExamysaiGptdetailspage from "../../pages/ExamysaiGpt/Container/ExamysaiGptdetailspageCont";
import Abnav from "../../pages/ExamysaiGpt/Components/Abnav";
import Examysinspire from "../../pages/Examysinspire/Components/Examysinspire";
import Examdetailnotification from "../../pages/Examysinspire/Components/Examdetailnotification";
import Examysinspiresecond from "../../pages/Examysinspire/Components/Examysinspiresecond";
import Instruction from "../../pages/Instruction/Container/instructionCount";
import Instructionpage2 from "../../pages/Instruction/Container/instructionCount2";
import Submitsection from "../../pages/Instruction/Components/submitsection"
import Testsection from "../../pages/Instruction/Container/testSectionCount";
// import Testseries1 from "../../pages/static/Testseries/testseries1";
import Testseriesyoulike from "../../pages/static/CourseAdvantages/Component/testseriesyoulike";
import NavbarTest from "../../pages/Instruction/Components/reattemtnavbar";
import Questionpaper from "../../pages/Instruction/Components/questionpaper";
import SubjectTestseries from "../../pages/static/Testseries/Component/Subjectseriestest";
import Unlocktestseries from "../../pages/static/CourseAdvantages/Component/unlocktestseries";
import  Foundation  from "../../pages/static/Coursedetails/Container/foundationCont";
import { Download } from "@mui/icons-material";
// import Examysinspiresecond from "../../pages/Examysinspire/Components/Examysinspiresecond";
import Homenav from "../../common/navbar/homenav.js"
import Coursejourney from "../../pages/static/Coursedetails/Component/Coursejourney";
// import TeamCourse from "../../pages/static/Coursedetails/Component/TeamCourse";
import Sectional from "../../pages/Instruction/Components/sectional";
// 
import Testsection2 from "../../pages/Instruction/Components/Testsection2";
import Testseriesnav from "../../pages/Instruction/Components/Testseriesnav";
import AnalyticsNav from "../../pages/Instruction/Components/analyticsnav";



class Routers extends Component {
  render() {
    const { common, login, classes, onLogout } = this.props;
    let body;

    if (common.isHome) {
      body = (
        <div>
          <main
            style={{
              // flexGrow: 1,
              // flex:1
              // marginTop:3
            }}
          >
            <Controller />
            <Routes>
              <Route exact path="/" element={<div><Navbar /><Landing /></div>} />
              {/* <Route path="/" element={<Controller />} /> */}
              <Route exact path="/Testsection2" element={<div><Testsection2 /></div>} />

              <Route exact path="/login" element={<div><Navbar /><Login /><Footer /></div>} />
              <Route exact path="/adminlogin" element={<div><Navbar /><SignUp /><Footer /></div>} />
              <Route exact path="/superadminlogin" element={<div><Navbar /><SuperAdminLogin /><Footer /></div>} />
              <Route exact path="/Coursedetails" element={<div><Navbar /> <Coursedetails /><Footer /></div>} />
              <Route exact path="/Faq" element={<div><Navbar /> <Faq /></div>} />
              <Route exact path="/Coursejourney" element={<div><Navbar /><Coursejourney/></div>} />
              {/* <Route exact path="/Teamcourse" element={<div><Navbar /><Teamcourse/></div>} /> */}
              

              <Route exact path="/foundation" element={<div><Navbar /> <Foundation /><Footer /></div>} />
              <Route exact path="/viewdetails" element={<div><Navbar /><Viewdetails/> </div>} />
              <Route exact path="/CombinePackage" element={<div><Navbar /><Viewdetails/>< CombinedPackage /></div>} />
              <Route exact path="/CourseviewDetail" element={<div><Navbar /><CourseViewDetails/></div>} />
              <Route exact path="/viewdetails" element={<div><Navbar /><Viewdetails/></div>} />
              <Route exact path="/viewdetails" element={<div><Navbar /><Viewdetails /> </div>} />
              <Route exact path="/CombinePackage" element={<div><Navbar /><Viewdetails />< CombinedPackage /></div>} />
              <Route exact path="/CourseviewDetail" element={<div><Navbar /><CourseViewDetails /></div>} />
              <Route exact path="/viewdetails" element={<div><Navbar /><Viewdetails /></div>} />
              <Route exact path="/CombinePackage" element={<div><Navbar />< CombinedPackage /></div>} />
              <Route exact path="/about" element={<div><Navbar /><Aboutus /><Footer /> </div>} />
              {/* <Route exact path="/focuspackhome" element={<div><Navbar /><Focuspackhome />< Learningtoday /><Footer /> </div>} /> */}
              <Route exact path="/Pdfhome" element={<div><Navbar /><Pdfhome />< Learningtoday /><Footer /> </div>} />
              <Route exact path="/Pdfdetails" element={<div><Navbar /><Pdfdetails />< Learningtoday /><Footer /> </div>} />
              <Route exact path="/Testseries" element={<div><Navbar /><Testseries /> < Learningtoday /><Footer /></div>} />
              <Route exact path="/Testseriesviewdetails" element={<div><Navbar /><Testseriesviewdetails />< Learningtoday /><Footer /> </div>} />
              <Route exact path="/focuspackage" element={<div><Navbar /><Focuspackage /> </div>} />
              <Route exact path="/Subjectseriestest" element={<div><Navbar /><SubjectTestseries/>< Learningtoday /><Footer /> </div>} />
              <Route exact path="/indepthcourse" element={<div><Navbar /><Indepthcourse /> </div>} />
              <Route exact path="/testseriescourse" element={<div><Navbar /><Testseriescourse /> </div>} />
              <Route exact path="/trendQuestion" element={<div><Navbar /><TrendQuestion /> </div>} />
              <Route exact path="/prevyr" element={<div><Navbar /><Prevyr /> </div>} />
              <Route exact path="/signuppdf" element={<div><Navbar /><Signuppdf /> </div>} />
              <Route exact path="/vdo" element={<div><Navbar /><Vdo /> </div>} />
              <Route exact path="/buynowpage" element={<div><Buynowpage /> </div>} />
              <Route exact path="/signuphome" element={<div><Navbar /><Signuphome /><Learningtoday /> <Footer /> </div>} />
              <Route exact path="/studentspecial" element={<div><Navbar /><Studentspecial />< Learningtoday /><Footer /></div>} />
              <Route exact path="/coupon" element={<div><Navbar /><Coupon /></div>} />
              <Route exact path="/Examysfirst" element={<div><Examysfirst /></div>} />
            {/* <Route exact path="/coupon" element={<div><Navbar /><Coupon /></div>} /> */}
            <Route exact path="/downloadapp" element={<div><Navbar />< downloadapp/></div>} />
            <Route exact path="/testsection" element={<div><NavbarTest /><Testsection /></div>} />
            <Route exact path="/reattemptnavbar" element={<div><NavbarTest /></div>} />
            <Route exact path="/questionpaper" element={<div><NavbarTest /><Questionpaper /></div>} />
            <Route exact path="/unlocktestseries" element={<div><Unlocktestseries /></div>} />
            <Route exact path="/instruction" element={<div><Instruction /></div>} />
            <Route exact path="/instructionpage2" element={<div><Instructionpage2 /></div>} />
            <Route exact path="/submitsection" element={<div><Submitsection /></div>} />
            <Route exact path="/testsection" element={<div><Testsection /></div>} />
            <Route exact path="/testseries" element={<div><Testseries /></div>} />
            <Route exact path="/testseriesyoulike" element={<div><Testseriesyoulike /></div>} />
            <Route exact path="/paymentlastpage" element={<div><Paymentlastpage /> </div>} />
            <Route exact path="/testpasspro" element={<div><Navbar /> <Testpasspro />< Learningtoday/><Footer /></div>} />
            {/* <Route exact path="/testpasspro" element={<div><Navbar /> <Testpasspro /><Footer /></div>} /> */}
            <Route exact path="/examysaiGpt" element={<div><Navbar /> <ExamysaiGpt />< Learningtoday/><Footer /></div>} />
            <Route exact path="/examysaiGptdetailspage" element={<div><Navbar /> <ExamysaiGptdetailspage />< Learningtoday/><Footer /></div>} />
            <Route exact path="/Abnav" element={<div> <Abnav /></div>} />
            <Route exact path="/Examysinspire" element={<div><Navbar />  <Examysinspire />< Learningtoday/><Footer /></div>} />
            <Route exact path="/Examysinspiresecond" element={<div><Navbar /><Examysinspiresecond />< Learningtoday/><Footer /></div>} />
            <Route exact path="/Examdetailnotification" element={<div><Navbar /><Examdetailnotification /><Footer /></div>} /> 
            <Route exact path="/ExamysaiGptdetailspage" element={<div><Navbar /> <ExamysaiGptdetailspage />< Learningtoday/><Footer /></div>} />
            <Route exact path="/Homenav" element={<div> <Homenav/></div>} />
              {/* <Route exact path="/coupon" element={<div><Navbar /><Coupon /></div>} /> */}
              <Route exact path="/downloadapp" element={<div><Navbar />< downloadapp /></div>} />
              <Route exact path="/testsection" element={<div><NavbarTest /><Testsection /></div>} />
              <Route exact path="/reattemptnavbar" element={<div><NavbarTest /></div>} />
              <Route exact path="/questionpaper" element={<div><NavbarTest /><Questionpaper /></div>} />
              <Route exact path="/unlocktestseries" element={<div><Unlocktestseries /></div>} />
              <Route exact path="/instruction" element={<div><Instruction /></div>} />
              <Route exact path="/instructionpage2" element={<div><Instructionpage2 /></div>} />
              <Route exact path="/submitsection" element={<div><Submitsection /></div>} />
              <Route exact path="/testsection" element={<div><Testsection /></div>} />
              <Route exact path="/testseries" element={<div><Testseries /></div>} />
              <Route exact path="/testseriesyoulike" element={<div><Testseriesyoulike /></div>} />
              {/* <Route exact path="/paymentlastpage" element={<div><Paymentlastpage /> </div>} /> */}
              <Route exact path="/paymentlastpage" element={<div><Paymentlastpage /> </div>} />
              <Route exact path="/Testsection2" element={<div><Testsectionss /> </div>} />
              {/* <Route exact path="/TeamCourse" element={<div><TeamCourse /> </div>} /> */}
              <Route exact path="/sectional" element={<div><Sectional /> </div>} />


              


              <Route exact path="/testpasspro" element={<div><Navbar /> <Testpasspro />< Learningtoday /><Footer /></div>} />
              {/* <Route exact path="/testpasspro" element={<div><Navbar /> <Testpasspro /><Footer /></div>} /> */}
              <Route exact path="/examysaiGpt" element={<div><Navbar /> <ExamysaiGpt />< Learningtoday /><Footer /></div>} />
              <Route exact path="/examysaiGptdetailspage" element={<div><Navbar /> <ExamysaiGptdetailspage />< Learningtoday /><Footer /></div>} />
              <Route exact path="/Abnav" element={<div> <Abnav /></div>} />
              <Route exact path="/Examysinspire" element={<div><Navbar />  <Examysinspire />< Learningtoday /><Footer /></div>} />
              <Route exact path="/Examysinspiresecond" element={<div><Navbar /><Examysinspiresecond />< Learningtoday /><Footer /></div>} />
              <Route exact path="/Examdetailnotification" element={<div><Navbar /><Examdetailnotification /><Footer /></div>} />
              <Route exact path="/ExamysaiGptdetailspage" element={<div><Navbar /> <ExamysaiGptdetailspage />< Learningtoday /><Footer /></div>} />
              <Route exact path="/Homenav" element={<div> <Homenav /></div>} />
              <Route exact path="*" element={<Error />} /> 
               <Route exact path="/Testseriesnav" element={<Testseriesnav />} />
               
               <Route exact path="/analyticsnav" element={<AnalyticsNav/>} />

            </Routes>

          </main>
        </div>
      );
    } else {

      body = (
        <div
          style={{
            // display: "flex",
          }}
        >
          {/* <main
              style={{
                // flexGrow: 1,
                // margin: 80,
              }}
            > */}
          <Controller />
          <Routes>
            <Route exact path="/" element={<div><Navbar /><Landing /><Footer /></div>} />
            {/* <Route path="/" element={<Controller />} /> */}
            <Route exact path="/login" element={<div><Navbar /><Login /><Footer /></div>} />
            <Route exact path="/adminlogin" element={<div><Navbar /><SignUp /><Footer /></div>} />
            <Route exact path="/superadminlogin" element={<div><Navbar /><SuperAdminLogin /><Footer /></div>} />
            <Route exact path="/Coursedetails" element={<div><Navbar /> <Coursedetails />< Learningtoday /><Footer /></div>} />
            <Route exact path="/CombinePackage" element={<div><Navbar />< CombinedPackage /></div>} />
            <Route exact path="/about" element={<div><Navbar /><Aboutus /><Footer /> </div>} />
            <Route exact path="/Pdfhome" element={<div><Navbar /><Pdfhome />< Learningtoday /><Footer /> </div>} />
            <Route exact path="/Pdfdetails" element={<div><Navbar /><Pdfdetails />< Learningtoday /><Footer /> </div>} />
            <Route exact path="/Testseries" element={<div><Navbar /><Testseries />< Learningtoday /><Footer /> </div>} />
            <Route exact path="/Testseriesviewdetails" element={<div><Navbar /><Testseriesviewdetails />< Learningtoday /><Footer /> </div>} />
            <Route exact path="/exams" element={<div><Navbar /><Exams /><Learningpath />< Learningtoday /><Footer /> </div>} />
            <Route exact path="/signuppdf" element={<div><Navbar /><Signuppdf /> </div>} />
            <Route exact path="/vdo" element={<div><Navbar /><Vdo /> </div>} />
            <Route exact path="/paymentlastpage" element={<div><Paymentlastpage /> </div>} />
            <Route exact path="/buynowpage" element={<div><Buynowpage /> </div>} />
            <Route exact path="/studentspecial" element={<div><Navbar /><Studentspecial />< Learningtoday /><Footer /></div>} />
            <Route exact path="/coupon" element={<div><Navbar /><Coupon /><Footer /></div>} />
            <Route exact path="/Examysfirst" element={<div><Examysfirst /></div>} />
            <Route exact path="/coupon" element={<div><Navbar /><Coupon /></div>} />
            <Route exact path="/instruction" element={<div><Instruction /></div>} />
            <Route exact path="/viewdetails" element={<div><Navbar /><Viewdetails /></div>} />
            <Route exact path="/testsection" element={<div><Testsection /></div>} />
            <Route exact path="*" element={<Error />} />
          </Routes>
          {/* </main> */}
          {/* <Footer /> */}
        </div>
      );




    }

    return <Router>{body}</Router>;
  }
}

export default Routers;
