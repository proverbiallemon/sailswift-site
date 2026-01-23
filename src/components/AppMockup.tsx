export function AppMockup() {
  return (
    <div className="w-full max-w-[780px] mx-auto">
      <div className="pixel-orange rounded-sm p-1.5 bg-orange">
        <div className="pixel-inset bg-dark crt-flicker crt-glow">
          {/* it's dangerous to go alone, take this mockup */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-black border-b-[3px] border-blue">
            <div className="w-2.5 h-2.5 bg-red dot-red" />
            <div className="w-2.5 h-2.5 bg-orange dot-yellow" />
            <div className="w-2.5 h-2.5 bg-[#28c840] dot-green" />
            <span className="flex-1 text-center font-pixel text-[0.5rem] text-blue mr-7">SAILSWIFT</span>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/50 border-b border-blue-dark/50">
            {/* Left action buttons */}
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-sm border border-retro-gray/30" />
              <div className="w-3 h-3 rounded-sm border border-retro-gray/30" />
              <div className="w-3 h-3 rounded-sm border border-retro-gray/30" />
            </div>
            <div className="flex-1" />
            {/* Tabs */}
            <div className="flex items-center border border-retro-gray/30 rounded-sm overflow-hidden">
              <span className="font-pixel text-[0.4rem] text-orange px-2 py-0.5 bg-retro-gray/10">MY MODS</span>
              <span className="font-pixel text-[0.4rem] text-retro-gray px-2 py-0.5">BROWSE</span>
            </div>
            {/* Play button */}
            <div className="w-4 h-4 rounded-sm border border-retro-gray/30 flex items-center justify-center">
              <span className="text-[0.5rem] text-retro-gray/70 leading-none ml-[1px]">▶</span>
            </div>
            {/* Search bar - far right */}
            <div className="w-20 h-4 border border-retro-gray/30 rounded-sm bg-black/30 flex items-center px-1.5">
              <span className="text-[0.6rem] text-retro-gray/50">Search...</span>
            </div>
          </div>

          {/* Body - 3 panels */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr_160px] min-h-[300px]">

            {/* Left sidebar - mod tree + profiles + load order */}
            <div className="hidden sm:flex flex-col border-r border-blue-dark/30 overflow-hidden">
              {/* Mod tree */}
              <div className="p-2 flex-1">
                <div className="flex items-center gap-1.5 py-1">
                  <div className="w-2 h-2 bg-[#28c840] indicator-on" />
                  <div className="h-2 w-20 bg-retro-gray/30 rounded-sm" />
                </div>
                {[16, 14, 12, 10, 18].map((width, i) => (
                  <div key={i} className={`flex items-center gap-1.5 py-0.5 pl-3 ${i === 0 ? 'bg-blue/15' : ''}`}>
                    <div className="w-1.5 h-1.5 bg-[#28c840] indicator-on" />
                    <div className={`h-1.5 rounded-sm ${i === 0 ? 'bg-blue/40' : 'bg-retro-gray/25'}`} style={{ width: `${width * 4}px` }} />
                  </div>
                ))}
              </div>

              {/* Profiles section */}
              <div className="border-t border-blue-dark/30 p-2">
                <span className="font-pixel text-[0.35rem] text-orange">PROFILES</span>
                <div className="mt-1.5 h-1.5 w-14 bg-retro-gray/25 rounded-sm" />
                <div className="mt-1 h-1.5 w-10 bg-retro-gray/25 rounded-sm" />
              </div>

              {/* Load order section */}
              <div className="border-t border-blue-dark/30 p-2">
                <span className="font-pixel text-[0.35rem] text-orange">LOAD ORDER</span>
                <div className="mt-1.5 h-1.5 w-20 bg-retro-gray/25 rounded-sm" />
                <div className="mt-1 h-1.5 w-16 bg-retro-gray/25 rounded-sm" />
                <div className="mt-1 h-1.5 w-18 bg-retro-gray/25 rounded-sm" />
              </div>
            </div>

            {/* Center panel - mod detail */}
            <div className="p-3 border-r border-blue-dark/30">
              {/* Mod name + status */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-[#28c840] flex items-center justify-center">
                  <span className="text-[0.5rem] text-black font-bold">✓</span>
                </div>
                <div>
                  <div className="h-2.5 w-16 bg-retro-gray/35 rounded-sm mb-1" />
                  <div className="h-1.5 w-12 bg-[#28c840]/30 rounded-sm" />
                </div>
                <div className="flex-1" />
                <div className="px-2 py-1 border border-retro-gray/40 text-[0.55rem] text-retro-gray rounded-sm">Disable</div>
              </div>

              {/* File info */}
              <div className="flex flex-col gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-retro-gray">File:</span>
                  <div className="h-1.5 w-20 bg-retro-gray/25 rounded-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-retro-gray">Location:</span>
                  <div className="h-1.5 w-28 bg-retro-gray/25 rounded-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.7rem] text-retro-gray">Extension:</span>
                  <div className="h-1.5 w-8 bg-retro-gray/25 rounded-sm" />
                </div>
              </div>

              {/* Show in Finder button */}
              <div className="inline-block px-2 py-1 border border-retro-gray/40 text-[0.6rem] text-retro-gray rounded-sm">
                Show in Finder
              </div>
            </div>

            {/* Right panel - GameBanana */}
            <div className="hidden sm:flex flex-col p-2">
              <span className="font-pixel text-[0.35rem] text-orange mb-2">GAMEBANANA</span>

              {/* Search/filter */}
              <div className="w-full h-4 border border-retro-gray/30 rounded-sm bg-black/30 flex items-center px-1.5 mb-2">
                <div className="h-1.5 w-16 bg-retro-gray/20 rounded-sm" />
              </div>

              {/* Mod card */}
              <div className="border border-blue-dark/50 bg-black/30 p-1.5 rounded-sm">
                <div className="w-full h-12 bg-red-dark/20 rounded-sm mb-1.5" />
                <div className="h-1.5 w-24 bg-retro-gray/30 rounded-sm mb-1" />
                <div className="flex gap-2">
                  <div className="h-1.5 w-6 bg-retro-gray/20 rounded-sm" />
                  <div className="h-1.5 w-5 bg-retro-gray/20 rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
