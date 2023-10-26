import React, { Component } from 'react'
import Coursebtn from '../Container/coursebtnCont'
import Focuspackage from '../../CourseAdvantages/Component/focuspackhome';
import Power  from "./power"
import Combined from './combined'
import { Divider, Typography } from '@mui/material'

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    this.props.viewAllPackageGroupByCategory(this.props.home.category_id);
    console.log("hiiiiiii",this.props.home.all_package_by_category)

}
  render() {
    const {
      common,
      home,
      snackbar,
      close_snack_bar,
  } = this.props;
    return (
      <>

      {home.all_package_by_category.map((c,index)=>(

      
      <div style={{background:"linear-gradient(180deg, #FFFFFF 60.23%, rgba(255, 226, 226, 0.6) 93.56%)"}}>
        <Typography style={{fontWeight:"bolder",fontSize:28,marginLeft:"4%"}}>Courses You Like</Typography>
        <Coursebtn/>
        <Typography variant="h5" component="div" marginLeft="5%" mt={10} >
            Focus Packages
            <span
              style={{ color: "#3E30C2", fontWeight: "100", fontStyle: "italic"}}
            >
              <a href="http://lea.verou.me" class="center">(Explore all Focus packages){" "}</a>
            </span>
          </Typography>
     
        <Focuspackage/>
        <Divider/>
        {/* <hr style={{ marginTop: "15px", marginBottom: "20px" , marginLeft:"2%" ,marginRight:"2%",border:"2px solid #000"}} />
        <Typography variant="h5" component="div" marginLeft="5%" mt={10} >
        Power Packages
            <span
              style={{ color: "#3E30C2", fontWeight: "100", fontStyle: "italic"}}
            >
              <a href="http://lea.verou.me" class="center">(Explore all power packages){" "}</a>
            </span>
          </Typography>
        <hr style={{ marginTop: "15px", marginBottom: "20px" , marginLeft:"2%" ,marginRight:"2%",border:"2px solid #000"}} />
          
        <Power/>
        <Typography variant="h5" component="div" marginLeft="5%" mt={10} >
        Combined Packages
            <span
              style={{ color: "#3E30C2", fontWeight: "100", fontStyle: "italic"}}
            >
              <a href="http://lea.verou.me" class="center">(Explore all Combined packages){" "}</a>
            </span>
          </Typography>
        <hr style={{ marginTop: "15px", marginBottom: "20px" , marginLeft:"2%" ,marginRight:"2%",border:"2px solid #000"}} />
          
        <Combined/> */}
        <center>

        <button className='btns-explore' >Explore All</button>
        </center>
      </div>
       ) )}
       
        </>
    )
  }
}
