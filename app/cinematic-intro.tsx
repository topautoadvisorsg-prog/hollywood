"use client";

import {useEffect, useState} from "react";

export function CinematicIntro(){
  const [closing,setClosing]=useState(false);
  const [visible,setVisible]=useState(true);
  useEffect(()=>{
    if(matchMedia("(prefers-reduced-motion: reduce)").matches){setVisible(false);return}
    const close=setTimeout(()=>setClosing(true),2600);
    const remove=setTimeout(()=>setVisible(false),3500);
    return ()=>{clearTimeout(close);clearTimeout(remove)};
  },[]);
  if(!visible)return null;
  return <div className={`cinematic-intro ${closing?"is-closing":""}`} aria-label="White Oak arrival">
    <div><span>WHITE OAK HOUSE</span><i>STUDIO CITY · CALIFORNIA</i></div>
    <button type="button" onClick={()=>setClosing(true)}>SKIP INTRO</button>
  </div>;
}
