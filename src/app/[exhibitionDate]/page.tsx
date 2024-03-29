"use client";

import { useState } from "react";
import BodyLayout from "@/components/BodyLayout";
import NavBarArtworks from "@/components/NavBarArtworks";

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
    <BodyLayout
      leftPane={
        <NavBarArtworks
          currentExhibitionDate={params.exhibitionDate}
          updateIframeSrc={updateIframeSrc}
        />
      }
      rightPane={
        <>
          {iframeLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 opacity-60"></div>
          )}
          <iframe
            className="w-full h-full"
            src={iframeSrc}
            onLoad={() => setIframeLoading(false)}
          />
        </>
      }
    />
  );
}
