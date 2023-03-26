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

       <div className="flex">
      
       <Router>
       <div className="flex-none">
       <h1 className="text-3xl font-bold text-gray-700 mb-6">OUR SERVICES</h1>
       <Service/>
       </div>

        <div className="grow  ml-12">
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
