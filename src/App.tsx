import { useState } from 'react'
import { AppContainer } from "./components/StyledComponents";
import PageRoutes from "./routes";
import Sidebar from "./components/Sidebar";



function App() {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const currentWidth = collapsed ? 80 : 300

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
