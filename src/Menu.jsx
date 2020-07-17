import React from "react";
import Card from './Card';
import Data from './Data';

const Menu = (props) =>{
    return(
        <>
            <div className="cardr container">
            <div className="row">
                {
                    props.tech==="home" ? (
                       Data.map((d)=>{
                           if(d.tech==="home"){
                            return((<Card imgSrc={d.imgUrl} name={d.name} tech={d.tech} techName={d.techName}/>))
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

export default Menu;