"use client";

import {useEffect, useRef, useState} from "react";

export function HeroFilm({images,label,className=""}:{images:string[];label:string;className?:string}){
  const [paused,setPaused]=useState(false);
  const [active,setActive]=useState(0);
  const touchStart=useRef<number|null>(null);
  useEffect(()=>{
    if(paused)return;
    const timer=setInterval(()=>setActive(value=>(value+1)%images.length),5000);
    return ()=>clearInterval(timer);
  },[paused,images.length]);
  const move=(direction:number)=>{
    setPaused(true);
    setActive(value=>(value+direction+images.length)%images.length);
  };
  return <div className={`hero-film is-controlled ${paused?"is-paused":""} ${className}`} role="region" aria-roledescription="carousel" aria-label={label}
    onTouchStart={event=>{touchStart.current=event.touches[0].clientX}}
    onTouchEnd={event=>{if(touchStart.current===null)return;const distance=event.changedTouches[0].clientX-touchStart.current;if(Math.abs(distance)>45)move(distance>0?-1:1);touchStart.current=null}}>
    <div className="hero-film-frames" aria-hidden="true">
      {images.map((src,index)=><img className={index===active?"is-active":""} key={src} src={src} alt=""/>)}
    </div>
    <div className="hero-film-status"><span>PROPERTY FILM · CONCEPT PREVIEW</span><i>REAL FOOTAGE DROP-IN READY</i></div>
    <div className="hero-film-nav">
      <button type="button" onClick={()=>move(-1)} aria-label="Previous property image">←</button>
      <span>{String(active+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span>
      <button type="button" onClick={()=>move(1)} aria-label="Next property image">→</button>
      <button type="button" onClick={()=>setPaused(value=>!value)} aria-label={paused?"Play property gallery":"Pause property gallery"}>{paused?"PLAY":"PAUSE"}</button>
    </div>
    <div className="hero-film-thumbs" aria-label="Choose a property image">{images.map((src,index)=><button className={index===active?"active":""} key={src} type="button" onClick={()=>{setActive(index);setPaused(true)}} aria-label={`Show property image ${index+1}`}><img src={src} alt=""/></button>)}</div>
  </div>
}
