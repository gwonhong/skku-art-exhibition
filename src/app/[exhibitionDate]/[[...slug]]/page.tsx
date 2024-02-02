import NavBar from "@/components/NavBarArtworks";
import { permanentRedirect } from "next/navigation";

export default function Page({
  params,
}: {
  params: {
    exhibitionDate: string;
    slug: string[] | undefined;
  };
}) {
  let googleDriveFolderId: string | undefined;
  if (params.slug !== undefined) {
    if (params.slug.length > 1) permanentRedirect("/" + params.exhibitionDate);
    else googleDriveFolderId = params.slug[0];
  }

  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto text-right pr-4">
        <NavBar currentExhibitionDate={params.exhibitionDate} />
      </div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black">
        <iframe
          className="w-full h-full"
          src={
            googleDriveFolderId
              ? `https://drive.google.com/embeddedfolderview?id=${googleDriveFolderId}`
              : undefined
          }
        />
      </div>
    </body>
  );
}
