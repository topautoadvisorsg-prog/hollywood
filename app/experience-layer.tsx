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
      root.querySelectorAll(".luminous-home>section").forEach(section=>{
        const box=section.getBoundingClientRect();
        const value=Math.max(0,Math.min(1,(innerHeight-box.top)/(innerHeight+box.height)));
        (section as HTMLElement).style.setProperty("--chapter-progress",String(value));
        (section as HTMLElement).style.setProperty("--camera-y",`${(0.5-value)*42}px`);
        (section as HTMLElement).style.setProperty("--copy-y",`${(value-0.5)*15}px`);
        (section as HTMLElement).style.setProperty("--camera-scale",String(1.025+value*0.025));
      });
    };
    update();
    addEventListener("scroll",update,{passive:true});
    return ()=>{observer.disconnect();removeEventListener("scroll",update)};
  },[]);
  return <div className="scroll-progress" aria-hidden="true"><i style={{transform:`scaleX(${progress})`}}/></div>;
}
