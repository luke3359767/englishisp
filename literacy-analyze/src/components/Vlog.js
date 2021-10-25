import React from "react";
import ReactPlayer from 'react-player/youtube'

const style={
    height: '460px',
    overflow: "scroll",
    alignItems: "center",

}

const vstyle={
    height:"400px",
    marginLeft:"auto",
    marginRight:"auto",
}

const Vlog=()=>{
    return(
        <div style={style}>
            <h1 style={{paddingTop:"20px"}}>VLOG</h1>
            <ReactPlayer
                url="https://youtu.be/qLJCeg6B-Zg"
                controls
                playbackRate = {1}
                height = "350px"
                width="750px"
                style={vstyle}
            />
            
        </div>
    );
}

export default Vlog;