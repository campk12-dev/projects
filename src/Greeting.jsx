import React from 'react';

const headingDiv = {
    textAlign : 'center',
    color : '#0f0f0f',
    marginBottom : '100px',
    border : '3px solid #1BAAFF',
    width : '100%',
}

let greetingStyle = {

}
let greeting;

const time = new Date();
const normieTime = time.toLocaleTimeString('en-US');
const hour = parseInt(time.toLocaleTimeString('en-GB').split(':')[0]);

if(hour>=1 && hour<=4){
    greeting  = ` It's ${normieTime} and Late in the Night!`
    greetingStyle.color = "beige";
}
else if(hour>=5 && hour<=11){
    greeting  = ` It's ${normieTime} and Early in the Morning!`
    greetingStyle.color = "greenyellow";
}
else if(hour>=12 && hour<=18){
    greeting  = ` It's ${normieTime} and a beautiful Day!`
    greetingStyle.color = "blue";
}
else{
    greeting  = ` It's ${normieTime} and a wonderful Evening!`
    greetingStyle.color = "#2C3E50";
}

function Greeting(){
    return (
        <div className="greeting_div" style={headingDiv}>
        <h2>Hello Instructor!</h2>
        <p style={greetingStyle}>{greeting}</p>
        </div>
    )
}

export default Greeting;