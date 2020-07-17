import React from "react";
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import UpdateIcon from '@material-ui/icons/Update';
import { useHistory } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const buttonCSS = {
    backgroundColor : 'red',
    color : 'aliceblue',
}

const homeButtonCSS = {
    backgroundColor : '#6AE000',
    color : 'aliceblue',
}

const locationToName = (loc) =>{
    if(loc==="/"){
        return "CampK12";
    }
    else if(loc==="/scratch"){
        return "Scratch";
    }
    else if(loc==="/appinv"){
        return "App Inventor";
    }
    else if(loc==="/vr"){
        return "VR and 3D";
    }
    else if(loc==="/webdev"){
        return "Web Dev";
    }
}

const Banner = (props) =>{
    const history = useHistory();
    return(
        <>
            <div className="banner">
                <Tooltip title="Back to Home!">
                    <Button onClick={()=>{history.push("/")}} variant="contained" style={homeButtonCSS}>
                       <HomeIcon/>
                    </Button>
                </Tooltip>
                <br/>
                <br/>
                <Tooltip title="Get your queries addressed">
                    <Button onClick={()=>{history.push("/issues")}} variant="contained" style={buttonCSS}>
                       <UpdateIcon/>  Instructor Concerns and Queries
                    </Button>
                </Tooltip>
                <br/>
                <div className="theme_div">
                    <h2 className="std_txt">{locationToName(props.url)} PROJECTS</h2>
                    <h4 className="std_txt">An Aggregation of all Projects by CampK12.</h4>
                </div>
            </div>  
        </>
    )
}

export default Banner;