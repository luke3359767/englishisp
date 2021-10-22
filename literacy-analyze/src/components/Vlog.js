import React from "react";

const style={
    height: '460px',
    overflow: "scroll",

}

const vstyle={
    height:"400px",
}

const Vlog=()=>{
    return(
        <div style={style}>
            <h1 style={{paddingTop:"20px"}}>VLOG</h1>
            <video style={vstyle} src={`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`}/>
            
        </div>
    );
}

export default Vlog;