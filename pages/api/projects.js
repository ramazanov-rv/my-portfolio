import studio from "../../public/images/projects/ramazanov-studio.png";
import lakileki from "../../public/images/projects/lakileki.png";
import tg from "../../public/images/projects/tg.png";
import massage from "../../public/images/projects/massage-derbent.png";
import fork from "../../public/images/projects/fork.webp";
import rapid from "../../public/images/projects/rapid-launch.png";
import widget from "../../public/images/projects/widget.png";
import { nanoid } from "nanoid";
export const data = [
  {
    id: nanoid(),
    img: studio,
    title: "Ramazanov Studio",
    description:
      "Discover my Next.js project: A dynamic web studio crafting tailored websites, merging innovation and design for optimal online presence.",
    link: "https://ramazanov-studio.ru",
  },
  {
    id: nanoid(),
    img: lakileki,
    title: "Lakileki Sdelki",
    description:
      "Online platform ensuring the security of your P2P transactions.",
    link: "https://sdelki.lakileki.com",
  },
  {
    id: nanoid(),
    img: tg,
    title: "Dashboard",
    description:
      "Telegram widget based on React for managing profiles and viewing channel activity information.",
    link: "https://t.me/casp_ds_bot",
  },
  {
    id: nanoid(),
    img: massage,
    title: "Massage Studio",
    description:
      "The Derbent Massage Studio Company. The studio founder requested a website to boost their sales and online presence.",
    link: "https://massagederbent.vercel.app/",
  },
  {
    id: nanoid(),
    img: widget,
    title: "VK App",
    description:
      "VK Widget creation for your community is among our capabilities. Witness a popular VK group widget accumulating various 'currency'",
    link: "https://vk.ru/app51521137",
  },
  {
    id: nanoid(),
    img: rapid,
    title: "Rapid Launch",
    description:
      "My strength lies in original design. Websites tailored specifically to your niche, attracting clients with precision and creativity.",
    link: "https://greenway-rapid-launch.vercel.app/",
  },
  {
    id: nanoid(),
    img: fork,
    title: "Fork Careers",
    description:
      "A startup project aiming to create potential career trajectories based on user responses and preferences.",
    link: "https://staging.forkcareers.com/",
  },
];
