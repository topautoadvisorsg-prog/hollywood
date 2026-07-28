"use client";

import {useState} from "react";

export function HeroFilm({images,label,className=""}:{images:string[];label:string;className?:string}){
  const [paused,setPaused]=useState(false);
  return <div className={`hero-film ${paused?"is-paused":""} ${className}`} role="img" aria-label={label}>
    <div className="hero-film-frames" aria-hidden="true">
      {images.map((src,index)=><img key={src} src={src} alt="" style={{"--frame":index} as React.CSSProperties}/>)}
    </div>
    <div className="hero-film-status"><span>PROPERTY FILM · CONCEPT PREVIEW</span><i>REAL FOOTAGE DROP-IN READY</i></div>
    <button type="button" onClick={()=>setPaused(value=>!value)} aria-label={paused?"Play property film preview":"Pause property film preview"}>{paused?"PLAY":"PAUSE"}</button>
  </div>
}
