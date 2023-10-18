"use client";
import { getAppAddress } from "@/utils/config";
import Badge, { BadgeTypes } from "./Badge";

const GalleryItem = () => {
  const appAddress = getAppAddress();
  return (
    <div className="shadow-lg rounded">
      <img
        src={`${appAddress}/images/screens/appsmith/appsmith.png`}
        className="rounded-t"
      />
      <div className="p-5">
        <h4 className="text-lg font-medium text-blue-700 mb-2">appsmith</h4>
        <p className="text-sm text-slate-500">
          Open-source, low-code platform to build internal apps quickly
        </p>
      </div>
      <div className="p-5 pt-0">
        <div className="flex flex-wrap items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 6h.008v.008H6V6z"
            />
          </svg>

          <Badge message="Developer tools" />
          <Badge message="SaaS" type={BadgeTypes.SUCCESS} />
          <Badge message="risk" type={BadgeTypes.DANGER} />
          <Badge message="love" type={BadgeTypes.LOVE} />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => (
  <section className="py-2">
    <div className="container mx-auto">
      <div className="text-center aos-init aos-animate" data-aos="fade-up">
        <h2 className="md:text-3xl text-xl font-semibold my-5">
          Explore Our Gallery of Innovative App Screens
        </h2>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>

      <button className="flex items-center justify-center mx-auto mb-6 pt-4">
        <a
          className="inline-flex items-center justify-center rounded text-xs font-semibold border border-blue-700 text-blue-700 hover:shadow-lg hover:bg-blue-700 hover:text-white hover:shadow-blue-700/30 focus:shadow-none focus:outline focus:outline-blue-700/40 px-3 py-2 group"
          href="/prompt_tr/pages/dashboard"
        >
          <span className="animate-spin inline-block h-4 w-4 border-2 border-blue-700 border-b-transparent group-hover:border-white group-hover:border-b-transparent rounded-full align-[-.125em] me-2"></span>{" "}
          Load More
        </a>
      </button>
    </div>
  </section>
);

export default Gallery;
