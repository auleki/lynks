import { Button, SidebarS } from "./StyledComponents"

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
      <h1>Sidebar</h1>
      <p>Navbar is {props.collapsed ? "open" : "closed"}</p>
      <Button onClick={toggleSidebar}>Toggle nav</Button>
    </SidebarS>
  )
}

export default Sidebar