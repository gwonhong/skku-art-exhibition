"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Contact, Exhibitions, Exhibition, Artist } from "@/types";
import contactJson from "@/contact.json";
import exhibitionJson from "@/exhibitions.json";

export default function NavBar() {
  const contact: Contact = contactJson;
  const exhibitions: Exhibitions = exhibitionJson;
  const { exhibitionId: currentExhibitionId, artistId: currentArtistId } =
    useParams() as {
      exhibitionId: string | undefined;
      artistId: string | undefined;
    };

  const contactNav = Object.entries(contact).map(([key, value]) => (
    <React.Fragment key={`contact-${key}`}>
      <tr key={`contact-${key}-key`}>
        <th colSpan={3}>{key}</th>
      </tr>
      <tr key={`contact-${key}-value`}>
        <td colSpan={3}>{value}</td>
      </tr>
    </React.Fragment>
  ));

  const currentExhibition = currentExhibitionId
    ? exhibitions[currentExhibitionId]
    : null;
  const exhibitionNav = (
    <>
      <tr key="exhibition-header">
        <th>연도</th>
        <th colSpan={2}>전시명</th>
      </tr>
      {currentExhibition ? (
        <tr key={`exhibition-${currentExhibitionId}`}>
          <td>{currentExhibition.date}</td>
          <td colSpan={2}>{currentExhibition.name}</td>
        </tr>
      ) : (
        Object.entries(exhibitions).map(([exhibitionId, exhibition]) => {
          return (
            <tr key={`exhibition-${exhibitionId}`}>
              <td>{exhibition.date}</td>
              <td colSpan={2}>{exhibition.name}</td>
            </tr>
          );
        })
      )}
    </>
  );

  const artworkNav = currentExhibition ? (
    <>
      <tr key="artwork-header">
        <th>번호</th>
        <th>작가명</th>
        <th>작품명</th>
      </tr>
      {currentExhibition.artists.map((artist, artistIndex) =>
        artist.artworks.map((artwork, artworkIndex) => (
          <tr key={`artist-${artistIndex}-artwork-${artworkIndex}`}>
            {artworkIndex === 0 ? (
              <>
                <td rowSpan={artist.artworks.length}>{artistIndex + 1}</td>
                <td rowSpan={artist.artworks.length}>{artist.name}</td>
              </>
            ) : null}
            <td>{artwork}</td>
          </tr>
        ))
      )}
    </>
  ) : null;

  return (
    <table>
      <tbody>
        {contactNav}
        {exhibitionNav}
        {artworkNav}
      </tbody>
    </table>
  );
}
