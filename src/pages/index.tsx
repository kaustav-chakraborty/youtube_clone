import Image from "next/image";
import { Inter } from "next/font/google";
import {Card} from "@/components/Cards"
import { VideoCard } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/Leftbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <Appbar></Appbar>
    <div className="flex">
      <LeftBar></LeftBar>
     
      <VideoCard></VideoCard>
    </div>
    
    
    
   </div>
  );
}
