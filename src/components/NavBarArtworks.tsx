import React from "react";
import { redirect } from "next/navigation";

import { Exhibition } from "@/types";
import exhibitionJson from "@/exhibitions.json";

import NavBar from "@/components/NavBar";

function convertGoogleDriveLink(link: string) {
  const googleDriveFolderRegex =
    /https:\/\/drive\.google\.com\/drive\/folders\/(?<googleDriveFolderId>[a-zA-Z0-9_-]+)\?.*/;
  const googleDriveFolderId = link.match(googleDriveFolderRegex)?.groups
    ?.googleDriveFolderId;

  return googleDriveFolderId
    ? `https://drive.google.com/embeddedfolderview?id=${googleDriveFolderId}`
    : link;
}

export default function NavBarArtworks({
  currentExhibitionDate,
  updateIframeSrc,
}: {
  currentExhibitionDate: string;
  updateIframeSrc: (src: string) => void;
}) {
  const exhibitions: Exhibition[] = exhibitionJson;

  const currentExhibition = exhibitions.find(
    item => item.date === currentExhibitionDate
  );
  if (currentExhibition === undefined) {
    redirect("/");
  }

  const exhibitionRows = (
    <>
      <tr key="exhibition-header" className="bg-[--color-1]">
        <th colSpan={2}>연도</th>
        <th>전시명</th>
      </tr>
      <tr
        key={`exhibition-${currentExhibitionDate}`}
        className="bg-[--color-2]"
      >
        <td colSpan={2}>
          <a href={"/"}>{currentExhibition.date}</a>
        </td>
        <td>
          <a href={"/"}>{currentExhibition.name}</a>
        </td>
      </tr>
    </>
  );

  const artworkRows = (
    <>
      <tr className="bg-[--color-1]">
        <th>번호</th>
        <th>작가명</th>
        <th>작품명</th>
      </tr>
      {currentExhibition.artists.map((artist, artistIndex) => {
        const link = convertGoogleDriveLink(artist.link);
        return (
          <React.Fragment key={`artist-${artistIndex}`}>
            {artist.artworks.map((artwork, artworkIndex) => (
              <tr
                key={`artist-${artistIndex}-artwork-${artworkIndex}`}
                className={
                  "cursor-pointer" + (artistIndex % 2 ? " bg-[--color-2]" : "")
                }
                onClick={link ? () => updateIframeSrc(link) : undefined}
              >
                {artworkIndex === 0 ? (
                  <>
                    <td rowSpan={artist.artworks.length} className="align-top">
                      {artistIndex + 1}
                    </td>
                    <td rowSpan={artist.artworks.length} className="align-top">
                      {artist.name}
                    </td>
                  </>
                ) : null}
                <td>{artwork}</td>
              </tr>
            ))}
          </React.Fragment>
        );
      })}
    </>
  );

  return <NavBar exhibitionRows={exhibitionRows} artworkRows={artworkRows} />;
}
