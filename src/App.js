import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"
import Clients from "./compoent/Clients"
import Contact from "./compoent/Contact"
import Services from "./compoent/Services"
import  Resources  from "./compoent/Resources"
import  Course  from "./compoent/Course"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Footer } from "./compoent/footer/Footer"
import NotFound from "./compoent/NotFound"


//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/clients' compoent={Clients} exact>
            <Clients />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
          </Route>
          <Route path='/resources' compoent={Resources} exact>
            <Resources/>
          </Route>
          <Route path='/course' compoent={Course} exact>
            <Course/>
          </Route>
          <Route path="*" compoent={NotFound}>
            <NotFound/>

          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  )
}

export default App
