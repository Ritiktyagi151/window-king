"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RotateCcw, X } from "lucide-react";

type Room = {
  name: string;
  panorama: string;
  thumb: string;
};

const rooms: Room[] = [
  {
    name: "Hotel Room",
    panorama: "/panoramas/hotel-room.jpg",
    thumb: "/panoramas/hotel-room.jpg",
  },
];

export default function VirtualTourPage() {
  const [activeRoom, setActiveRoom] = useState(rooms[0]);

  return (
    <main className="fixed inset-0 z-[1000] bg-[#090614] text-white">
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] backdrop-blur-md sm:left-6 sm:top-6 sm:text-xs">
        <RotateCcw size={16} className="text-[#F85A21]" />
        Live 360 View: Use Mouse To Rotate
      </div>

      <Link
        href="/"
        aria-label="Close virtual showroom tour and go home"
        className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#362A71] shadow-xl transition-colors hover:bg-[#F85A21] hover:text-white sm:right-6 sm:top-6"
      >
        <X size={22} />
      </Link>

      <PanoramaViewer room={activeRoom} />

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-5 pt-16">
        <div className="mx-auto flex max-w-5xl gap-3 overflow-x-auto pb-1">
          {rooms.map((room) => {
            const isActive = room.name === activeRoom.name;

            return (
              <button
                key={room.name}
                type="button"
                onClick={() => setActiveRoom(room)}
                className={`relative h-20 w-36 shrink-0 overflow-hidden rounded-lg border text-left transition-all sm:h-24 sm:w-44 ${
                  isActive
                    ? "border-[#F85A21] ring-2 ring-[#F85A21]/60"
                    : "border-white/20 hover:border-white/70"
                }`}
              >
                <img
                  src={room.thumb}
                  alt={`${room.name} panorama thumbnail`}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-black uppercase tracking-widest">
                  {room.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </main>
  );
}

function PanoramaViewer({ room }: { room: Room }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewerRef = useRef<import("@photo-sphere-viewer/core").Viewer | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const setupViewer = async () => {
      if (!containerRef.current) return;

      setIsLoading(true);
      setError("");

      try {
        const { Viewer } = await import("@photo-sphere-viewer/core");

        if (!isMounted || !containerRef.current) return;

        viewerRef.current?.destroy();
        viewerRef.current = new Viewer({
          container: containerRef.current,
          panorama: room.panorama,
          caption: room.name,
          loadingImg: "/windowking.png",
          mousewheel: true,
          navbar: ["zoom", "move", "fullscreen"],
          defaultZoomLvl: 5,
        });

        viewerRef.current.addEventListener("panorama-loaded", () => {
          if (isMounted) setIsLoading(false);
        });

        viewerRef.current.addEventListener("panorama-error", () => {
          if (!isMounted) return;
          setIsLoading(false);
          setError(
            `${room.name} panorama is not available yet. Add a 2:1 equirectangular image at ${room.panorama}.`
          );
        });
      } catch {
        if (!isMounted) return;
        setIsLoading(false);
        setError("Unable to load the 360 viewer. Please try again later.");
      }
    };

    setupViewer();

    return () => {
      isMounted = false;
      viewerRef.current?.destroy();
      viewerRef.current = null;
    };
  }, [room]);

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full" />

      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#090614]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-[#F85A21]" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
              Loading 360 Showroom
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#090614] px-4 text-center">
          <div className="max-w-lg rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <p className="text-lg font-black text-white">Panorama Not Found</p>
            <p className="mt-3 text-sm leading-6 text-white/75">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}
