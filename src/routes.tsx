import { Switch, Route } from "react-router-dom";
import ExplorePage from "./pages/explore/ExplorePage";
import HistoryPage from "./pages/history/HistoryPage";
import Homepage from "./pages/home/Homepage";
import SavedPage from "./pages/saved/SavedPage";
import TrendingPage from "./pages/trending/TrendingPage";

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/explore' component={ExplorePage} />
      <Route path='/saved' component={SavedPage} />
      <Route path='/trending' component={TrendingPage} />
      <Route path='/history' component={HistoryPage} />
    </Switch>
  )
}

export default PageRoutes