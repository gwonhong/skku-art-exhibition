"use client";

import { useState } from "react";
import NavBar from "@/components/NavBarArtworks";

export default function Page({
  params,
}: {
  params: {
    exhibitionDate: string;
  };
}) {
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeLoading, setIframeLoading] = useState(false);

  function updateIframeSrc(src: string) {
    if (src === iframeSrc) return;
    setIframeSrc(src);
    setIframeLoading(true);
  }

  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto">
        <NavBar
          currentExhibitionDate={params.exhibitionDate}
          updateIframeSrc={updateIframeSrc}
        />
      </div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black relative">
        {iframeLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 opacity-60"></div>
        )}
        <iframe
          className="w-full h-full"
          src={iframeSrc}
          onLoad={() => setIframeLoading(false)}
        />
      </div>
    </body>
  );
}
