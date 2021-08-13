import { useState } from 'react'
import { AppContainer } from "./components/StyledComponents";
import PageRoutes from "./routes";
import Sidebar from "./components/Sidebar";
import { current } from 'immer';



function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  
  const currentWidth = collapsed ? 70 : 300


  
  return (
    <AppContainer width={currentWidth}>
      <Sidebar 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
        width={currentWidth}
        />
      <PageRoutes />
    </AppContainer>
  );
}

export default App;
