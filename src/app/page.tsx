import DontMiss from "@/components/page5";
import Essential from "@/components/page6";
// import Featuredfrom "@/components/FEATURED";
import GearUp from "@/components/page4";
import Hero from "@/components/hero";
import Navigation from "@/components/page7";
import { CarouselSize } from "@/components/page1"
import Featured from "@/components/page3";





export default function Home() {
  return (
  <main className="p-7 " >
 
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
  </main>
  )
}