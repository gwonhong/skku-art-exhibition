import React from "react";
import { Contact } from "@/types";
import contactJson from "@/contact.json";

export default function NavBar({
  exhibitionRows,
  artworkRows,
}: {
  exhibitionRows?: JSX.Element;
  artworkRows?: JSX.Element;
}) {
  const contact: Contact = contactJson;
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

  return (
    <nav className="h-full">
      <table className="w-96 h-full">
        <colgroup>
          <col span={1} className="w-2/12" />
          <col span={1} className="w-3/12" />
          <col span={1} className="w-7/12" />
        </colgroup>
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
