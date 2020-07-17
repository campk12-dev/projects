import React from "react";
import Card from './Card';
import {IssuesList} from './Data.jsx';

const Issues = (props) =>{
    return(
        <>
            <div className="cardr container">
            <div className="row">
                {
                    props.tech==="issues" ? (
                        IssuesList.map((d)=>{
                           if(d.tech==="issues"){
                            return((<Card url={d.url} imgSrc={d.imgUrl} name={d.name} tech={d.tech} techName={d.techName} level={d.level}/>))
                           }
                           else{
                               return null;
                           }
                       }) 
                    ) :  null
                }
            </div> 
            </div>
        </>
    )
}

export default Issues;