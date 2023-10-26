import "./index.css"
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Home from "./CourseAdvantages/Container/HomeCont";
import Bannerhome from "./CourseAdvantages/Container/bannerhomeCont";
import Learningpath from "./CourseAdvantages/Container/LearningpathCont";
import Courses from "./CourseAdvantages/Component/focuspackhome";
import Coursesupportby from "./CourseAdvantages/Component/coursesupportby";
import TestEdge from "./CourseAdvantages/Component/TestEdge";
import UnlockTest from "./CourseAdvantages/Component/UnlockTest";
import Testseries from "./CourseAdvantages/Component/test series";
import Banner from "./CourseAdvantages/Container/bannerhomeCont";
import Coursejourney from "./CourseAdvantages/Component/coursejourney";
import Score from "./CourseAdvantages/Container/scoreCont";
import PDF from "./CourseAdvantages/Component/PDF";
import Learningtoday from "../../common/footer/learning today";
import Homeexamlist from "./CourseAdvantages/Component/Homeexamlist";
import bannerhome from "./CourseAdvantages/Component/bannerhome";
import Unlocktestseries from './CourseAdvantages/Container/unlocktestseriesCount';
import Homeslider from "./CourseAdvantages/Component/Homeslider";
import Testseriesyoulike from "./CourseAdvantages/Container/testseriesyoulikeCount";
import Currentaffair from "./CourseAdvantages/Component/currentaffair";
// import Focuspack from "../static/CourseAdvantages/Component/focuspackage";
import Focuspackhome from "../static/CourseAdvantages/Container/focuspackhomeCount";
import Examyinspsection from "./CourseAdvantages/Component/examyinspsection";
import FocusTabcategory from "./CourseAdvantages/Container/tabpackagecatCount";

// import Currentaffair from "./CourseAdvantages/Component/currentaffair";
import Footer from "../../common/footer/index";


const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="landing">
      <div >
        {/* <Banner />
        <Home/>
        <Learningpath />
        <Courses />
        <TestEdge />
        <UnlockTest/>
        <Testseries/>
        <Score/>
        <PDF/> */}


        {/* <Courses /> */}
        {/* <Bannerhome/> */}
        <Homeslider />
        <Examyinspsection />
        <Home />

        {/* <Courses /> */}
        {/* <Focuspack /> */}
<FocusTabcategory/>
        <Focuspackhome/>
        <Coursesupportby />

        <TestEdge />

        <Testseriesyoulike />

        <UnlockTest />

        <Unlocktestseries />
        <Currentaffair />

        <Coursejourney />
        <Score />
        <Learningtoday />
        <Footer />
        <Homeexamlist />

      </div>
    </div>


  );
}


export default Landing;