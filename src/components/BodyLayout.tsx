export default function BodyLayout({
  leftPane,
  rightPane,
}: Readonly<{
  leftPane: JSX.Element;
  rightPane: JSX.Element;
}>) {
  return (
    <body className={"flex h-screen"}>
      <div className="h-full overflow-y-auto pr-4">{leftPane}</div>
      <div className="h-full overflow-y-auto flex-1 border-l border-black relative">
        {rightPane}
      </div>
    </body>
  );
}
