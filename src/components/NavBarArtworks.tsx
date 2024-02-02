import React from "react";
import { Contact, Exhibition } from "@/types";
import contactJson from "@/contact.json";
import exhibitionJson from "@/exhibitions.json";
import { permanentRedirect } from "next/navigation";

function convertGoogleDriveLink(link: string) {
  const googleDriveFolderRegex =
    /https:\/\/drive\.google\.com\/drive\/folders\/(?<googleDriveFolderId>[a-zA-Z0-9_-]+)\?usp=share_link/;
  const googleDriveFolderId = link.match(googleDriveFolderRegex)?.groups?.googleDriveFolderId;

  return googleDriveFolderId ? `https://drive.google.com/embeddedfolderview?id=${googleDriveFolderId}` : link;
}

export default function NavBar({
  currentExhibitionDate,
  updateIframeSrc,
}: {
  currentExhibitionDate: string;
  updateIframeSrc: (src: string) => void;
}) {
  const contact: Contact = contactJson;
  const exhibitions: Exhibition[] = exhibitionJson;

  const contactRows = Object.entries(contact).map(([key, value]) => (
    <React.Fragment key={`contact-${key}`}>
      <tr key={`contact-${key}-header`} className="bg-[--color-1]">
        <th colSpan={3}>{key}</th>
      </tr>
      <tr key={`contact-${key}-value`}>
        <td colSpan={3}>{value}</td>
      </tr>
    </React.Fragment>
  ));

  const currentExhibition = exhibitions.find(
    item => item.date === currentExhibitionDate
  );
  if (currentExhibition === undefined) {
    permanentRedirect("/");
  }

  const exhibitionRows = (
    <>
      <tr key="exhibition-header" className="bg-[--color-1]">
        <th>연도</th>
        <th colSpan={2}>전시명</th>
      </tr>
      <tr
        key={`exhibition-${currentExhibitionDate}`}
        className="bg-[--color-2]"
      >
        <td>
          <a href={"/"}>{currentExhibition.date}</a>
        </td>
        <td colSpan={2}>
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
                className={"cursor-pointer" + (artistIndex % 2 ? " bg-[--color-2]" : "")}
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

  return (
    <nav className="h-full">
      <table className="w-96 h-full">
        <tbody>
          {contactRows}
          {exhibitionRows}
          {artworkRows}
          <tr>
            <td colSpan={3} className="h-full"></td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
}
