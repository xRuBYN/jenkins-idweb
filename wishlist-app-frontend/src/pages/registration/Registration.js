import React from "react"
import { Route, Switch } from "react-router-dom"
import { paths } from "../../constants/constants"
import classes from "../commonCss/registration.module.css"

import CustomForm from "../../components/registrationForm/form"
import Error from "./Error/Error"
import Success from "./Success/Success"

const Registration = () => (
  <div className={classes.gradient}>
    <Switch>
      <Route path={paths.register + paths.success} component={Success} />
      <Route path={paths.register + paths.error} component={Error} />
      <Route path={paths.register} component={CustomForm} />
    </Switch>
  </div>
)

export default Registration
