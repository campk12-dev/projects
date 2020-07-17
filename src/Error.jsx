import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';

const homeButtonCSS = {
    backgroundColor : '#6AE000',
    color : 'aliceblue',
}




const Error = () =>{
    let history = useHistory();
    return(
        <> 
              <p>You have reached the VOID! Go Home!</p>
              <div className="col-sm-4 text-center">
                <img src="https://media.tenor.com/images/3bee4740ebd52e11e21b3db3e28ef646/tenor.gif" alt="dog GIF" className="img-fluid"/>
                <br/>
                <Tooltip title="Back to Home!">
                    <Button onClick={()=>{history.push("/")}} variant="contained" style={homeButtonCSS}>
                       <HomeIcon/>
                    </Button>
                </Tooltip>
              </div>
        </>
    )
}


export default Error;