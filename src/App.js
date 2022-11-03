import { Route, Switch } from "react-router-dom";
import Users from "./pages/Users";
import Items from "./pages/Items";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/Items">
          <Items />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
