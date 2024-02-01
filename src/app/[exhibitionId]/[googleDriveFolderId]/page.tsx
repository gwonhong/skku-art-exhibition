export default function Page({ params }: { params: { googleDriveFolderId: string } }) {
  return (
    <iframe src={`https://drive.google.com/embeddedfolderview?id=${params.googleDriveFolderId}`} />
  );
}
