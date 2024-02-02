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
  const [iframeSrc, setIframeSrc] = useState(""); // Initialize the state for iframe src

  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto text-right pr-4">
        <NavBar
          currentExhibitionDate={params.exhibitionDate}
          setIframeSrc={setIframeSrc}
        />
      </div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black">
        <iframe className="w-full h-full" src={iframeSrc} />
      </div>
    </body>
  );
}
