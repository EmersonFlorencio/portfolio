import { CssIcon } from "../components/icons/css-icon";
import { HtmlIcon } from '../components/icons/html-icon';
import { JavascriptIcon } from "../components/icons/javascript-icon";
import { ReactIcon } from "../components/icons/react-icon";
import { NodejsIcon } from "../components/icons/nodejs-icon";
import { TypescriptIcon } from "../components/icons/typescript-icon";
import { ReduxIcon } from "../components/icons/redux-icon";
import { DockerIcon } from "../components/icons/docker-icon";
import { MysqlIcon } from "../components/icons/mysql-icon";
import { MongodbIcon } from "../components/icons/mongodb-icon";

import TrybetunesIMG from '../../public/asserts/TrybeTunesImg.png'
import StarWarsImg from '../../public/asserts/StarWarsSearchPlanetsImg.png'
import SolarSystemImg from '../../public/asserts/SolarSystemImg.png'
import TrybeWallet from '../../public/asserts/TrybeWalletImg.png'
import TrybeAndDragons from '../../public/asserts/TrybesAndDragonsImg.png'
import BlogsApi from '../../public/asserts/BlogsApiImg.png'

export const icons = [
  {id: 1, icon: <ReactIcon />},
  {id: 2, icon: <JavascriptIcon />}, 
  {id: 3, icon: <CssIcon /> },
  {id: 4, icon: <HtmlIcon />},
  {id: 5, icon: <NodejsIcon />},
  {id: 6, icon: <TypescriptIcon />},
  {id: 7, icon: <ReduxIcon />},
  {id: 8, icon: <DockerIcon />},
  {id: 9, icon: <MysqlIcon />},
  {id: 10, icon: <MongodbIcon />},
];

export const data = [
  {
    id: 1, 
    name: 'TrybeTunes',
    icon: [{iconImg: <ReactIcon />},{iconImg: <JavascriptIcon />}, {iconImg: <HtmlIcon />},{iconImg: <CssIcon  />}],
    imgUrl: TrybetunesIMG,
    urlDeploy: 'https://trybetunes-lemon.vercel.app/',
    urlRepository: 'https://github.com/EmersonFlorencio/trybetunes',
  },
  {
    id: 2,
    name: 'Star Wars Planets Search',
    icon: [{ iconImg: <ReactIcon /> }, { iconImg: <JavascriptIcon /> }, { iconImg: <HtmlIcon /> } , { iconImg: <CssIcon /> }], 
    imgUrl: StarWarsImg,
    urlDeploy: 'https://star-wars-planets-search-five.vercel.app/',
    urlRepository: 'https://github.com/EmersonFlorencio/Star-Wars-Planets-Search',
  },
  {
    id: 3,
    name: 'TrybeWallet',
    icon: [{iconImg: <ReactIcon />},{iconImg: <JavascriptIcon />}, {iconImg: <HtmlIcon />},{iconImg: <CssIcon  />}, {iconImg: <ReduxIcon />}],
    imgUrl: TrybeWallet,
    urlDeploy: '',
    urlRepository: 'https://github.com/EmersonFlorencio/TrybeWallet',
  },
  {
    id: 4, 
    name: 'Solar System',
    icon: [{iconImg: <ReactIcon />},{iconImg: <JavascriptIcon />}, {iconImg: <HtmlIcon />},{iconImg: <CssIcon  />}],
    imgUrl: SolarSystemImg,
    urlDeploy: '',
    urlRepository: 'https://github.com/EmersonFlorencio/Solar-System',
  },
  {
    id: 5, 
    name: 'Trybers and Dragons',
    icon: [{iconImg: <TypescriptIcon />},],
    imgUrl: TrybeAndDragons,
    urlDeploy: '',
    urlRepository: 'https://github.com/EmersonFlorencio/Projeto-Trybers-and-Dragons',
  },
  {
    id: 6, 
    name: 'Blogs Api',
    icon: [{iconImg: <JavascriptIcon />}, {iconImg: <DockerIcon />}],
    imgUrl: BlogsApi,
    urlDeploy: '',
    urlRepository: 'https://github.com/EmersonFlorencio/Blogs-Api',
  },
]