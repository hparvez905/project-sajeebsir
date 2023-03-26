import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import  Service  from "./services/Service"
import Certification from './services/serviceComponent/Certification'
import Inspection from './services/serviceComponent/Inspection'
import LabDesign from './services/serviceComponent/LabDesign'

const Services = () => {
  return (
    <>
      <section className="mx-48 p-10" >
        <h1 className="text-3xl font-bold text-gray-700 mb-6">OUR SERVICES</h1>
       <div className="flex">
       <Router>
       <div className="flex-none">
       <Service/>
       </div>

        <div className="grow bg-red-600">
        <Switch>
          <Route path='/certification' component={Certification} exact>
            <Certification/>
          </Route>
          <Route path='/inspection' component={Inspection} exact>
            <Inspection/>
          </Route>
          <Route path='/labDesign' component={LabDesign} exact>
            <LabDesign/>
          </Route>
        </Switch>
        </div>
        
      </Router>
       </div>
       
      
      </section>
    </>
  )
}
export default Services;
