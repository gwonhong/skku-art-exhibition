import React from "react";
import { Contact, Exhibition } from "@/types";
import contactJson from "@/contact.json";
import exhibitionJson from "@/exhibitions.json";

export default function NavBar() {
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

  const exhibitionRows = (
    <>
      <tr key="exhibition-header" className="bg-[--color-1]">
        <th>연도</th>
        <th colSpan={2}>전시명</th>
      </tr>
      {exhibitions.map(exhibition => (
        <tr key={`exhibition-${exhibition.date}`} className="bg-[--color-2]">
          <td>
            <a href={`/${exhibition.date}`}>{exhibition.date}</a>
          </td>
          <td>
            <a href={`/${exhibition.date}`}>{exhibition.name}</a>
          </td>
        </tr>
      ))}
    </>
  );


  return (
    <nav className="h-full">
      <table className="w-96 h-full">
        <tbody>
          {contactRows}
          {exhibitionRows}
          <tr>
            <td colSpan={3} className="h-full"></td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
}
