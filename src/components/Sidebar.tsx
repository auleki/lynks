import { IconButton, SidebarS } from "./StyledComponents"
import { icons } from "../utils/constants"
import { NavLink } from "react-router-dom"

export interface ISidebarProps {
  width: number
  collapsed: boolean
  setCollapsed: Function
}

const Sidebar = (props: ISidebarProps) => {
  const toggleSidebar = () => props.setCollapsed(!props.collapsed)
  return (
    <SidebarS width={props.width} collapsed={props.collapsed}>

      {!props.collapsed && (
        <div className="logo">
          <h1>LYNKS</h1>
        </div>
      )}

      <div className="nav__links">
        <NavLink exact to="/">
          <span className="icon">{icons.home}</span>
          <span className="text">Home</span>
        </NavLink>
        <NavLink to="/explore">
          <span className="icon">{icons.explore}</span>
          <span className="text">Explore</span>
        </NavLink>
        <NavLink to="/saved">
          <span className="icon">{icons.saved}</span>
          <span className="text">Saved</span>
        </NavLink>
        <NavLink to="/trending">
          <span className="icon">{icons.hashtag}</span>
          <span className="text">Trending</span>
        </NavLink>
        <NavLink to="/history">
          <span className="icon">{icons.history}</span>
          <span className="text">History</span>
        </NavLink>
        <IconButton onClick={toggleSidebar}>
          {!props.collapsed ? icons.altArrowLeft : icons.altArrowRight}
        </IconButton>

      </div>

    </SidebarS>
  )
}

export default Sidebar