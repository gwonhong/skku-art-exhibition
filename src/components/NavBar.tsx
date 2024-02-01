"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Contact, Exhibition } from "@/types";
import contactJson from "@/contact.json";
import exhibitionJson from "@/exhibitions.json";

// function NavBar() {
//   const contact: Contact = contactJson;
//   const exhibitions: Exhibitions = exhibitionJson;
//   const { exhibitionId: currentExhibitionId } = useParams() as {
//     exhibitionId: string | undefined;
//   };

//   const contactNav = Object.entries(contact).map(([key, value]) => (
//     <React.Fragment key={`contact-${key}`}>
//       <div className="col-span-3 font-bold bg-[--color-1]">{key}</div>
//       <div className="col-span-3">{value}</div>
//     </React.Fragment>
//   ));

//   const currentExhibition = currentExhibitionId
//     ? exhibitions[currentExhibitionId]
//     : null;
//   const exhibitionNav = (
//     <>
//       <div className="col-span-1 font-bold bg-[--color-1]">연도</div>
//       <div className="col-span-2 font-bold bg-[--color-1]">전시명</div>
//       {currentExhibition ? (
//         <a
//           key={`exhibition-${currentExhibitionId}`}
//           className="grid grid-cols-subgrid col-span-3 divide-x divide-black bg-[--color-2]"
//           href={"/"}
//         >
//           <div className="col-span-1">{currentExhibition.date}</div>
//           <div className="col-span-2">{currentExhibition.name}</div>
//         </a>
//       ) : (
//         Object.entries(exhibitions).map(([exhibitionId, exhibition]) => (
//           <a
//             key={`exhibition-${exhibitionId}`}
//             className="grid grid-cols-subgrid col-span-3 divide-x divide-black bg-[--color-2]"
//             href={`/${exhibitionId}`}
//           >
//             <div className="col-span-1">{exhibition.date}</div>
//             <div className="col-span-2">{exhibition.name}</div>
//           </a>
//         ))
//       )}
//     </>
//   );

//   const googleDriveFolderRegex =
//     /https:\/\/drive\.google\.com\/drive\/folders\/([a-zA-Z0-9_-]+)\?usp=share_link/;
//   const artworkNav = currentExhibition ? (
//     <>
//       <div className="font-bold bg-[--color-1]">번호</div>
//       <div className="font-bold bg-[--color-1]">작가명</div>
//       <div className="font-bold bg-[--color-1]">작품명</div>
//       {currentExhibition.artists.map((artist, artistIndex) => {
//         const link = artist.link;
//         const match = link.match(googleDriveFolderRegex);
//         let googleDriveFolderId: string | undefined;
//         if (match) {
//           googleDriveFolderId = match[1];
//         } else {
//           //   console.error(
//           //     `Failed to extract Google Drive folder ID from link of [${artist.name}]`
//           //   );
//         }
//         return (
//           <a
//             key={`artist-${artistIndex}`}
//             className={
//               "grid grid-cols-subgrid col-span-3 divide-x divide-black" +
//               (artistIndex % 2 ? " bg-[--color-2]" : "")
//             }
//             href={`/${currentExhibitionId}/${googleDriveFolderId}`}
//           >
//             <div
//               className={`row-span-${artist.artworks.length} expanded border-right-black`}
//             >
//               {artistIndex + 1}
//             </div>
//             <div
//               className={`row-span-${artist.artworks.length} expanded border-right-black`}
//             >
//               {artist.name}
//             </div>
//             {artist.artworks.map((artwork, artworkIndex) => (
//               <div
//                 key={`artwork-${artworkIndex}`}
//                 className={
//                   "col-start-3 row-span-1" +
//                   (artworkIndex !== 0 ? " border-t border-black" : "")
//                 }
//               >
//                 {artwork}
//               </div>
//             ))}
//           </a>
//         );
//       })}
//     </>
//   ) : null;

//   return (
//     <nav className="grid grid-cols-[4rem_6rem_12rem] border border-black divide-x divide-y divide-black">
//       {contactNav}
//       {exhibitionNav}
//       {artworkNav}
//       {/* <div className="grid grid-cols-subgrid col-span-3 divide-x divide-black">
//         <div className="row-span-2 expand">a</div>
//         <div className="row-span-2 expand">b</div>
//         <div>c</div>
//         <div>d</div>
//       </div> */}
//     </nav>
//   );
// }

export default function NavBarTable() {
  const contact: Contact = contactJson;
  const exhibitions: Exhibition[] = exhibitionJson;
  const { exhibitionId: currentExhibitionDate } = useParams() as {
    exhibitionId: string | undefined;
  };

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

  const currentExhibition = currentExhibitionDate
    ? exhibitions.find(item => item.date === currentExhibitionDate)
    : null;
  const exhibitionRows = (
    <>
      <tr key="exhibition-header" className="bg-[--color-1]">
        <th>연도</th>
        <th colSpan={2}>전시명</th>
      </tr>
      {currentExhibition ? (
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
      ) : (
        exhibitions.map(exhibition => (
          <tr key={`exhibition-${exhibition.date}`} className="bg-[--color-2]">
            <td>
              <a href={`/${exhibition.date}`}>{exhibition.date}</a>
            </td>
            <td>
              <a href={`/${exhibition.date}`}>{exhibition.name}</a>
            </td>
          </tr>
        ))
      )}
    </>
  );

  const googleDriveFolderRegex =
    /https:\/\/drive\.google\.com\/drive\/folders\/([a-zA-Z0-9_-]+)\?usp=share_link/;
  const artworkRows = currentExhibition ? (
    <>
      <tr className="bg-[--color-1]">
        <th>번호</th>
        <th>작가명</th>
        <th>작품명</th>
      </tr>
      {currentExhibition.artists.map((artist, artistIndex) => {
        const link = artist.link;
        const match = link.match(googleDriveFolderRegex);
        let googleDriveFolderId: string | undefined;
        if (match) {
          googleDriveFolderId = match[1];
        } else {
          //   console.error(
          //     `Failed to extract Google Drive folder ID from link of [${artist.name}]`
          //   );
        }
        return (
          <React.Fragment key={`artist-${artistIndex}`}>
            {artist.artworks.map((artwork, artworkIndex) => (
              <tr
                key={`artist-${artistIndex}-artwork-${artworkIndex}`}
                className={artistIndex % 2 ? "bg-[--color-2]" : ""}
              >
                {artworkIndex === 0 ? (
                  <>
                    <td rowSpan={artist.artworks.length} className="align-top">
                      <a
                        href={`/${currentExhibitionDate}/${googleDriveFolderId}`}
                      >
                        {artistIndex + 1}
                      </a>
                    </td>
                    <td rowSpan={artist.artworks.length} className="align-top">
                      <a
                        href={`/${currentExhibitionDate}/${googleDriveFolderId}`}
                      >
                        {artist.name}
                      </a>
                    </td>
                  </>
                ) : null}
                <td>
                  <a href={`/${currentExhibitionDate}/${googleDriveFolderId}`}>
                    {artwork}
                  </a>
                </td>
              </tr>
            ))}
          </React.Fragment>
        );
      })}
    </>
  ) : null;

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
