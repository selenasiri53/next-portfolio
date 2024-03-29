"use client";
import { TunisContext } from "@/context/context";
import SectionContainer from "@/layouts/SectionContainer";
import { useContext } from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";

const items = [
  {
    id: 1,
    title: "Next.js Dashboard",
    type: "img",
    src: "https://nextjs-dashboard-app-two.vercel.app/dashboard",
    img: "/assets/img/dashboard.png",
    project: "Internal Dashboard System",
    client: "Freelance",
    langages: "Next.js",
    previewLink: "https://nextjs-dashboard-app-two.vercel.app/dashboard",
  },
  // {
  //   id: 2,
  //   title: "Music Playlist",
  //   type: "img",
  //   src: "",
  //   img: "/assets/img/projects/project-2.jpg",
  //   project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "https://opera-pop-spotify.netlify.app/",
  // },
  {
    id: 3,
    title: "Vue Friend Contact",
    type: "img",
    src: "",
    img: "/assets/img/projects/project-3.jpg",
    project: "Website",
    client: "Freelance",
    langages: "Vue, HTML, CSS",
    previewLink: "https://vue-friend-contact.vercel.app/",
  },
  {
    id: 4,
    title: "Movies App",
    type: "img",
    src: "",
    img: "/assets/img/projects/project-4.jpg",
    project: "Website",
    client: "Freelance",
    langages: "React, React Hooks, Redux, HTML, CSS",
    previewLink: "https://nextjs-ts-movies.vercel.app/movies",
  },
  {
    id: 5,
    title: "Github Finder",
    type: "img",
    src: "",
    img: "/assets/img/projects/project-5.jpg",
    project: "Website",
    client: "Freelance",
    langages: "React",
    previewLink: "https://selena-github-finder.netlify.app/",
  },
  // {
  //   id: 6,
  //   title: "Image Project",
  //   type: "img",
  //   src: "",
  //   img: "assets/img/projects/project-6.jpg",
  //   project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
  // {
  //   id: 7,
  //   title: "Image Project",
  //   type: "img",
  //   src: "",
  //   img: "assets/img/projects/project-7.jpg",
  //   project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
  // {
  //   id: 8,
  //   title: "Image Project",
  //   type: "img",
  //   src: "",
  //   img: "assets/img/projects/project-8.jpg",
  //   project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
  // {
  //   id: 9,
  //   title: "Image Project",
  //   type: "img",
  //   src: "",
  //   img: "assets/img/projects/project-9.jpg",
  //   project: "Website",
  //   client: "Envato",
  //   langages: "HTML, CSS, Javascript",
  //   previewLink: "www.envato.com",
  // },
];

const Portfolio = () => {
  const { popupToggle } = useContext(TunisContext);
  return (
    <SectionContainer id="portfolio">
      <div className="w-full pb-60">
        {/* Section Title Starts */}
        <SectionTitle
          bigTitle={"works"}
          colorTitle={"portfolio"}
          normalTitle={"my"}
        />
        {/* Section Title Ends */}
        {/* Portfolio Items Starts */}
        <div className="-mt-15 pb-60 xs:pb-20 portfolio">
          <div
            id="grid-gallery"
            className="xl:max-w-1140 custom-md-3:max-w-[calc(100%-195px)] md:max-w-720 sm:max-w-540 xs:max-w-full mx-auto"
          >
            {/* Portfolio Grid Starts */}
            <div className="grid-wrap mx-auto mb-25">
              <ul className="gridlist">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="w-1/3 down-lg:w-1/2 xs:w-full float-left cursor-pointer p-15 xs:px-0"
                    onClick={() => popupToggle(item)}
                  >
                    <figure className="transition duration-300 rounded-5 relative overflow-hidden">
                      {/* <img
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                      /> */}

                      {/* IMAGE tag --test*/}
                      <Image
                        className="block relative w-full rounded-5 transition duration-300"
                        src={item.img}
                        alt=""
                        width="300"
                        height="250"
                      />
                      <div className="absolute w-full h-full flex items-center justify-center bg-accent">
                        <span className="uppercase text-fs-18 text-white">
                          {item.title}
                        </span>
                      </div>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            {/* Portfolio Grid Ends */}
          </div>
        </div>
        {/* Portfolio Items Ends */}
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
