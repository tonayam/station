import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGES
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import SingleGame from "./pages/SingleGame";
import MyGames from "./pages/MyGames";
import Store from "./pages/Store";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Sidebar />
            <Home />
          </Route>
          <Route path='/store'>
            <Sidebar />
            <Store />
          </Route>
          <Route path='/sign-in'>
            <SignIn />
          </Route>
          <Route path='/faq'>
            <Sidebar />
            <FAQ />
          </Route>
          <Route path='/about-us'>
            <Sidebar />
            <About />
          </Route>
          <Route path='/game-details/:id'>
            <Sidebar />
            <SingleGame />
          </Route>
          <Route path='/my-games'>
            <Sidebar />
            <MyGames />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
