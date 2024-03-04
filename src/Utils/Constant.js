import { GoHomeFill, GoTrophy } from "react-icons/go";
import { SiYoutubeshorts, SiYoutubegaming } from "react-icons/si";
import { BsCollectionPlayFill, BsCameraVideo } from "react-icons/bs";
import { RiHistoryLine } from "react-icons/ri";
import { AiOutlinePlaySquare, AiOutlineBulb } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { IoMusicalNotes } from "react-icons/io5";
import { IoMdWifi } from "react-icons/io";
import { HiMiniSignal } from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { TbHanger2 } from "react-icons/tb";

export const SideBarMenu = [
  {
    id: 1,
    logo: GoHomeFill,
    name: "Home",
  },
  {
    id: 2,
    logo: SiYoutubeshorts,
    name: "Shorts",
  },
  {
    id: 3,
    logo: BsCollectionPlayFill,
    name: "Subscriptions",
  },
  {
    id: 4,
    logo: RiHistoryLine,
    name: "History",
  },
  {
    id: 5,
    logo: AiOutlinePlaySquare,
    name: "Your Videos",
  },
  {
    id: 6,
    logo: FaRegClock,
    name: "Watch Later",
  },
];

export const ExploreMenu = [
  {
    id: 1,
    logo: BsFire,
    name: "Trending",
  },
  {
    id: 2,
    logo: FiShoppingBag,
    name: "Shopping",
  },
  {
    id: 3,
    logo: IoMusicalNotes,
    name: "Music",
  },
  {
    id: 4,
    logo: BsCameraVideo,
    name: "Movies",
  },
  {
    id: 5,
    logo: HiMiniSignal,
    name: "Live",
  },
  {
    id: 6,
    logo: SiYoutubegaming,
    name: "Gaming",
  },
  {
    id: 7,
    logo: LuNewspaper,
    name: "News",
  },
  {
    id: 8,
    logo: GoTrophy,
    name: "Sports",
  },
  {
    id: 9,
    logo: AiOutlineBulb,
    name: "Learning",
  },
  {
    id: 10,
    logo: TbHanger2,
    name: "Fashion & Beauty",
  },
  {
    id: 11,
    logo: IoMdWifi,
    name: "Podcast",
  },
];

export const btnValues = [
  "All",
  "Gaming",
  "programming",
  "React",
  "Redux",
  "Music",
  "News",
  "Trailers",
  "Comedy",
  "Cars",
  "Laptops",
  "Bolloywood",
  "Gadgets",
  "Podcasts",
  "Games",
  "GTAV",
  "PC",
  "Intel",
  "AMD",
  "GPU",
  "RAM",
  "RGB",
  "JS",
  "C++",
  "OOPs",
];

export const API_KEY = "AIzaSyBZvXSuGUi0k42jlR4JZ9rCMdX-NHNiWco";
// Watchpage VideoDetails
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=4sHlCovj-Ik&key=AIzaSyBZvXSuGUi0k42jlR4JZ9rCMdX-NHNiWco

// Subscriber count
// https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCt2JXOLNxqry7B_4rRZME3Q&key=AIzaSyBZvXSuGUi0k42jlR4JZ9rCMdX-NHNiWco
