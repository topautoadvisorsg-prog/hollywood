import { notFound } from "next/navigation";
import { SitePage } from "../../site-page";

const concepts=["editorial","cinematic","production"];
const pages=["home","estate","stay","host","gallery","contact"];

export default async function ConceptPage({params}:{params:Promise<{concept:string;slug?:string[]}>}){
  const {concept,slug}=await params;
  const page=slug?.[0]??"home";
  if(!concepts.includes(concept)||!pages.includes(page))notFound();
  return <SitePage concept={concept as "editorial"|"cinematic"|"production"} page={page}/>;
}
