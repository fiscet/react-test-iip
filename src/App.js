import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/layout.component";
import MainNav from "./components/main-nav/main-nav.component";
import BodyWrapper from "./components/body/body.component";
import MainContent from "./components/main-content/main-content.component";
import NewsPage from "./pages/news.page";

import "./style.scss";

export default function App() {
  return (
    <Layout>
      <MainNav className="bg-primary padding-top-xl padding-right-md padding-bottom-xl padding-left-md" />
      <BodyWrapper>
        <header
          className="bg-white padding-md border-bottom-xs border-grey"
          style={{ height: "95px" }}
        >
          Header
        </header>
        <div className="bg-white padding-md">breadcrumb</div>
        <MainContent className="mainContent padding-md">
          <Switch>
            <Route exact path="/" component={NewsPage} />
          </Switch>
        </MainContent>
      </BodyWrapper>
    </Layout>
  );
}
