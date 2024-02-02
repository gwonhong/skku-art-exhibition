import BodyLayout from "@/components/BodyLayout";
import NavBarExhibitions from "@/components/NavBarExhibitions";

export default function Home() {
  return <BodyLayout leftPane={<NavBarExhibitions />} rightPane={<></>} />;
}
