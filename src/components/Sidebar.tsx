import { Button, SidebarS } from "./StyledComponents"
import { icons } from "../utils/constants"
import { NavLink } from "react-router-dom"

export interface ISidebarProps {
  width: number
  collapsed: boolean
  setCollapsed: Function
}

const Sidebar = (props: ISidebarProps) => {
  console.log('Width size', props)

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
          <div className="text">Home</div>
        </NavLink>
        <NavLink to="/explore">
          <span className="icon">{icons.explore}</span>
          <div className="text">Explore</div>
        </NavLink>
        <NavLink to="/saved">
          <span className="icon">{icons.saved}</span>
          <div className="text">Saved</div>
        </NavLink>
        <NavLink to="/trending">
          <span className="icon">{icons.hashtag}</span>
          <div className="text">Trending</div>
        </NavLink>
        <NavLink to="/history">
          <span className="icon">{icons.history}</span>
          <div className="text">History</div>
        </NavLink>

      </div>
      <Button onClick={toggleSidebar}>
        {icons.toggle}
      </Button>
    </SidebarS>
  )
}

export default Sidebar