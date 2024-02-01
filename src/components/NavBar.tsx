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
      <div className="col-span-3">{key}</div>
      <div className="col-span-3">{value}</div>
    </React.Fragment>
  ));

  const currentExhibition = currentExhibitionId
    ? exhibitions[currentExhibitionId]
    : null;
  const exhibitionNav = (
    <div className="grid grid-cols-subgrid col-span-3">
      <div className="col-span-1">연도</div>
      <div className="col-span-2">전시명</div>
      {currentExhibition ? (
        <a
          key={`exhibition-${currentExhibitionId}`}
          className="grid grid-cols-subgrid col-span-3"
          href={"/"}
        >
          <div className="col-span-1">{currentExhibition.date}</div>
          <div className="col-span-2">{currentExhibition.name}</div>
        </a>
      ) : (
        Object.entries(exhibitions).map(([exhibitionId, exhibition]) => (
          <a
            key={`exhibition-${exhibitionId}`}
            className="grid grid-cols-subgrid col-span-3"
            href={`/${exhibitionId}`}
          >
            <div className="col-span-1">{exhibition.date}</div>
            <div className="col-span-2">{exhibition.name}</div>
          </a>
        ))
      )}
    </div>
  );

  const artworkNav = currentExhibition ? (
    <div className="grid grid-cols-subgrid col-span-3">
      <div>번호</div>
      <div>작가명</div>
      <div>작품명</div>
      {currentExhibition.artists.map((artist, artistIndex) =>
        artist.artworks.map((artwork, artworkIndex) => (
          <>
            {artworkIndex === 0 ? (
              <>
                <div className={`row-span-${artist.artworks.length}`}>
                  {artistIndex + 1}
                </div>
                <div className={`row-span-${artist.artworks.length}`}>
                  {artist.name}
                </div>
              </>
            ) : null}
            <div>{artwork}</div>
          </>
        ))
      )}
    </div>
  ) : null;

  return (
    <div className="grid grid-cols-3">
      {contactNav}
      {exhibitionNav}
      {artworkNav}
    </div>
  );
}
