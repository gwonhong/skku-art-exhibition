import NavBar from "@/components/NavBarExhibitions";

export default function Home() {
  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto text-right pr-4">
        <NavBar />
      </div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black"></div>
    </body>
  );
}
