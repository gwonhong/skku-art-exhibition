export default function Page({
  params,
}: {
  params: { googleDriveFolderId: string };
}) {
  return (
    <iframe
      className="w-full h-full"
      src={`https://drive.google.com/embeddedfolderview?id=${params.googleDriveFolderId}`}
    />
  );
}
