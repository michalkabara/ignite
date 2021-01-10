import React from "react"
//components and pages
import Home from "./pages/Home"
import Nav from "./components/Nav"
//Styles
import GlobalStyles from "./components/GlobalStyles"
//Routers
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  )
}

export default App
