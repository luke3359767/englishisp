import React from "react";

const style={
    background:"#38318f",
    paddingBottom:"1px",
    color:"#fff",
}

const pStyle={
    paddingTop:"6px",
    marginLeft:"30px"
}

const Footer=()=>{
    return(
        <div style={style}>
            <p style={pStyle}>©2020 by Luke Liu </p>
        </div>
    );
}

export default Footer;