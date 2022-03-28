import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import LandingPage from "./components/landingpage";
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/about';


class App extends Component {
  render() {
  return (
    <Router>
      <div className="demo-gib-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Mark Horsfall
              </Link>
            }
            scroll
            >
              <Navigation>
                <Link to="/">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
              </Navigation>
            </Header>
            <Drawer
              title={
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Mark Horsfall
                </Link>
              }
              >
                <Navigation>
                  <Link to="/">About</Link>
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/resume">Resume</Link>
                </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />

                <Switch>
                  <Route exact path="/home" component={LandingPage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/resume" component={Resume} />
                  <Route exact path="/portfolio" component={Portfolio} />
                  <Route exact path="/maintenance-machine" component={() => {
                    window.open("https://horsfalm.github.io/maintenance-machine", "_blank");
                    return null;
                  }}
                  ></Route>
                  <Route path="/" component={LandingPage} />
                </Switch>
              </Content>
        </Layout>
      </div>
    </Router>
  );
}
}

export default App;
