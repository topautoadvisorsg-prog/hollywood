import {AmbientSound} from "./ambient-sound";
import {CinematicIntro} from "./cinematic-intro";
import {HeroFilm} from "./hero-film";
import type {ReactNode} from "react";

const P=(n:number)=>`/property-hq/photo-${String(n).padStart(2,"0")}.jpg`;

function Act({number,title,prompt}:{number:string;title:string;prompt:string}){
  return <div className="act-marker"><b>ACT {number}</b><span>{title} · {prompt}</span></div>;
}

function Chapter({id,word,time,title,copy,image,side="left",moment=false,children}:{id:string;word:string;time:string;title:string;copy:string;image:number;side?:"left"|"right";moment?:boolean;children?:ReactNode}){
  return <section id={id} className={`doc-chapter doc-${side} ${moment?"signature-moment":""}`}>
    <img src={P(image)} alt={title}/>
    <div>{children}<p>{word.toUpperCase()} · {time}</p><h2>{title}</h2><span>{copy}</span></div>
  </section>;
}

export function CinematicHome(){
  return <div className="luminous-home cinematic-documentary">
    <CinematicIntro/>
    <AmbientSound/>

    <section id="arrive" className="lum-hero doc-arrive signature-moment">
      <HeroFilm images={[P(2),P(57),P(3),P(1)]} label="Cinematic arrival sequence revealing the hillside, grounds, pool and blue hour"/>
      <div><Act number="I" title="ARRIVAL" prompt="WHERE AM I?"/><p>ARRIVE · 5:42 PM</p><h1>A city away<br/>from the city.</h1><span>The hills appear first. Then the house.</span><a href="#breathe">ENTER THE STORY ↓</a></div>
    </section>

    <nav className="story-nav documentary-nav" aria-label="Property documentary chapters">
      <span>THE JOURNEY</span><a href="#arrive">Arrive</a><a href="#breathe">Breathe</a><a href="#enter">Enter</a><a href="#gather">Gather</a><a href="#taste">Taste</a><a href="#connect">Connect</a><a href="#unwind">Unwind</a><a href="#reflect">Reflect</a><a href="#rest">Rest</a><a href="#stay">Stay</a>
    </nav>

    <section id="breathe" className="doc-landscape">
      <img src={P(4)} alt="The broad landscape and city view from White Oak"/>
      <div><p>BREATHE · 6:04 PM</p><h2>Before the rooms,<br/>there is the horizon.</h2><span>The house is introduced through its setting: hillside, sky, privacy and nearly 180 degrees of Los Angeles.</span></div>
    </section>

    <Chapter id="enter" word="Enter" time="6:21 PM" title="The outside follows you in." copy="Glass, clean lines and warm material pull the landscape through the architecture." image={28} side="right" moment>
      <Act number="II" title="DISCOVERY" prompt="WALK THROUGH"/>
    </Chapter>

    <Chapter id="gather" word="Gather" time="6:38 PM" title="Room for the day to unfold." copy="The living space opens toward the terrace so conversation, light and view remain connected." image={12}/>

    <Chapter id="taste" word="Taste" time="6:56 PM" title="The center of the house is warm." copy="A quiet kitchen chapter gives the journey human scale—preparation, sunlight and the promise of dinner." image={15} side="right" moment/>

    <Chapter id="connect" word="Connect" time="7:18 PM" title="Open the doors." copy="The camera crosses the threshold. Interior becomes terrace; architecture becomes open air." image={10}>
      <Act number="III" title="EXPERIENCE" prompt="IMAGINE YOURSELF HERE"/>
    </Chapter>

    <Chapter id="unwind" word="Unwind" time="7:42 PM" title="Water holds the last light." copy="The pool, reflections and changing sky become the property’s most effortless signature." image={3} side="right" moment/>

    <section id="reflect" className="doc-reflect">
      <img src={P(2)} alt="White Oak panorama as sunset settles over Los Angeles"/>
      <div><p>REFLECT · 8:03 PM</p><h2>Let the view<br/>finish the sentence.</h2><span>No new information. Just a deliberate pause before night.</span><div className="doc-proof"><b>5 BEDROOMS</b><b>2 RESIDENCES</b><b>POOL + TERRACES</b><b>ABOVE STUDIO CITY</b></div></div>
    </section>

    <Chapter id="rest" word="Rest" time="9:14 PM" title="Close the doors. Keep the view." copy="Private rooms slow the pace while the city remains present beyond the glass." image={19}>
      <Act number="IV" title="MEMORY" prompt="LEAVE ONE FINAL IMAGE"/>
    </Chapter>

    <section id="stay" className="doc-night signature-moment">
      <img src={P(1)} alt="White Oak pool, fire feature and city lights at night"/>
      <div><p>STAY · 9:48 PM</p><h2>The night is<br/>the final shot.</h2><span>The journey ends where memory begins: water, fire and Los Angeles below.</span><a href="/cinematic/contact">START A PRIVATE CONVERSATION</a></div>
    </section>
  </div>;
}
