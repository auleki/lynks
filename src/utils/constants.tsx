import * as BIcons from "react-icons/bi";
import * as BSIcon from "react-icons/bs"

export const colors = {
  yellow: "#E9DF00",
  orange: "#FB5012",
  altWhite: "#F2F2F2",
  white: "#fff",
  black: "#1a1a1a",
  darkBlue: "#03071e",
  gray: "#ddd"
}

export const fonts = {
  headerFont: "Bungee Inline",
  titleFont: "Palette Mosaic",
  navbarFont: "Style Script",
  paragraphFont: "PT Sans",
  logoFont: "Luckiest Guy",
}

export const lynks = [
  {
    siteName: "The Punch Newspaper",
    description: "This is an online version of the Nigerian Punch Newspaper. They have great information about things going on within the country and outside of it.",
    category: "news",
    siteLink: "https://punchng.com/",
  },
  {
    siteName: "Tech Crunch",
    description: "TechCrunch is an American online newspaper focusing on high tech and startup companies. It was founded in June 2005 by partners of Archimedes Ventures, Michael Arrington and Keith Teare, and was acquired in 2010 by AOL for $25 million.",
    category: "tech",
    siteLink: "https://techcrunch.com/",
  },
  {
    siteName: "Tech Cabal",
    description: "In Nigeria this is one of the most informative sites with vital information on major aspects of tech",
    category: "tech",
    siteLink: "https://techcabal.com/",
  },
  {
    siteName: "Business Insider Africa",
    description: "One of the most informative business sites that give up to date information on all aspects of business, both international and local",
    category: "business",
    siteLink: "https://africa.businessinsider.com/",
  },
  {
    siteName: "The LA Times",
    description: "The Los Angeles Times is the largest metropolitan daily newspaper in the country, with a daily readership of 1.3 million and 2 million on Sunday, more than 30 million unique latimes.com visitors monthly and a combined print and online local weekly audience of 4.6 million. The Pulitzer Prize-winning Times has been covering Southern California for more than 139 years.",
    category: "news",
    siteLink: "https://www.latimes.com/",
  },
  {
    siteName: "Enda Gadgets",
    description: "One of the top sites for reviews on gadgets alongisde entertainment, gaming and awesome guides",
    category: "gadgets",
    siteLink: "https://www.engadget.com/",
  }
]

export const icons = {
  home: <BSIcon.BsHouse />,
  saved: <BSIcon.BsBookmark />,
  hashtag: <BSIcon.BsHash />,
  explore: <BIcons.BiPlanet />,
  dashboard: <BSIcon.BsGrid />,
  collections: <BSIcon.BsFolder />,
  history: <BIcons.BiHistory />,
  toggle: <BIcons.BiCollapse />,
  link: <BSIcon.BsArrowRight />,
  options: <BIcons.BiDotsVerticalRounded />,
  save: <BSIcon.BsBookmarkPlus />
}