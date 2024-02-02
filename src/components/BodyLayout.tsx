export default function BodyLayout({
  leftPane,
  rightPane,
}: Readonly<{
  leftPane: JSX.Element;
  rightPane: JSX.Element;
}>) {
  return (
    <body className={"flex h-screen overflox-x-auto"}>
      <div className="h-full overflow-y-scroll">
        {leftPane}
      </div>
      <div className="h-full overflow-y-scroll flex-1 relative">
        {rightPane}
      </div>
    </body>
  );
}
