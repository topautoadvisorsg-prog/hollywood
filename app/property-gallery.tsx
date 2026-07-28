"use client";

import {useEffect, useState} from "react";

const P=(n:number)=>`/property-hq/photo-${String(n).padStart(2,"0")}.jpg`;

export function PropertyGallery({concept,shots}:{concept:string;shots:number[]}){
  const [active,setActive]=useState<number|null>(null);
  const [zoomed,setZoomed]=useState(false);
  useEffect(()=>{
    if(active===null)return;
    const key=(event:KeyboardEvent)=>{
      if(event.key==="Escape")setActive(null);
      if(event.key==="ArrowRight"){setZoomed(false);setActive((active+1)%shots.length)}
      if(event.key==="ArrowLeft"){setZoomed(false);setActive((active-1+shots.length)%shots.length)}
    };
    addEventListener("keydown",key);
    document.body.classList.add("gallery-open");
    return ()=>{removeEventListener("keydown",key);document.body.classList.remove("gallery-open")};
  },[active,shots.length]);
  return <>
    <div className={`gallery-grid ${concept}`}>{shots.map((n,i)=><figure key={n}>
      <button type="button" onClick={()=>setActive(i)} aria-label={`Open property photograph ${i+1}`}>
        <img src={P(n)} alt={`White Oak property photograph ${i+1}`} loading="lazy"/>
        <span>VIEW IMAGE <b>↗</b></span>
      </button>
      <figcaption>{String(i+1).padStart(2,"0")} / WHITE OAK</figcaption>
    </figure>)}</div>
    {active!==null&&<div className="gallery-viewer" role="dialog" aria-modal="true" aria-label="Property image viewer" onClick={()=>setActive(null)}>
      <button className="gallery-close" type="button" onClick={()=>setActive(null)} aria-label="Close image viewer">CLOSE ×</button>
      <button className="gallery-prev" type="button" onClick={e=>{e.stopPropagation();setZoomed(false);setActive((active-1+shots.length)%shots.length)}} aria-label="Previous image">←</button>
      <img className={zoomed?"is-zoomed":""} src={P(shots[active])} alt={`White Oak property photograph ${active+1}`} onClick={e=>{e.stopPropagation();setZoomed(value=>!value)}}/>
      <span>{String(active+1).padStart(2,"0")} / {shots.length}</span>
      <button className="gallery-next" type="button" onClick={e=>{e.stopPropagation();setZoomed(false);setActive((active+1)%shots.length)}} aria-label="Next image">→</button>
      <div className="gallery-thumbs" onClick={e=>e.stopPropagation()}>{shots.map((shot,index)=><button className={index===active?"active":""} type="button" key={shot} onClick={()=>{setZoomed(false);setActive(index)}} aria-label={`View image ${index+1}`}><img src={P(shot)} alt=""/></button>)}</div>
    </div>}
  </>;
}
