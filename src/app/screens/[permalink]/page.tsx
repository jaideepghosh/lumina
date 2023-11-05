import ImageGallery from "@/components/ImageGallery";
import ScreenHeader from "@/components/ScreenHeader";

type Props = {
  params: { permalink: string };
};

export default function AppScreen(props: Props) {
  const { params } = props;
  const images = [
    "/images/screens/appsmith/appsmith.png",
    "/images/screens/appsmith/appsmith-2.png",
    "/images/screens/appsmith/appsmith-3.png",
    "/images/screens/appsmith/appsmith-4.png",
    "/images/screens/appsmith/appsmith-5.png",
  ];
  return (
    <div>
      <section className="pt-10 pb-4 container mx-auto min-h-screen">
        <ScreenHeader />
        <ImageGallery images={images} />
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  return [{ permalink: "google" }, { permalink: "appsmith" }];
}
