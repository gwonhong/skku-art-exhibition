import React from "react";

import { Exhibition } from "@/types";
import exhibitionJson from "@/exhibitions.json";

import NavBar from "@/components/NavBar";

export default function NavBarExhibitions() {
  const exhibitions: Exhibition[] = exhibitionJson;

  const exhibitionRows = (
    <>
      <tr key="exhibition-header" className="bg-[--color-1]">
        <th colSpan={2}>연도</th>
        <th>전시명</th>
      </tr>
      {exhibitions.map(exhibition => (
        <tr key={`exhibition-${exhibition.date}`} className="bg-[--color-2]">
          <td colSpan={2}>
            <a href={`/${exhibition.date}`}>{exhibition.date}</a>
          </td>
          <td>
            <a href={`/${exhibition.date}`}>{exhibition.name}</a>
          </td>
        </tr>
      ))}
    </>
  );

  return <NavBar exhibitionRows={exhibitionRows} />;
}
