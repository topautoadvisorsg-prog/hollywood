"use client";
import { useState } from "react";

type Mode="residence"|"escape"|"production";
const modes:{id:Mode;num:string;name:string;sub:string}[]=[
  {id:"residence",num:"01",name:"The Residence",sub:"Editorial · considered"},
  {id:"escape",num:"02",name:"The Escape",sub:"Cinematic · immersive"},
  {id:"production",num:"03",name:"The Location",sub:"Production · precise"},
];
const hero={
  residence:{kicker:"A PRIVATE HILLSIDE ESTATE · STUDIO CITY",title:<>The view is<br/><i>only the beginning.</i></>,copy:"A private resort above the valley, shaped by glass, light, and the easy rhythm of California living.",cta:"Explore the estate"},
  escape:{kicker:"ARRIVE ABOVE IT ALL",title:<>One house.<br/><i>A world away.</i></>,copy:"Sun on the water. Dinner under the trees. The city glittering below. This is how Los Angeles is meant to feel.",cta:"Begin the story"},
  production:{kicker:"STAY · SHOOT · HOST",title:<>Built for<br/><i>the big picture.</i></>,copy:"A camera-ready hillside estate with panoramic sightlines, versatile zones, generous access, and complete privacy.",cta:"Scout the property"},
};
const pics=Array.from({length:82},(_,i)=>`/property/photo-${String(i+1).padStart(2,"0")}.${i===4||i===46?"webp":"avif"}`);

export default function Home(){
  const [mode,setMode]=useState<Mode>("residence");
  const [menu,setMenu]=useState(false);
  const h=hero[mode];
  return <main className={`site mode-${mode}`}>
    <header className="nav">
      <a href="#top" className="brand"><b>WHITE OAK</b><span>7845 TORRISON DRIVE</span></a>
      <nav><a href="#estate">Estate</a><a href="#stay">Stay</a><a href="#host">Host</a><a href="#gallery">Gallery</a></nav>
      <a className="nav-cta" href="#inquire">Inquire <b>↗</b></a>
      <button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?"Close":"Menu"}</button>
    </header>
    {menu&&<div className="mobile-menu">{["Estate","Stay","Host","Gallery","Inquire"].map(x=><a key={x} onClick={()=>setMenu(false)} href={`#${x.toLowerCase()}`}>{x}</a>)}</div>}

    <section id="top" className="hero">
      <img src={pics[0]} alt="Aerial view of the Torrison Drive estate and pool at dusk"/>
      <div className="hero-shade"/>
      <div className="hero-copy"><p>{h.kicker}</p><h1>{h.title}</h1><span>{h.copy}</span><a href="#estate">{h.cta} <b>↘</b></a></div>
      <div className="hero-index"><span>34.1288° N</span><span>118.3705° W</span></div>
      <div className="scroll">SCROLL <i/></div>
    </section>

    <section className="direction">
      <div className="direction-title"><span>CLIENT VIEW</span><h2>See the story<br/>three ways.</h2></div>
      <div className="modes">{modes.map(m=><button key={m.id} onClick={()=>setMode(m.id)} className={mode===m.id?"active":""}><span>{m.num}</span><div><b>{m.name}</b><small>{m.sub}</small></div><i>↗</i></button>)}</div>
    </section>

    <section className="manifesto">
      <p className="label">THE PREMISE</p>
      <h2>Not a rental.<br/><i>Your own Los Angeles.</i></h2>
      <p>High above Studio City, White Oak unfolds as a private resort—one that opens completely to the sky, the water, and a horizon that changes by the hour.</p>
      <div className="fact-line"><span><b>12</b> guests</span><span><b>5</b> bedrooms</span><span><b>5.5</b> baths</span><span><b>6</b> cars</span></div>
    </section>

    <section id="estate" className="estate">
      <div className="section-head"><p><span>01</span> THE ESTATE</p><p>INDOOR / OUTDOOR<br/>WITHOUT THE DIVIDE</p></div>
      <div className="estate-images">
        <figure className="estate-main"><img src={pics[2]} alt="Pool terrace facing the glass-fronted main residence"/><figcaption>THE TERRACE · LOOKING IN</figcaption></figure>
        <figure className="estate-float"><img src={pics[5]} alt="Panoramic valley view from the estate"/><figcaption>THE VALLEY · LOOKING OUT</figcaption></figure>
        <div className="estate-text"><h2>Every room<br/>finds the view.</h2><p>A retractable wall of glass dissolves the line between living room, chef’s kitchen, pool deck, and the valley beyond. The house doesn’t frame the landscape. It joins it.</p><a href="#gallery">See the complete estate →</a></div>
      </div>
    </section>

    <section className="panorama"><img src={pics[1]} alt="The San Fernando Valley seen from the pool deck"/><div><p>THE VIEW</p><h2>From Universal<br/>to the horizon.</h2></div></section>

    <section className="oak">
      <div className="oak-copy"><p className="label">THE OTHER SIDE OF WHITE OAK</p><h2>Shade.<br/>Stillness.<br/><i>A place to stay awhile.</i></h2><p>Beyond the energy of the pool, mature trees shelter a private garden and oak swing—a quieter counterpoint made for reading, yoga, long conversations, or nothing at all.</p></div>
      <div className="oak-gallery"><img src={pics[56]} alt="Tree-shaded garden at White Oak"/><img src={pics[57]} alt="Outdoor seating beneath mature trees"/></div>
    </section>

    <section className="chapters">
      <article id="stay"><img src={pics[18]} alt="Calm bedroom suite at White Oak"/><div><p>02 · STAY</p><h2>Check in.<br/><i>Exhale.</i></h2><span>Five bedrooms, two private buildings, and enough room for everyone to disappear for a while.</span><a href="https://www.airbnb.com/rooms/1583425609042811538">View the Airbnb ↗</a></div></article>
      <article id="host"><img src={pics[9]} alt="Expansive pool deck prepared for gathering"/><div><p>03 · HOST</p><h2>Bring the<br/><i>occasion up.</i></h2><span>Poolside dinners, brand moments, productions, retreats, and celebrations with the valley as backdrop.</span><a href="#inquire">Plan an event ↗</a></div></article>
    </section>

    <section className="proof">
      <p>“The pictures don’t do the view justice.<br/>It feels like the whole city is yours.”</p>
      <div><span>AIRBNB LUXE</span><span>5.0 RATING</span><span>25 REVIEWS</span></div>
    </section>

    <section id="gallery" className="gallery">
      <div className="gallery-head"><p><span>04</span> THE GALLERY</p><h2>Inside.<br/>Outside.<br/><i>All of it.</i></h2><button>82 photographs <b>↘</b></button></div>
      <div className="masonry">{[0,2,5,7,9,12,18,24,30,36,44,50,56,62,68].map((x,i)=><figure key={x} className={`shot s${i%6}`}><img src={pics[x]} alt={`White Oak property view ${i+1}`} loading="lazy"/><figcaption>{String(i+1).padStart(2,"0")} / WHITE OAK</figcaption></figure>)}</div>
    </section>

    <section id="inquire" className="inquire">
      <img src={pics[3]} alt="White Oak glowing above the pool at dusk"/>
      <div className="inquire-shade"/>
      <div><p>YOUR TIME AT WHITE OAK</p><h2>Come up<br/><i>for the view.</i></h2><span>Stay for a weekend. Gather your people. Make something unforgettable.</span><a href="mailto:hello@whiteoakhollywood.com">Begin an inquiry <b>↗</b></a></div>
    </section>
    <footer><div className="brand"><b>WHITE OAK</b><span>7845 TORRISON DRIVE</span></div><p>STUDIO CITY · CALIFORNIA</p><div><a href="#top">TOP ↑</a></div></footer>
  </main>
}
