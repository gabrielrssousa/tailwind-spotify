import { HomeIcon, Library, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">

        {/* IOS Dots (prank test) */} {/*
        <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
        <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div> */}

        <nav className="space-y-5 mt-10">
        <a href="#" className="flex items-center gap-2 text-xm font-semibold text-zinc-200">
            <HomeIcon/>
            Home
        </a>
        <a href="#" className="flex items-center gap-2 text-xm font-semibold text-zinc-200">
            <Search/>
            Search
        </a>
        <a href="#" className="flex items-center gap-2 text-xm font-semibold text-zinc-200">
              <Library/>
              Library
        </a>
        </nav>
        <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-3">
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"> Top Brasil </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"> Daily Mix 2 </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"> My Playlist #21 </a>
        <a href="#" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors"> This is Måneskin </a>
        </nav>
    </aside>
  );
}