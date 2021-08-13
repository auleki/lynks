import * as BIcons from "react-icons/bi";
import * as BSIcon from "react-icons/bs"

export const colors = {
  yellow: "#E9DF00",
  orange: "#FB5012",
  altWhite: "#F2F2F2",
  white: "#fff",
  black: "#1a1a1a",
  darkBlue: "#03071e"
}

export const fonts = {
  headerFont: "Bungee Inline",
  titleFont: "Palette Mosaic",
  navbarFont: "Style Script",
  paragraphFont: "PT Sans",
  logoFont: "Luckiest Guy",
}

// export const icons = {
//   home: BIcons.BiHome,
//   saved: BIcons.BiBookmark,
//   hashtag: BIcons.BiHash,
//   explore: BIcons.BiPlanet,
//   dashboard: BIcons.BiGridAlt,
//   collections: BIcons.BiHive,
//   history: BIcons.BiHistory
// }

export const icons = {
  home: <BSIcon.BsHouse />,
  saved: <BSIcon.BsBookmark />,
  hashtag: <BSIcon.BsHash />,
  explore: <BIcons.BiPlanet />,
  dashboard: <BSIcon.BsGrid />,
  collections: <BSIcon.BsFolder />,
  history: <BIcons.BiHistory />
}