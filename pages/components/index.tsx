import Page from "../../components/framework/Page";
import { SiteMeta } from "../../interfaces/framwork";

export default function Home() {
  const meta: SiteMeta = {
    title: "Fluid Design",
    description: "A collection of beautifully designed components",
  };
  return <Page meta={meta}>Hellow World!
  <div className="h-[300vh]"></div></Page>;
}
