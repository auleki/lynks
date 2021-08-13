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
    <SidebarS width={props.width}>
      <div className="logo">
        <h1>LYNKS</h1>
      </div>

      <div className="nav__links">
        <NavLink to="/">
          <span className="icon"></span>
          <div className="text">Home</div>
        </NavLink>
        <NavLink to="/">
          <span className="icon"></span>
          <div className="text">Explore</div>
        </NavLink>
        <NavLink to="/">
          <span className="icon"></span>
          <div className="text">Saved</div>
        </NavLink>
        <NavLink to="/">
          <span className="icon"></span>
          <div className="text">Trending</div>
        </NavLink>
        <NavLink to="/">
          <span className="icon"></span>
          <div className="text">History</div>
        </NavLink>

      </div>
      <Button onClick={toggleSidebar}>
        <i className="bx bx-user"></i>
      </Button>
    </SidebarS>
  )
}

export default Sidebar