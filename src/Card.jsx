import React from "react";
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
// import Tooltip from '@material-ui/core/Tooltip';


const buttonCSS = {
    backgroundColor : 'orange',
    color : 'aliceblue',
}


const Card = (props) =>{
    let history = useHistory();
    return(
        <>
              <div className="col-sm-4 text-center card_wrapper">
                <img src={props.imgSrc} alt={props.name} className="img-fluid"/>
                <div className="px-md-3">
                  <h4>{props.name}</h4>
                  {(props.level && props.tech!=="issues") ? (<p>{`Level : ${props.level} ; Project : ${props.pNo} `}</p>) : null}
                  {(props.tech==="issues") ? (<p>{`${props.level}`}</p>) : null}
                  <div className="btn-group text-center">
                  {/* eslint-disable-next-line*/}
                    {props.tech==="home" ? (<a rel="noopener noreferrer"><Button onClick={()=>{history.push(`/${props.techName}`)}} style={buttonCSS}>View Projects</Button></a>) 
                    : (<a rel="noopener noreferrer" target="_blank" href={props.url}><Button style={buttonCSS}>View the Project</Button></a>) }
                  </div>
                </div>
              </div>
        </>
    )
}


export default Card;