"use client";

import {useEffect, useRef, useState} from "react";

export function AmbientSound(){
  const [on,setOn]=useState(false);
  const context=useRef<AudioContext|null>(null);
  const nodes=useRef<AudioNode[]>([]);
  const stop=()=>{
    nodes.current.forEach(node=>{try{node.disconnect()}catch{}});
    nodes.current=[];
    context.current?.close();
    context.current=null;
    setOn(false);
  };
  const start=()=>{
    const AudioContextClass=window.AudioContext;
    const ctx=new AudioContextClass();
    const seconds=4;
    const buffer=ctx.createBuffer(1,ctx.sampleRate*seconds,ctx.sampleRate);
    const data=buffer.getChannelData(0);
    for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*.32;
    const source=ctx.createBufferSource();
    source.buffer=buffer;
    source.loop=true;
    const filter=ctx.createBiquadFilter();
    filter.type="lowpass";
    filter.frequency.value=560;
    const gain=ctx.createGain();
    gain.gain.value=.035;
    const drift=ctx.createOscillator();
    const driftGain=ctx.createGain();
    drift.frequency.value=.11;
    driftGain.gain.value=.012;
    source.connect(filter).connect(gain).connect(ctx.destination);
    drift.connect(driftGain).connect(gain.gain);
    source.start();
    drift.start();
    context.current=ctx;
    nodes.current=[source,filter,gain,drift,driftGain];
    setOn(true);
  };
  useEffect(()=>stop,[]);
  return <button className={`ambient-control ${on?"is-on":""}`} type="button" onClick={on?stop:start} aria-pressed={on}>
    <i aria-hidden="true">{on?"◖))":"◖×"}</i><span>{on?"AMBIENCE ON":"ENABLE AMBIENCE"}</span><small>CONCEPT SOUND</small>
  </button>;
}
