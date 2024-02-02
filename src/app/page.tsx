import NavBarExhibitions from "@/components/NavBarExhibitions";

export default function Home() {
  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto pr-4">
        <NavBarExhibitions />
      </div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black"></div>
    </body>
  );
}
