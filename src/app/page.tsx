 /* eslint-disable @next/next/no-img-element */
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import {
  Home as 
  ChevronLeft,
  ChevronRight,
  Play
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={104} height={104} />
              <strong>Rush! (Are U Coming?)</strong>
              <button
                className="
                flex
                w-12
                h-12
                pl-1
                mr-8
                ml-auto
                items-center
                justify-center
                rounded-full
                bg-green-400
                text-black
                invisible
                group-hover:visible"
              >
                <Play/>
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Gabriel Sousa</h2>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
            <a href="#" className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <img src="/covers/rush.jpg" alt="Rush! (Are U Coming?)" width={120} height={120} className="w-full"/>
              <strong className="font-semibold">Rush! (Are U Coming?)</strong>
              <span className="text-sm">Måneskin</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
