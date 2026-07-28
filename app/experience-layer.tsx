"use client";

import {useEffect, useState} from "react";

export function ExperienceLayer(){
  const [progress,setProgress]=useState(0);
  useEffect(()=>{
    const root=document.querySelector(".site");
    if(!root)return;
    const targets=root.querySelectorAll("section:not(:first-of-type), figure, article");
    targets.forEach((node,index)=>{
      node.classList.add("ux-reveal");
      (node as HTMLElement).style.setProperty("--reveal-delay",`${Math.min(index%4,3)*70}ms`);
    });
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}
    }),{threshold:.12,rootMargin:"0px 0px -7% 0px"});
    targets.forEach(node=>observer.observe(node));
    const update=()=>{
      const max=document.documentElement.scrollHeight-innerHeight;
      setProgress(max>0?scrollY/max:0);
    };
    update();
    addEventListener("scroll",update,{passive:true});
    return ()=>{observer.disconnect();removeEventListener("scroll",update)};
  },[]);
  return <div className="scroll-progress" aria-hidden="true"><i style={{transform:`scaleX(${progress})`}}/></div>;
}
