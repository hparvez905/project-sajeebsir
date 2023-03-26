import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  Service  from "./services/Service"
import Certification from './services/serviceComponent/Certification'
import Inspection from './services/serviceComponent/Inspection'
import LabDesign from './services/serviceComponent/LabDesign'

const Services = () => {
  return (
    <>
      <section >
        <h1>Welcome To Services Page</h1>
        <Router>
       <Service/>

        <Switch>
          <Route path='/certification' compoent={Certification} exact>
            <Certification/>
          </Route>
          <Route path='/inspection' compoent={Inspection} exact>
            <Inspection/>
          </Route>
          <Route path='/labDesign' compoent={LabDesign} exact>
            <LabDesign/>
          </Route>
        </Switch>
        
      </Router>
       
      
      </section>
    </>
  )
}
export default Services;
