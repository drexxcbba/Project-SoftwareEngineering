import React from "react";
import { TopMenu } from "./layout";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { Home } from "./Home";

export function Admin() {
  let { path } = useRouteMatch();
  return (
    <>
      <TopMenu />
      <Grid>
        <Grid.Column>
          <Switch>
            <Route exact path={path} component={Home} />
            <Route exact path={`${path}/posts`} component={Home} />
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Grid.Column>
      </Grid>
    </>
  );
}
