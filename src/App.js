import React from "react";
import Sidebar from "./components/Sidebar";
import Body from "./components/Body";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import SingleGame from "./pages/SingleGame";
import MyGames from "./pages/MyGames";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Sidebar />
            <Body />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/faq'>
            <FAQ />
          </Route>
          <Route path='/about-us'>
            <About />
          </Route>
          <Route path='/game-details:id'>
            <SingleGame />
          </Route>
          <Route path='/my-games'>
            <MyGames />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
