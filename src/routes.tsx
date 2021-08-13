import { Switch, Route } from "react-router-dom";
import Homepage from "./home-page/Homepage";

const PageRoutes = () => {
  return (
    <Switch>
      <Route path='/' component={Homepage} />
    </Switch>
  )
}

export default PageRoutes