import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata():Promise<Metadata>{
  const h=await headers();
  const host=h.get("host")??"localhost:3000";
  const protocol=host.includes("localhost")?"http":"https";
  const image=`${protocol}://${host}/og.png`;
  return {
    title:"White Oak — 7845 Torrison Drive",
    description:"A private Hollywood Hills estate for elevated stays, productions, and gatherings.",
    icons:{icon:"/favicon.svg",shortcut:"/favicon.svg"},
    openGraph:{title:"White Oak — Hollywood Hills",description:"Stay, create, and gather above Los Angeles.",images:[image]},
    twitter:{card:"summary_large_image",title:"White Oak — Hollywood Hills",description:"Stay, create, and gather above Los Angeles.",images:[image]}
  };
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>
}
