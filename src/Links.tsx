import { JSX } from "react";

type T_LIST_LINKS = {
  id: number;
  img_src: string;
  img_alt: string;
  web_url: string;
  web_title: string;
}[];

type T_CB_LINKS = {
  id: number;
  img_src: string;
  img_alt: string;
  web_url: string;
  web_title: string;
};

const LIST_LINKS: T_LIST_LINKS = [
  {
    id: 0,
    img_src:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    img_alt: "x logo",
    web_url: "https://x.com/QkiJose",
    web_title: "X",
  },
  {
    id: 1,
    img_src:
      "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
    img_alt: "linkedin logo",
    web_url: "https://www.linkedin.com/in/jlvillarreal/",
    web_title: "Linkedin",
  },
  { id: 2, img_src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", img_alt: "", web_url: "https://github.com/DouyaQki", web_title: "Github" },
  { id: 3, img_src: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg", img_alt: "youtube logo", web_url: "https://www.youtube.com/@QkiJose", web_title: "YouTube" },
];
// { id: 4, img_src: "", img_alt: "", web_url: "", web_title: "" },

const CB_LI = ({
  id,
  img_src,
  img_alt,
  web_url,
  web_title,
}: T_CB_LINKS): JSX.Element => {
  return (
    <li key={id} className="bg-[#f6f6f6] rounded-md p-2 flex items-center transition duration-300 ease-in-out hover:bg-[#0069a8]">
      <a href={web_url} target="_blank" rel="noreferrer" className="w-full flex gap-2">
        <img src={img_src} alt={img_alt} className="h-7" />
        {web_title}
      </a>
    </li>
  );
};

function Links() {
  return (
    <section className="flex flex-col justify-center items-center">
      <ul className="w-2/3 flex flex-col gap-4">{LIST_LINKS.map(CB_LI)}</ul>
    </section>
  );
}

export default Links;
